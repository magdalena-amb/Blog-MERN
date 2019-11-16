const Post = require('../models/post.model');

// get all posts

// exports.getPosts = function (req, res) {
//     const data = [
//         {id: 'jdhf5g1', title: 'Post One', content: 'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.'},
//         {id: 'idhdjg8', title: 'Post Two', content: 'Busey ipsum dolor sit amet. Have you urinated? Have you drained your bladder? Are you free? Because if you haven proud of these ribs.'},
//         {id: 'loysj83', title: 'Post Three', content: 'Explore the far reaches of the galaxy with this space-themed dummy text generator, with quotes from TV classics like Star Trek and real astronauts themselves.'}
//     ]
//     res.json(data);
//   };

  exports.getPosts = async (req, res) => {

    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};