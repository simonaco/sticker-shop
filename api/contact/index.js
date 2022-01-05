/* eslint-disable func-names */
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
module.exports = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')
  context.log(req.body)
  const msg = {
    to: 'simona.cotin@gmail.com',
    from: 'simona.cotin@gmail.com',
    subject: `${req.body.values.name} sent you a message`,
    text: `Checkout this new message coming from your website! ${req.body.values.message}`,
  }
  context.log(msg)
  try {
    const response = await sgMail.send(msg)
    context.log(response[0].statusCode)
    context.res.json('Email Sent')
  } catch (e) {
    context.log(e)
    context.res.status(500).json(e)
  }
}