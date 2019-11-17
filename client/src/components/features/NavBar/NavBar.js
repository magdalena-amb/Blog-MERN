import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';
import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                < Logo />
                <div className="navbar-right">
                    <Link to='/' className='nav-link'> Home </Link>
                    <Link to='/posts' className='nav-link'> Posts </Link>
                    <Link to='/contact' className='nav-link'> Contact </Link>
                    <Link to='/posts/new' className='nav-link'> Add Post </Link>
                </div>
                
            </div>
        );
    }
}

export default NavBar;
