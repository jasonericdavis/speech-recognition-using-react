const router = require("express").Router();

router.post('/start', (req, res) => {
    console.log('Opening the Stream')
    req.streamingClient.start()
    res.status(200).send('Stream Started')
})
  
router.post('/stop', (req, res) => {
    console.log('Closing the Stream')
    req.streamingClient.end()
    res.status(200).send('Stream Stopped')
})

module.exports = router