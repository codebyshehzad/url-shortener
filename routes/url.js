const express = require('express');

const router = express.Router();

const {handleGenerateNewShortURL,handleGetAnalytics,handleGetTimestamp} = require('../controllers/url');

router.post('/',handleGenerateNewShortURL);
router.get('/:shortId',handleGetTimestamp);

router.get('/analytics/:shortId',handleGetAnalytics);


module.exports = router;
