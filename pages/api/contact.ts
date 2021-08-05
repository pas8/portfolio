export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: process.env.REQ_EMAIL,
              pass: process.env.PASSWORD,
           },
      secure: true,
    });
    
    const mailData = {
        user: process.env.REQ_EMAIL,
        to: process.env.RES_EMAIL,
        subject: `Message From ${req.body.name} and ${req.body.email}: ${req.body.title}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<h1>${req.body.title}</h1><div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }