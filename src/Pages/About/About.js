import React from 'react';
import Fade from 'react-reveal/Fade';
import boy from '../../Images/boy.png'
import girl from '../../Images/girl.jpg'
import './About.css'

const About = () =>{
    return(
        <div>
        <div className='bannerBoxAbout'>
        <div>
    
        </div>
       <div  className=' text-8xl'>
       <h1>
       Get To <span className='text-yellow-400 '>Know Us.</span>
        </h1>
       </div>
       <div className='flex flex-wrap  text-xl '>
        <div></div>
        <div>
            <p>TalentumPH provides talent acquisition, managed talent services, and <br></br> organizational development strategies.</p>
        </div>
        
        </div>
    </div>
    <div className='whyMeAbout'>
    <Fade left>
            <div >
                <h3 className=' text-5xl italic font-extrabold'>Our Story</h3>
                <br></br>
                <p className=''>TalentumPH was started to build a talent network comprised of multi-leveled, highly skilled industry professionals in technology, finance, life sciences, energy, and customer service. We are able to design, develop, and deliver immediately customised and hybrid talent solutions for critical technology and business initiatives for both the long and short term.

                 Through our network and database, we’ve successfully and continually forge genuine relationships with talent and gain valuable insight that allows us to understand what motivates them. This data allows us to give strategic advice to our employer partners as they go through the process of managing their human capital.</p>
            </div>
            </Fade>
            <Fade right>
            <img className='ml-20' src={boy} />        
            </Fade>
       
    </div>

    <div>
        <h2 className='bg-yellow-300 p-14 text-3xl mt-0'>
        Our talent network consists of highly skilled individuals with varying levels of experience and proficiency, allowing us to become a reliable partner to our present and future clients.
        </h2>
    </div>

    <section  >
        <div className='flex flex-wrap justify-center mt-28'>
            <h1 className='text-4xl font-semibold font-sans'>Our Core Values</h1>
            <h4 className='mt-4'>TalentumPH is dedicated to fostering creative and resourceful means of understanding market trends and promulgating effective research on the latest sourcing strategies.</h4>
        </div>
       <div>
       <img src={girl} alt=''  />
       <div>
        
       </div>
       </div>
    </section>


        </div>
    )
}

export default About;