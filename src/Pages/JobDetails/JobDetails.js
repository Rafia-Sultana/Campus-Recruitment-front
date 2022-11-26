import React from 'react'

const JobDetails = () => {

    return (
        <div>
            <div className="">
                <div className="hero h-52 " style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2020/09/information-technology.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="  text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl text-start font-bold">hello </h1>

                        </div>
                    </div>
                </div>

                {  /*  second part */}
                <div className="min-h-screen flex justify-between mx-24 mt-24">
                    {  /*    //left side */}
                    <div className=" ">
                        <h1>Vacancy</h1>
                        <h1>JOb Responsibilities</h1>
                        <h1>Employment Status</h1>
                        <h1>Workplace</h1>
                        <h1>Educational Requirements</h1>
                        <h1>Experience Requirements</h1>
                        <h1>Additional Requirements</h1>
                        <h1>Job Location</h1>
                        <h1>Salary</h1>
                        <h1>Compensation & Other Benefits</h1>
                    </div>
                    <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className='brightness-50'>
                                <img src="https://talentumph.com/wp-content/uploads/2020/09/job-details-banner.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )


}
export default JobDetails;