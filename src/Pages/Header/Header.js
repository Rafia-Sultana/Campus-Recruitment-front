import React from 'react';
import logo from '../../Images/logo2.PNG'
import { NavLink } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useEffect,useState } from 'react';

const Header = () => {
    const [user] = useAuthState(auth);
   
    return (
        <div className='header-container'>
            <div className='logoBox'>
                <img src={logo} alt='notfind' />
            </div>
            <div>
                <NavLink to='/' >HOME</NavLink>
                {
                    user?
                    <>
                    <NavLink to='/dashboard' >DASHBOARD</NavLink>
                    </>:
                    <></>
                }
                {/* <NavLink to='/dashboard' >DASHBOARD</NavLink> */}
              
                <NavLink to='/about' >ABOUT </NavLink>
                <NavLink to='/viewalljobs' >JOBS</NavLink> 
                {user ?
                    <>

                        <NavLink to=''>{user?.displayName ? user?.displayName : ''} </NavLink>
                        <NavLink onClick={() => signOut(auth)} to='/login'>SIGN OUT</NavLink>
                    </>
                    :
                    <>
                        <NavLink to='/login' >CANDIDATE</NavLink>
                        <NavLink to='/employelogin' >EMPLOYEE</NavLink>
                     {  /*  <NavLink to='/adminlogin' >ADMIN</NavLink> */}
                    </>
                }

            </div>
        </div>
    );
}

export default Header;