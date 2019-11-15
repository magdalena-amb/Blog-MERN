import React, { Component } from 'react';

class PostsCounter extends Component {
  
  render() {
    let { count } = this.props;
    console.log(count);
    return (
      <div>Number of posts: { count } </div>
    );
  }

};

export default PostsCounter;
