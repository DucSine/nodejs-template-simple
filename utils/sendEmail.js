const nodemailer = require('nodemailer')

module.exports.sendEmail = async (options) => {
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.MAIL_SERVICE,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    //SEND EMAIL WITH DEFINED TRANSPORT OBJECT
    const info = await transport.sendMail({
        from: process.env.SMTP_NAME,
        to: options.email,
        subject: options.subject,
        html: options.message
    })
    console.log('Message sent: %s', info.messageId)
}