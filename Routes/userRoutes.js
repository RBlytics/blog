const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/login', userControllers.getLogin);
router.get('/register', userControllers.getRegister);

module.exports = router;