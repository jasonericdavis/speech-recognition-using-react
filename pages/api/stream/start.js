export default function handler(req, res) {
    if(req.method === 'POST') {
        //req.io.emit('message', 'Whats up yall')
        console.log('Opening the Stream')
        req.streamingClient.start()
        res.status(200).send('Stream Started')
    }
    res.status(404).send()
}