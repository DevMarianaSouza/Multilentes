// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {

    const contentType = req.rawHeaders.find(el=>el.includes('multipart/form-data'))

    //console.log(req.rawHeaders)
    //console.log(contentType)

    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${process.env.BACK_TOKEN}`,
            'Content-Type': contentType
        }
    }

    try {

        console.log('uploadFile')

        axios.post(`${process.env.BACK_DOMAIN}/api/upload`, req.body, axiosConfig)
            .then(response=>{

                /* console.log(response.data[0])
                {
                    id: 3,
                    name: '20064.pdf',
                    alternativeText: null,
                    caption: null,
                    width: null,
                    height: null,
                    formats: null,
                    hash: '20064_e147ebcafe',
                    ext: '.pdf',
                    mime: 'application/pdf',
                    size: 25.84,
                    url: '/uploads/20064_e147ebcafe.pdf',
                    previewUrl: null,
                    provider: 'local',
                    provider_metadata: null,
                    createdAt: '2022-10-12T16:01:08.684Z',
                    updatedAt: '2022-10-12T16:01:08.684Z'
                } */
                const fileId = response.data[0].id

                res.status(200).json({fileId, url:response.data[0].url})
            })
            .catch(err => {
                res.status(400).json({message:err.message})
            })
        

    }
    catch (error) {
        throw new Error(error.message)
    }
    
  }