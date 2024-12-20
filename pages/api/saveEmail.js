// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
    //const backendDomain = 'https://clean-air-backend-production.up.railway.app'

    try {

        const body = {data: JSON.parse(req.body)}
        
        fetch(`${process.env.BACK_DOMAIN}/api/emails`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.BACK_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        })
        .then(async(response)=>{
            const data = await response.json()
            res.status(200).json({status:200, data})
        })
        .catch(error=>{
            throw new Error(error.message)
        })

    }
    catch (error) {
        throw new Error(error.message)
    }
    
  }