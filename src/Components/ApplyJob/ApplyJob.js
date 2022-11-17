import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ApplyJob = () => {
    const [postJobs, setPostJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])
    return (
        <div className='border-dashed border-2  border-amber-600'>
            {
                postJobs.map(postJob =>

                    <div className="">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2021/06/nastuh-abootalebi-J1rNS2qv8BQ-unsplash.jpg")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">

                                    <div className="">
                                        <div className="hero-content flex-col lg:flex-row-reverse">

                                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                                <div className="card-body ">
                                                    <div className="form-control text-center">
                                                        <label className="label ">
                                                            <span className="label-text ">Apply Job</span>
                                                        </label>

                                                    </div>
                                                    <div className="form-control">
                                                        <h1>ppp</h1>
                                                        <input type="text" placeholder="Full_Name" className="input input-bordered" />
                                                        <input type="email" placeholder="Email" className="input input-bordered" />
                                                        <input type="text" placeholder="Phone_number" className="input input-bordered" />
                                                        <div className="">
                                                            <div className="">
                                                                <input type="file" className="input" />
                                                            </div>
                                                            <div className="">
                                                                <label className="label ">
                                                                    <span className="label-text ">Upload your CV</span>
                                                                </label></div>

                                                        </div>

                                                    </div>
                                                    <div className="form-control mt-6">
                                                        <button className="btn btn-warning">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default ApplyJob;