import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/'> Home </Link>
                <Link to='/posts'> Posts </Link>
                <Link to='/contact'> Contact </Link>
                <Link to='/posts/new'> Add Post </Link>
            </div>
        );
    }
}

export default NavBar;
