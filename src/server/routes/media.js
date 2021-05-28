const router = require("express").Router();
const multer = require('multer')
const { RevAiApiClient } = require('revai-node-sdk');

const port = 3000;
//const access_token = process.env.REVAI_ACCESS_TOKEN;
const media_path = process.env.media_path || 'public/media/'
//const base_url = process.env.base_url || `http://localhost${port}`

// setup multer to get file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, media_path)
    },
  
    // for this example we just want to use the same filename as before
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
const upload = multer({storage})

/**
 *  Notes: There is currently a 10MB limit on the size of the audio file because 
 * of a limitiation in axios with the maxBodyLength and maxContentLength
 */
 router.post('/', upload.single('mediaFile'), async (req, res, next) => {  
    const media_url = `${req.baseUrl}/api/media/${req.file.filename}`
    const webhook_url = `${req.baseUrl}/api/job`;
    console.log(`submit job: ${JSON.stringify({media_url, webhook_url})}`)
    
    try {
      const job = await req.asyncClient.submitJobUrl(media_url, {
        callback_url: webhook_url,
      })
      res.json(job);
    } catch(error) {
      console.dir(`Error: ${error}`)
      res.status(500).json({error})
    }
  })

module.exports = router;