const express = require('express');
const qr = require('qr-image');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/generate-qr', (req, res) => {
  const url = req.body.URL;
  const qrPng = qr.imageSync(url, { type: 'png' });
  res.send(qrPng.toString('base64'));
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
