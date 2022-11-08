import React from 'react';
import './About.css'
import CoreValues from './CoreValues';
import BannerBox from './BannerBox';
import CenterStory from './CenterStory';
import Process from './Process';

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
     <Process></Process>
    </div>
    )
}

export default About;