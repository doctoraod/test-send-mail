const smtpTransport = require('nodemailer-smtp-transport')
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: '', // user
    pass: '' // password
  }
}));

var mailOptions = {
  from: 'suvichan_pra@sendit.asia',
  to: 'suvichan_pra@sendit.asia',
  subject: '[TEST] Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});