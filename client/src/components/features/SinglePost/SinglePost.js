import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';
import './SinglePost.scss';

import { connect } from 'react-redux';
import { getSinglePost, getRequest, getPostRequest } from '../../../redux/postsRedux';


class SinglePost extends Component {
    
    componentDidMount() {
        const { getPost, post_id } = this.props;
        getPost(post_id);
      }   

  render() {
        const { singlePost, request } = this.props;
        
    return (
      <div className="single-post"> 
        { (request.pending || request.success === null) && < Spinner />}
        { request.success  && (
            <div>
                <PageTitle>{ singlePost.title }</PageTitle>
                <HtmlBox>{ singlePost.content }</HtmlBox>
            </div> 
        )}
        { (request.pending === false && request.error !== null) && <Alert variant = 'error'>{ request.error }</Alert>} 
       
      </div>
    );
  }

};

SinglePost.propTypes = {
    getPost: PropTypes.func.isRequired,
    singlePost: PropTypes.object,
  };
 

//export default SinglePost;

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch ) => ({
  getPost: (post_id ) => dispatch(getPostRequest(post_id)),
});

export default connect(mapStateToProps, mapDispatchToProps )(SinglePost);