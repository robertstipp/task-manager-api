const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//
// Goal: Pull JWT secret and database URL into env vars
//
// 1. Create two new env vars: JWT_SECRET and MONGODB_URL
// 2. Setup values for each in the development env fils
// 3. Swap out three hardcoded values
// 4. Test your work. Create new user and get their profile

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robertstipp17@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robertstipp17@gmail.com",
    subject: "Sorry your are leaving",
    text: `${name}, I am so so sorry you are leaving. Let us know why you cancelled so we this never happens again`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
