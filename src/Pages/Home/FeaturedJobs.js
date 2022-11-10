import React from 'react'
import { Link} from 'react-router-dom'
import { Fade } from 'react-reveal'
import featuredGirl from '../../Images/featuredGirl.jpg'
import {HiLocationMarker} from 'react-icons/hi'
import {FaMoneyBillWaveAlt} from 'react-icons/fa'
import {RiUserSettingsFill} from 'react-icons/ri'
const FeaturedJobs = ()=>{
    return (
        <div>
         <div className='text-center pt-24 pb-14'>
          <h1 className='text-5xl font-bold'>Featured Jobs</h1>
          <br></br>
          <p className='text-xl mx-60'>Here are some opportunities with the best companies in the market today. Join our network, and we’ll find the best fit for you!</p>
         </div> 
          
          
          
          
          
          <Fade bottom>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mx-20 mb-14 ">
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
          <button className="btn btn-warning w-9/12"><Link to='/viewdetails'>View Details</Link></button>
        </div>
  </div>
</div>
</Fade>


        </div>
    )
}
export default FeaturedJobs;