const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts
exports.getPosts = async (req, res) => {
    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

// get single post
exports.getSinglePost = async (req, res ) => {
    try {
        let post = await Post.findOne({id:req.params.post_id});
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
}

// add post
exports.addPost = async (req, res) => {
  try {
    let newPost = new Post(req.body)
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }
}

// edit post
exports.editPost = async (req, res) => {

  try {
      let editedPost = await Post.updateOne(
        {id:req.params.post_id}, 
        {content: req.body.content}
        );
    
      res.status(200).json(editedPost);
    
  } catch(err) {
    res.status(500).json(err);
  }
}



