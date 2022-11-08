import React from 'react';
import Fade from 'react-reveal/Fade';
import {BsFillStarFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {FaLock } from 'react-icons/fa'
import boy from '../../Images/boy.png'
import girl from '../../Images/girl.jpg'
import './About.css'
import CoreValues from './CoreValues';
import BannerBox from './BannerBox';
import CenterStory from './CenterStory';

const About = () =>{
    return(
        <div>
     <BannerBox></BannerBox>
     <CenterStory></CenterStory>

    <div>
        <h2 className='bg-yellow-300 p-14 text-3xl mt-0'>
        Our talent network consists of highly skilled individuals with varying levels of experience and proficiency, allowing us to become a reliable partner to our present and future clients.
        </h2>
    </div>

   <CoreValues></CoreValues>






        </div>
    )
}

export default About;