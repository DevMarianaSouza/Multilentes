// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  
  // const upload = require('multer')()
  require('dotenv').config()
  const fs = require('fs')
  let nodemailer = require('nodemailer')

  // upload.single('curriculum')

  console.log("REQ.BODY:")
  console.log(req.body)

  const emailInfo = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  })

  const fromObj = {
    name: emailInfo.name,
    address: emailInfo.email
  }

  const cvFilePath = emailInfo.curriculum
  const cvFileArr = emailInfo.curriculum.split('\\')

  const mailData = {
    from: fromObj,
    replyTo: fromObj,
    to: [emailInfo.recipient, 'martins@chavemestra.net'],
    subject: 'Mensagem do site',
    text: emailInfo.message + " | Sent from: " + emailInfo.email,
    html: `<div>${emailInfo.message}</div><p>Sent from:${emailInfo.email}</p>`,
    attachments: [
      {
        filename: cvFileArr[cvFileArr.length-1],
        path: fs.createReadStream(cvFilePath)
      }
    ]
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.error(err)
    else
      console.log(info)
  })

  res.status(200)
}