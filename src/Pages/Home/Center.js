import React from 'react'
import employee from '../../Images/tph-employers-hp.jpg'
import jobseeker from '../../Images/pexels-fauxels-3184419.jpg'
const Center = () =>{
    return(
        <div>
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

        </div>
    )
    
    
    }
    export default Center;