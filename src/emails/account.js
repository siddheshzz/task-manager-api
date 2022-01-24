const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sidzope23@gmail.com',
        subject: 'Thanks for joining in!!',
        text: `Hi  ${name},\n Welcome to the task Manager! \n Let me know how you get along with the app.`
    })

}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sidzope23@gmail.com',
        subject: 'Good Bye 😥💔',
        text: `Hi ${name},\nHope it has been a great ride with us! \nLet me know how we could have improved services for you.\nArigato`
    })

}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancelationEmail: sendCancelationEmail
}