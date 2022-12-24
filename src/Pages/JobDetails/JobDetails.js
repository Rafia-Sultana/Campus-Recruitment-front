import React from 'react'
import './JobDetails.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const JobDetails = () => {
    const { id } = useParams()
    const [postJobs, setPostJobs] = useState([])
    const sentences = postJobs?.jobResponsibilities?.split('. ')
    const benefitsSentences = postJobs?.otherBenefits?.split('. ')

    useEffect(() => {
        fetch(`http://localhost:5000/singleJob/${id}`)
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])
    return (
        <div>
            <div className="">
                <div className="hero h-52 " style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2020/09/information-technology.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="  text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl text-start font-bold">{postJobs?.jobTitle}</h1>

                        </div>
                    </div>
                </div>

                {  /*  second part */}
                <div className="flex mt-24 mx-24">
                    <div className="min-h-screen w-4/6  ">
                        {  /*    //left side */}
                        <div className="pr-12 ">
                            <div>
                                <h1 className="text-lg font-semibold">Vacancy</h1>
                                <h1 className='px-8 pt-2 pb-8'>{postJobs.openings}</h1>
                            </div>
                            <div className='pb-8'>
                                <h1 className="text-lg font-semibold pb-2">Job Responsibilities</h1>
                                {
                                    sentences?.map((sentence, index) => <li key={index}
                                        className='px-8 pt-2 '
                                    >{sentence}</li>)
                                }
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Employment Status</h1>
                                <h1 className='px-8  pt-2 pb-8'>{postJobs.employmentStatus}</h1>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Workplace</h1>
                                <li className='px-8  pt-2 pb-8'>{postJobs.workPlace}</li>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Educational Requirements</h1>
                                <li className='px-8  pt-2 pb-8'>{postJobs.educationalRequirements}</li>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold">Experience Requirements</h1>
                                <li className='px-8 pt-2 pb-8'>{postJobs.experienceRequirements}</li>
                            </div>
                            <div >
                                <h1 className="text-lg font-semibold">Additional Requirements</h1>
                                <li className='px-8 pt-2 pb-8'>{postJobs.additionalRequirements}</li>
                            </div>
                            <div >
                                <h1 className="text-lg font-semibold">Job Location</h1>
                                <li className='px-8 pt-2 pb-8'>{postJobs.location}</li>
                            </div>
                            <div >
                                <h1 className="text-lg font-semibold">Salary</h1>
                                <li className='px-8 pt-2 pb-8'>{postJobs.salary}</li>
                            </div>
                            <div className='pb-8'>
                                <h1 className="text-lg font-semibold">Compensation & Other Benefits</h1>


                                {
                                    benefitsSentences?.map((benefitsSentence, index) => <li key={index}
                                        className='px-8 pt-2 '
                                    >{benefitsSentence}</li>)
                                }


                            </div>

                        </div>




                    </div>


                    {/* right side  */}
                    <div className=' w-2/6 h-4/6 shadow-xl'>
                        <div className="hero " style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2020/09/job-details-banner.jpg")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md ">
                                    <div className="p-16 text-2xl font-bold">
                                        <h1>SALARY</h1>
                                        <h1 className="">${postJobs.salary}</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className=" px-8 pt-8 pb-16">
                            <div className="flex justify-start gap-2">
                                <p className="text-lg font-semibold ">Published on:</p>
                                <p className='mt-1'> {postJobs.apply_date} </p>
                            </div>


                            <div className="flex justify-start gap-2">
                                <p className="text-lg font-semibold">Job Location:   </p>
                                <p className='mt-1'>{postJobs.location} </p></div>

                            <div className="flex gap-2">
                                <p className="text-lg font-semibold"> Deadline:  </p>
                                <p className='mt-1' >{postJobs.last_date}</p>
                            </div>

                         { /*   <button className='w-full  mt-4'>
                                <Link to={`/apply/${postJobs._id}`}
                                    className='w-full btn btn-warning  ease-in duration-300 ... button'

                                >Apply Now </Link>
                            </button> */}
                        </div>


                    </div>

                </div>











            </div >
        </div >
    )


}
export default JobDetails;