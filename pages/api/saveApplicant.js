// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {

    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${process.env.BACK_TOKEN}`,
        }
    }

    const createEntry = async(data, callback)=>{

        axios.post(`${process.env.BACK_DOMAIN}/api/applicants?populate=*`,{
            data: {
                name: data.name,
                email: data.email,
                message: data.message,
            }
        }, axiosConfig)
        .then(async(response)=>{ 
            console.log(response.data.data.id)
            callback(response.data.data.id)
        })
    }

    try {

        await createEntry(req.body, (applicantId)=>res.status(200).json({applicantId}))

    }
    catch (error) {
        res.status(400).json({message:error.message})
    }
    
  }