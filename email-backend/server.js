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
                pass: 'rszd pmpi cllu znuo',  // Replace with your email password or app password
            },
        });

        // Define the HTML template
        const emailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                }
                .container {
                    background-color: #f4f4f4;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #4CAF50;
                }
                .message {
                    background-color: #fff;
                    padding: 10px;
                    border-radius: 5px;
                    margin-top: 10px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>New Message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <div class="message">
                    <p>${message}</p>
                </div>
                <div class="footer">
                    <p>This is an automated message. Please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
        `;

        // Set up mail options with HTML body
        const mailOptions = {
            from: email,
            to: 'alraravuthar012@gmail.com', // Replace with your email
            subject: `Message from ${name}`,
            html: emailTemplate, // Use the HTML template here
        };

        await transporter.sendMail(mailOptions);
        res.send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Error Details:", error); // Log the error for debugging
        res.status(500).send({ error: 'Error sending email. Please check the server logs for details.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
