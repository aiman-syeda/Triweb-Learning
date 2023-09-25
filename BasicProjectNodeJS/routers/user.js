const express = require('express');
const userController = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/controllers/user.js')

const router = express.Router();

router.post('/register',userController.register);

router.post('/get',userController.get);

router.post('/update',userController.update);

router.post('/delete',userController.delete);


module.exports = router;

