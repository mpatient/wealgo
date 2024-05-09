const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "vincemarc.mr@gmail.com",//"blastleez11@gmail.com",
    pass: "afzl lrqk uhuy btwk",//"09092142897jay",
  },
  secure: true, // use SSL
});

// Define the POST endpoint for sending emails
app.post("/v1/email", (req, res) => {
  const { to, subject, text } = req.body;

  // Create email data
  const mailData = {
    from: "onlineshits27@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  // Send the email
  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Mail send", messageId: info.messageId });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
