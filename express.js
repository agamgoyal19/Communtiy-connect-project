const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// POST endpoint to handle sign-up form submissions
app.post('/signup', (req, res) => {
    // Process the form data sent from the frontend
    const { fullname, email, newUsername, newPassword } = req.body;

    // Perform validation, database operations, etc.
    // For demonstration purposes, log the received data
    console.log('Received sign-up data:', { fullname, email, newUsername, newPassword });

    // Send back a response to the frontend (can be customized as needed)
    res.status(200).send('Sign-up successful!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
