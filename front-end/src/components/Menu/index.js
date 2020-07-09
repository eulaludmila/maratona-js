import React from 'react';
import { Link } from 'react-router-dom';
import { NavMenu } from './styles.js';

const Menu = () => {
    return (
        <NavMenu>
            <ul>
                <li><Link to="/sign-in">Sing in</Link></li>
                <li><Link to="/sign-up">Sing up</Link></li>
                <li><Link to="/manage/links/create">Create Link</Link></li>
                <li><Link to="/manage/links/edit">Edit Link</Link></li>
                <li><Link to="/manage/links">Edit Link</Link></li>
            </ul>
        </NavMenu>
    )
}

export default Menu;