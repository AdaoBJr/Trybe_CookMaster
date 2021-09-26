const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, _file, callback) => {
    callback(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, _file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

module.exports = multer({ storage });