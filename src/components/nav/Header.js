import React from 'react';
import {Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <Navbar className="navBar">
            <Link className="link-main" to='/home' activeStyle>
                Fullstack Challange
            </Link>
            <Link className="link" to='/home' activeStyle>
                Home
            </Link>
            <Link className="link" to='/favorites' activeStyle>
                Favorites
            </Link>
            <Link className="link" to='/allVideos' activeStyle>
                Videos
            </Link>
            <Link className="link" to='/updateVideo' activeStyle>
                Update video
            </Link>
        </Navbar>
    );
};

export default Header;
