import {RevAiApiClient, CaptionType} from 'revai-node-sdk'

export default async (req, res) => {
    if(req.method === 'GET') {
        try {
            const asyncClient = new RevAiApiClient(process.env.REVAI_ACCESS_TOKEN)
            const {jobId} = req.query
            console.dir(jobId)
            let output = '';
            await asyncClient.getCaptions(jobId, CaptionType.VTT)
            .then(response => {
              const stream = response
              stream.on('data', chunk => {
                output += chunk
              })
        
              stream.on('end', () => {
                console.log(output);
                res.status("200").send(output)
              })
            })
          } catch(err) {
            console.error(err.message)
            res.sendStatus(500)
          }
    } else {
        res.status("200").send("Get a job")
    }
}