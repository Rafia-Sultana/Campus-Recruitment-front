import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import featuredGirl from '../../Images/featuredGirl.jpg'
import { HiLocationMarker } from 'react-icons/hi'
import { FaMoneyBillWaveAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
const FeaturedJobs = () => {
  const [postJobs, setPostJobs] = useState([]);
  const firstThree = postJobs.slice(0, 3);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setPostJobs(data))
  }, [])
  return (
    <div>
      <div className='text-center pt-24 pb-14'>
        <h1 className='text-5xl font-bold'>Featured Jobs</h1>
        <br></br>
        <p className='text-xl mx-60'>Here are some opportunities with the best companies in the market today. Join our network, and we’ll find the best fit for you!</p>
      </div>
      <Fade bottom>
        <div className="flex">
          {
            firstThree.map((postJob) => <div key={postJob._id} className="card card-compact w-96 bg-base-100 shadow-xl mx-20 mb-14 ">
              <figure><img src={featuredGirl} alt="" /></figure>
              <div className="card-body justify-center ">
                <h1 className="card-title">
                  {postJob.jobTitle}
                </h1>
                <div className='flex justify-around items-center '>
                  <HiLocationMarker ></HiLocationMarker>
                  <p className='ml-2'> {postJob.location}</p>
                </div>
                <div className='flex justify-around items-center '>
                  <FaMoneyBillWaveAlt />
                  <p className='ml-2'>
                    {postJob.salary}</p>
                </div>
                <div className='flex justify-around items-center '>
                  <RiUserSettingsFill />
                  <p className='ml-2'>
                    Full Time</p>
                </div>
                <Link to={`/viewdetails/${postJob._id}`} >
                  <div className="card-actions justify-center">

                    <button className="btn btn-warning w-9/12">View Details</button>



                  </div>
                </Link>
              </div>
            </div>)
          }

        </div>

      </Fade>
      <Link to='/viewalljobs'>
        <div className="flex justify-center ">
          <button className="btn btn-active  rounded-full px-12 mb-8">View All Jobs</button>
        </div>
      </Link>
    </div>
  )
}
export default FeaturedJobs;