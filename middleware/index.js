const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set maximum file size to 100MB
const maxSize = 100 * 1024 * 1024;

// Set up storage
const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.body.userId || req.query.userId || '';
    const userDir = path.join(__dirname, '../videos', userId);
    console.log(userDir);

    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir, { recursive: true });
    }

    cb(null, userDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: localStorage,
  limits: { fileSize: maxSize },
});

module.exports = upload;