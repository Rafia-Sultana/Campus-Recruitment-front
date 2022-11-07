import React from 'react';
import jobseeker from '../../Images/pexels-fauxels-3184419.jpg'
import featuredGirl from '../../Images/featuredGirl.jpg'
import employee from '../../Images/tph-employers-hp.jpg'
import {HiLocationMarker} from 'react-icons/hi'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
import {RiUserSettingsFill} from 'react-icons/ri'
import './Home.css'
import { Link } from 'react-router-dom';


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


<div className='bg-yellow-300 '>
<div className='flex justify-around h-screen'>
<img className='w-1/2' src={jobseeker} alt=''/>
<div className='w-1/2 p-36'>
<p>
<h1 className='text-3xl font-bold'>FOR JOBSEEKERS</h1>
<h1 className='text-2xl font-normal'>Find your next opportunity with us.</h1>
By representing you and your interests, our Talent Acquisition consultants will ensure to properly set expectations and next steps and work to get you in front of the best companies with the best opportunities in the market today. Whether it be on-site work or something fully remote, the search for your ideal job begins when you become part of our growing network of professionals. Click here to join our network.<br></br>
</p>
<br></br>
<button className="btn btn-outline btn-ghost  btn btn-wide">Join Our Network</button>

</div>
</div>



<div className='flex justify-around h-screen'>
<div className='w-1/2 p-36'>
<p>
<h1 className='text-3xl font-bold'>FOR JOBSEEKERS</h1>
<h1 className='text-2xl font-normal'>Find your next opportunity with us.</h1>
By representing you and your interests, our Talent Acquisition consultants will ensure to properly set expectations and next steps and work to get you in front of the best companies with the best opportunities in the market today. Whether it be on-site work or something fully remote, the search for your ideal job begins when you become part of our growing network of professionals. Click here to join our network.<br></br>
</p>
<br></br>
<button className="btn btn-outline btn-ghost  btn btn-wide">Join Our Network</button>
</div>
<img className='w-1/2' src={employee} alt=''/>
</div>
</div>




{/* featured jobs  */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={featuredGirl} alt="" /></figure>
  <div className="card-body justify-center ">
    <h1 className="card-title">Marketing Consultant – Digital Marketing</h1>
<div className='flex justify-around items-center '>
<HiLocationMarker ></HiLocationMarker>
    <p className='ml-2'> Ortigas, Pasig City</p>
</div>
<div className='flex justify-around items-center '>
<FaMoneyBillWaveAlt/>
<p className='ml-2'>
₱70k - ₱80k</p>
</div>
<div className='flex justify-around items-center '>
<RiUserSettingsFill/>
<p className='ml-2'>
Full Time</p>
</div>
    <div className="card-actions justify-center">
      <button className="btn btn-warning w-9/12"><Link to='/view'>View Details</Link></button>
    </div>
  </div>
</div>










        </div>
    );
}

export default Home;