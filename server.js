const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const StreamingClient = require('./lib/StreamingClient')


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const streamingClient = new StreamingClient(process.env.REVAI_ACCESS_TOKEN, (data) => {
  io.emit('transcript', data)
})

// socket.io server
io.on('connection', socket => {
  console.log(`connection made (${socket.id})`)
  
  socket.on('disconnect', () => {
    console.log(`disconnection (${socket.id})`)
  })

  socket.on('stream', data => {
    //console.log('stream data received')
    //revStream && revStream.write(data)
    streamingClient.stream(data)
  })

  socket.on('message',  message => {
    console.log(`message recieved: ${message}`)
  })
})

nextApp.prepare().then(() => {
  // app.get('/messages/:chat', (req, res) => {
  //   res.json(messages[req.params.chat])
  // })

  app.use(function (req, res, next) {
    req.io = io;
    req.streamingClient = streamingClient
    
    next();
  });

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  app.post('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})