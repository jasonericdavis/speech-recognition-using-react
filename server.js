const env = require('dotenv').config()
const express = require('express')
const http = require('http')
const { RevAiApiClient } = require('revai-node-sdk');
const { Server } = require('socket.io')
const StreamingClient = require('./src/server/lib/StreamingClient')
const routes = require("./src/server/routes");

const app = express();
const port = 3000;
const server = http.createServer(app);

// add cors to be able to connect to the websocket locally
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

const access_token = process.env.REVAI_ACCESS_TOKEN;
const mediaPath = process.env.MEDIA_PATH || 'public/media/'

// Setup the Rev.ai sdk
const asyncClient = new RevAiApiClient(access_token);
const streamingClient = new StreamingClient(access_token, (data) => {
  io.emit('transcript', data)
})

// The socket connections and messages that will be listened for
io.on('connection', (socket) => {
  console.log(`connection made (${socket.id})`)
  
  socket.on('disconnect', () => {
    console.log(`disconnection (${socket.id})`)
  })

  socket.on('stream', data => {
    streamingClient.stream(data)
  })
})

// This middleware has to be called before the routes
app.use(express.json());
 
// This middleware adds objects that will later need to be in other routes 
app.use((req, res, next) => {
  req.io = io
  req.streamingClient = streamingClient
  req.asyncClient = asyncClient
  req.mediaPath = mediaPath
  req.webhookBaseUrl = process.env.WEBHOOK_BASE_URL || `http://localhost${port}`
  next();
})

// The separate routes to be used
app.use('/api/stream', routes.stream);
app.use('/api/media', routes.media);
app.use('/api/transcription', routes.transcription)
app.use('/api/caption', routes.caption)
app.use('/api/job', routes.job)

// The static folders to look for files that aren't found in the routes
app.use(express.static('build'));
app.use('/media', express.static(mediaPath));

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})