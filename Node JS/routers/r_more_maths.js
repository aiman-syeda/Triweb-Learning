const express = require('express');
const mathematicalController = require("/Users/syeda/Documents/projects/Triweb-Learning/Node JS/controller/more_maths.js");
const router = express.Router();

router.post('/even-odd',mathematicalController.even_odd);

router.post('/compare-numbers',mathematicalController.compare_nums);

router.post('/string-to-array',mathematicalController.raw_data);


module.exports = router;