const express = require('express');
const app = express();

app.use(express.json());

// POST request handler
app.post('/whatsapp', (req, res) => {
    // Handle the POST request
    res.send('POST request to the /whatsapp endpoint');
});

// GET request handler
app.get('/whatsapp', (req, res) => {
    // Handle the GET request
    res.send('GET request to the /whatsapp endpoint');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
