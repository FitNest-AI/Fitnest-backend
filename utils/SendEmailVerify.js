const nodemailer = require('nodemailer');

// init transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const content = (user, verify, subject, message) => {
  let title;
  let text;
  let link;

  if (verify === 'register') {
    title = `<p style="margin: 0; padding: 0;">Your Fitnest account has been created!</p>`;
    text = `<p style="margin: 0; padding: 0;>Please verify your email address by clicking on this link to complete the signup process:</p>`;
    link = `<p style="margin: 0; padding: 0;"><a href="http://${process.env.HOST}:${process.env.PORT}/api/v1/auth/verify?token=${user.token}"><p>${message}</p></a>`;
  }

  if (verify === 'resetPassword') {
    title = `<p style="margin: 0; padding: 0;">Your Fitnest account request reset Password!</p>`;
    text = `<p style="margin: 0; padding: 0;>Please reset your password by clicking on this link to complete the process:</p>`;
    link = `<p style="margin: 0; padding: 0;"><a href="http://${process.env.HOST}:${process.env.PORT}/api/v1/auth/reset-password?token=${user.token}"><p>${message}</p></a>`;
  }
  if (verify === 'newPassword') {
    title = `<p style="margin: 0; padding: 0;">Your Fitnest account has been new password!</p>`;
    text = `<p style="margin: 0; padding: 0;>Your new password</p>`;
    link = `<h1 style="margin: 0; padding: 0 10px;">${message}</h1>`;
  }

  return `
    <div style="width: 100%; min-width: 100%; margin: 0; padding: 0;">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <div style="font-family: 'Inter', sans-serif;">
          <div class="head" style=" background-color: #FF3758; display: flex; align-items: center; vertical-align: middle; padding: 50px;">
              <h1 style="font-weight: bolder; color: white;">FitNest ${subject}</h1>
          </div>
          <div class="body" style="background-color: #2A2A2C; color: white; padding: 50px;">
              ${title}
              ${text}
              ${link}
              <p style="margin: 0; padding: 0;">If you did not initiate this request, you may safely ignore this message. The request will expire shortly.</p>
              <p style="margin: 0; padding: 0; color: gray">FitNest</p>
          </div>
      </div>
    </div>
  `;
};

const SendEmailVerify = async (verify, user, subject, message) => {
  const emailContent = await content(user, verify, subject, message);

  await transporter.sendMail({
    from: process.env.FORWARD_EMAIL_USER,
    to: user.email,
    subject: subject,
    html: emailContent,
  }).then((info) => {
    console.log('Message sent: %s', info.messageId);
  });
};

module.exports = SendEmailVerify;
