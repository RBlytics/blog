const express = require ('express');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers')

router.get('/allPost', blogControllers.getAllPost);
router.get('/createPost', blogControllers.getCreatePost);
router.get('/editPost', blogControllers.getEditPost);
router.get('/post', blogControllers.getPost);

module.exports = router;
