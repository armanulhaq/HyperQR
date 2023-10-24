const qr = require('qr-image');

module.exports = (req, res) => {
  const url = req.body.URL;
  const qrPng = qr.imageSync(url, { type: 'png' });
  res.send(qrPng.toString('base64'));
};
