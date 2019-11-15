import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
//import { request } from 'http';

class Posts extends Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
      }   

  render() {
        const { posts, request } = this.props;

    return (
      <div>
        { (request.pending === false && request.success && posts.length === 0) && <Alert variant = 'info'>No posts yet.</Alert>} 
        { (request.pending || request.success === null) && < Spinner />}
        { (request.success && posts.length > 0) && <PostsList posts={ posts } />}
        { (request.pending === false && request.error !== null) && <Alert variant = 'error'>{ request.error }</Alert>} 
       
      </div>
    );
  }

};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
    loadPosts: PropTypes.func.isRequired,
  };

export default Posts;