import React from 'react';
import './Home.css'


const Home = () => {


    return (
        <div>
            <div className='bannerBox'>
                <div>

                </div>
               <div>
               <h1>
                We’re here to help you.
                </h1>
                <h2>
                 We connect talented people with great companies.<br></br>Join our network today.
                </h2>
               <button className='aboutBtn' >Join Our Network</button>
               </div>
            </div>
            <div className='whyMe'>
                <div className='whyMeText'>
                    <h1>Why Me ?</h1>
                    <p>`Well! I have more than 6 years tour guiding experience. I know all tourist places and thousand years of history of Bangladesh. I'll explain your all during tour time. I'll care you to being safe`</p>
                </div>
                <div>
                   {/*  <img src={MapPhoto}  /> */}
                </div>
            </div>
            <div className='spotsContainer'>
                <marquee behavior="" direction="">
                    <h1>Favorite Places to Visit
                    Popular Destinations</h1>
                </marquee>

                <h3>SERVICES</h3>
    
             
            </div>
        </div>
    );
}

export default Home;