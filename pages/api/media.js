import multer from "multer"
import {RevAiApiClient} from 'revai-node-sdk'

const media_path = process.env.media_path || './public/media/'
const access_token = process.env.revai_access_token;
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

const createJob = async (filename) => {
      const media_url = `${base_url}/media/${filename}`
      const webhook_url = `${base_url}/api/job`;
      
      return asyncClient.submitJobUrl(media_url, {
        callback_url: webhook_url,
      })
  //     //res.json(job);
  // } catch(err) {
  //   console.dir(`Error: ${err.message}`)
  //   res.status(500).json({error: err.message})
  // }
}
  
export default async (req, res) => {
    if(req.method === 'POST') {
        await upload.single("mediaFile")(req, res, (err) => {
          if(err instanceof multer.MulterError) {
            return null
          } else {
            console.log(`Media File: ${req.file.filename}`)
            createJob(req.file.filename).then(job => {
              res.json(job)
            })
          }
        })
    } else {
        res.status("200").send("Get a job")
    }
}
