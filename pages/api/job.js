export default function handler(req, res) {
    if(req.method === 'POST') {
        console.log(`webhook received: ${JSON.stringify(req.body)}`)
        req.io.emit(`job`, req.body)
        res.sendStatus(200)
    } else {
        res.status("200").send("Get a job")
    }
}