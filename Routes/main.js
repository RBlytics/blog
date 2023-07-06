const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.use('/', mainController.home);
router.use('/', mainController.contact);
router.use('/', mainController.about)

module.exports=router;