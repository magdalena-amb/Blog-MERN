const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

const { getPosts, getSinglePost } = PostController;

// get all posts
router.route('/posts').get(getPosts);

// get single post
 router.route('/posts/:post_id').get(getSinglePost);

module.exports = router;