import { create } from "combined-stream";
import multer from "multer"
import {RevApiClient} from 'revai-node-sdk'

const media_path = process.env.media_path || './public/media/'
const access_token = process.env.access_token;
const base_url = process.env.base_url || `http://localhost${'3000'}`

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

const createJob = async (req, res) => {
    try {
        const media_url = `${base_url}/media/${req.file.filename}`
        const webhook_url = `${base_url}/job`;
        const asyncClient = new RevAiApiClient(access_token);
        const job = await asyncClient.submitJobUrl(media_url, {
          callback_url: webhook_url,
        })
        res.json(job);
      } catch(err) {
        console.dir(`Error: ${err.message}`)
        res.status(500).json({error: err.message})
      }

    console.log(`Media File: ${req.file.filename}`)
}
  
const upload = multer({ storage })

async function handler(req, res) {
    if(req.method === 'POST') {
        upload.single("mediaFile")(req, {}, async (err) => {
            await createJob(req, res)
          })
        //res.sendStatus(200)
    } else {
        res.status("200").send("Get a job")
    }
}

export default handler