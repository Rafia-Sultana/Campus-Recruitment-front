import React from 'react'
import Fade from 'react-reveal/Fade';
import {BsFillStarFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {FaLock } from 'react-icons/fa'
import girl from '../../Images/girl.jpg'
const CoreValues = () =>{
    return(
    <div>
    <section className='flex justify-around ' >

    {/* /* girl image */ }
    <div className='w-1/2 ml-28 '>
    <img src={girl} alt=''  />
    </div>
    
    
    
    
    {/* first part */}
    <div className='w-1/2 mx-32 mt-8 text-white'>
    <Fade right>
    <div className='bg-sky-400 p-10 mb-10'>
    <div className='flex justify-start'>
    <div className=' mr-6'><BsFillStarFill size={32}></BsFillStarFill></div>
    <div><h1 className='text-2xl font-semibold mb-2 '> Purposeful Relationships</h1>
    <p>Integrity is at the heart of everything we do. It is the foundation of all our relationships–clients, talent, and team.</p></div>
    </div>
    </div>
    </Fade>
{/* Second part */}
    
<Fade right>
<div className='bg-yellow-400 p-12  mb-10 flex justify-start'>

  
  <div className=' mr-6'><FaUserFriends  size={38}></FaUserFriends></div>
  <div>
  <h1 className='text-2xl font-semibold mb-2'>Entrepreneurial Mindset</h1>
  <p>The freedom to take initiative and seek out the next opportunity empowered the members of our team to pursue innovative ideas and develop a deep sense of ownership in the role they play, which allows them to develop in their role and to help others achieve their full potential.</p></div>
</div>
</Fade>
<Fade right>
<div className='bg-pink-400 p-12  mb-10  flex justify-start'>
  
  <div className=' mr-6' ><FaLock size={38}></FaLock></div>
  <div>
  <h1 className='text-2xl font-semibold mb-2'>Honest and helpful insight</h1>
  <p>Transparent, honest, and efficient communication is at the cornerstone of all our decision making. It is the secret weapon with which we are able to analyze and take the correct steps for both our company and those we work with. It has been the key in maintaining relationships within our organization as well as with our talents and clients. We believe in the power of communication, and we encourage it with everyone and everywhere we work.</p></div>
</div>
</Fade>




 </div>


</section>

    </div>
    )
}
export default CoreValues;