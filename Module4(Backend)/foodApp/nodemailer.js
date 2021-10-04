const nodemailer = require('nodemailer');
const {nodemailer_passkey} = require('./nodemailer');
// portNos for protocols
// gmail-> 587, https-> 443, http->8080

// ye hamne pool/bridge bna diya do devico ke beech to talk
// signUp function ka userObj yha par aaya
// userObj => name, email, password here password can be used as temporary password
module.exports = async function sendMail(userObj) { // documentation se padke async funct bnaya
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'amit9810970545@gmail.com', // generated ethereal user
            pass: nodemailer_passkey, // generated ethereal password
            },
        });

        var Ownsubject,Owntext,Ownhtml;
        Ownsubject = `Thank You for Signing ${userObj.name}`
        Owntext=`Hope you have a good time! Here are your details-
        Name - ${userObj.name}
        Email - ${userObj.email}`

        Ownhtml='<h1>Welcome to foodApp.com</h1>'

        //  to: we can sen to multiple gmailids so "abc@gmail.com,xyz@gmail.com"
        // isse samn bhejenge
        let info = await transporter.sendMail({
            from: '"foodApp 🍦" <amit9810970545@gmail.com>', // sender address
            to: "amitkumar654521@gmail.com", // list of receivers
            subject: Ownsubject, // Subject line
            text: Owntext, // plain text body
            html: Ownhtml, // html body
        });

        console.log("Message sent: %s", info.messageId);
};