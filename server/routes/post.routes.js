const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

const { getPosts, getSinglePost, addPost, editPost } = PostController;

// get all posts
router.route('/posts').get(getPosts);

// get single post
 router.route('/posts/:post_id').get(getSinglePost);

// add posts
router.route('/posts').post(addPost);

// get post to edit & edit post
router.route('/posts/edit/:post_id').put(editPost);

module.exports = router;