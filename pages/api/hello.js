export default function handler(req, res) {
    req.socket.server.emit('message', 'Whats up yall')
    res.status(200).json({ name: 'John Doe' })
  }