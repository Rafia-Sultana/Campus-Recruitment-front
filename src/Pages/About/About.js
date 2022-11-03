import React from 'react';
import boy from '../../Images/boy.png'
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
        
            <div >
                <h3 className='text-4xl italic font-semibold'>Our Story</h3>
                <br></br>
                <p>TalentumPH was started to build a talent network comprised of multi-leveled, highly skilled industry professionals in technology, finance, life sciences, energy, and customer service. We are able to design, develop, and deliver immediately customised and hybrid talent solutions for critical technology and business initiatives for both the long and short term.

                 Through our network and database, we’ve successfully and continually forge genuine relationships with talent and gain valuable insight that allows us to understand what motivates them. This data allows us to give strategic advice to our employer partners as they go through the process of managing their human capital.</p>
            </div>
            <img className='ml-20' src={boy} />        
       
       
    </div>
        </div>
    )
}

export default About;