export default (req: any, res: any) => {
  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.REQ_EMAIL,
      pass: process.env.PASSWORD
    },
    secure: true
  });

  const mailData = {
    user: process.env.REQ_EMAIL,
    to: process.env.RES_EMAIL,
    subject: `Message From ${ req.body.name || req.body.email } `,
    text: req.body.title + req.body.message + ' | Sent from: ' + req.body.email,
  };
console.log(mailData,PASSWORD)
  transporter.sendMail(mailData, (err: any) => {
    if (err) res.send('error',err);
  });
  res.send('success');
};
