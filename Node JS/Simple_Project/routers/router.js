const express = require('express');
const mathematicalController = require("/Users/syeda/Documents/projects/Triweb-Learning/Node JS/Simple_Project/controllers/controller.js");
const router = express.Router();

router.post('/even-odd',mathematicalController.even_odd);


module.exports = router;