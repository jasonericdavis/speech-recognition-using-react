export default function handler(req, res) {
    if(req.method === 'POST') {
        console.log('Closing the Stream')
        req.streamingClient.end()
        res.status(200).send('Stream Stopped')
    }
    res.status(404).send()
}