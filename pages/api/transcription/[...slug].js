export default function handler(req, res) {
    if(req.method === 'POST') {
        console.log(`webhook received: ${JSON.stringify(req.body)}`)
        req.io.emit(`transcript`, req.body)
        res.sendStatus(200)
    } else {
        const { slug } = req.query
        res.end(`Post: ${slug.join(', ')}`)
    }
  }