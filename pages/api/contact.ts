
const nodemailer = require("nodemailer");

export default async (req: any, res: any) => {


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "myEmail@gmail.com",
        pass: "password",
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

  const mailData = {
    user: process.env.REQ_EMAIL,
    to: process.env.RES_EMAIL,
    subject: `Message From ${ req.body.name || req.body.email } `,
    text: req.body.title + req.body.message + ' | Sent from: ' + req.body.email,
  };

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};