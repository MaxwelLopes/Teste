const express = require('express');
const { helloWorldController } = require('../controller/helloWorldController.js');

const router = express.Router();

router.get('/', helloWorldController);

module.exports = router;
