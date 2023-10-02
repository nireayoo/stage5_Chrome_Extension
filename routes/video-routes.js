const express = require('express');
const router = express.Router();
const videoController = require('../controller/video-controller');


//router.get('/', test);
router.post('/start', videoController.startRecording);
router.post('/add/:id', videoController.addData);
router.post('/save/:id', videoController.stopRecording);

module.exports = router;