import React from "react";
const CenterStory = () =>{
    return(
        <div>
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
        </div>
    )
}
export default CenterStory