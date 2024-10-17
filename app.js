const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/about', (req, res) => {
res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

app.get('/contact', (req, res) => {
res.sendFile(path.join(__dirname, 'html', 'contact.html'));
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
