import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css'


const Header = () => {

    return (
        <div className='header-container'>
            <div className='logoBox'>
                <h2>track`</h2>
            </div>
            <div>
                <NavLink to='/' >HOME</NavLink>
                <NavLink to='/dashboard' >DASHBOARD</NavLink>
                <NavLink to='/about' >ABOUT </NavLink>
                <NavLink to='/login' >LOG IN</NavLink>
               
                
            </div>
        </div>
    );
}

export default Header;