import { connect } from 'react-redux';
import { getPosts, loadPostsByPageRequest, getRequest, getPages } from '../../../redux/postsRedux';
import Posts from  './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    pages: getPages(state),
    initialPage: state.posts.presentPage

});

const mapDispatchToProps = dispatch => ({
    loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps )(Posts);