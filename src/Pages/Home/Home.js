import React from 'react';
import jobseeker from '../../Images/pexels-fauxels-3184419.jpg'
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


<div className='bg-yellow-500 '>
<div className='flex justify-center items-center'>
<img className='' src={jobseeker} alt=''/>
<p className='paragraph' >FOR JOBSEEKERS
Find your next opportunity with us.
By representing you and your interests, our Talent Acquisition consultants will ensure to properly set expectations and next steps and work to get you in front of the best companies with the best opportunities in the market today. Whether it be on-site work or something fully remote, the search for your ideal job begins when you become part of our growing network of professionals. Click here to join our network.</p>
</div>
<div>
<p><button>hello</button></p>
<img src={jobseeker} alt=''/>
</div>
</div>

        </div>
    );
}

export default Home;