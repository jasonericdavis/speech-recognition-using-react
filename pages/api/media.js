import multer from "multer"
import {RevAiApiClient} from 'revai-node-sdk'

const media_path = process.env.media_path || './public/media/'
const access_token = process.env.REVAI_ACCESS_TOKEN;
const base_url = process.env.base_url || `http://localhost:3000`
const asyncClient = new RevAiApiClient(access_token);

export const config = {
  api: {
    bodyParser: false,
  },
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, media_path)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
})
  
const upload = multer({ storage })

const createJob = async (req, res) => {
    try {
        const media_url = `${base_url}/media/${req.file.filename}`
        const webhook_url = `${base_url}/api/job`;
        
        const job = await asyncClient.submitJobUrl(media_url, {
          callback_url: webhook_url,
        })
        res.json(job);
      } catch(err) {
        console.dir(`Error: ${err.message}`)
        res.status(500).json({error: err.message})
      }

    
}
  
async function handler(req, res) {
    if(req.method === 'POST') {
        upload.single("mediaFile")(req, {}, async (err) => {
          if(err) {
            res.status("500").send(err.message)
            return
          }
            console.log(`Media File: ${req.file.filename}`)
            await createJob(req, res)
        })
    } else {
        res.status("200").send("Get a job")
    }
}

export default handler