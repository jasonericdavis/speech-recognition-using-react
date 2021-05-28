const env = require('dotenv')
const express = require('express')
const http = require('http')
const { RevAiApiClient, CaptionType } = require('revai-node-sdk');
const { Server } = require('socket.io')
const StreamingClient = require('./StreamingClient')
const routes = require("./routes");

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

env.config();
const access_token = process.env.REVAI_ACCESS_TOKEN;
const mediaPath = process.env.media_path || 'public/media/'

// Setup the Rev.ai sdk
const asyncClient = new RevAiApiClient(access_token);
const streamingClient = new StreamingClient(access_token, (data) => {
  io.emit('transcript', data)
})

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

app.use((req, res, next) => {
  req.streamingClient = streamingClient
  req.asyncClient = asyncClient
  req.mediaPath = mediaPath
  req.baseUrl = process.env.base_url || `http://localhost${port}`
  next();
})

app.use('/api/stream', routes.stream);
app.use('/api/media', routes.media);
app.use('/api/transcription', routes.transcription)
app.use('/api/caption', routes.caption)
app.use(express.static('public'));
app.use('/media', express.static(mediaPath));

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})