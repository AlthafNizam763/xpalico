const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('Email Backend Server is Running!');
});

// Email route
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Change as per your email service
            auth: {
                user: 'alraravuthar012@gmail.com', // Replace with your email
                pass: '9633146330',  // Replace with your email password
            },
        });

        const mailOptions = {
            from: email,
            to: 'alraravuthar012@gmail.com', // Replace with your email
            subject: `Message from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error sending email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
