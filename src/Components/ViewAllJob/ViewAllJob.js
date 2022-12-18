import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi'
import { FaMoneyBillWaveAlt } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import './ViewAllJob.css'
const ViewAllJob = () => {
    const [postJobs, setPostJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [filterJobs, setFilterJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const searchText = e.target.search.value;
        setSearch(searchText)
    }

    useEffect(() => {
        setFilterJobs(postJobs)
    }, [postJobs])

    useEffect(() => {
        const searchMatch = postJobs.filter(postJob => postJob.jobTitle.toLowerCase().includes(search.toLowerCase()));
        // console.log(searchMatch);
        setFilterJobs(searchMatch);
        // console.log(filterJobs);
    }, [search, postJobs])
    return (
        <div>
            {/* //upper function */}
            <div className="">
                <div className="hero min-h-screen " style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2020/09/jobs-list-banner.jpg")` }} >
                    <div className="hero-overlay bg-opacity-70  "></div>
                    <div className=" text-neutral-content">
                        <div className="text-center">
                            <h1 className=" text-8xl font-bold">Find your <span className='text-amber-400'>dream job</span></h1>
                            <p className="my-5 text-2xl ">Our Team moves faster, keeping you current on what's hot</p>



                            {/* searching part */}

                            <div className="flex justify-center p-4 gap-12 bg">

                                <form className='flex gap-4' action="" onSubmit={handleSearchSubmit}>
                                    <div className="flex">

                                        <input
                                            type="text"
                                            /*  onChange={handleSearch} */
                                            name='search'

                                            placeholder="search job here"
                                            className="input input-bordered input-md w-full max-w-xs text-black px-28" />
                                    </div>
                                    <div className=" flex justify-center bg-amber-500 rounded gap-2  ">
                                        <BsSearch className='mt-4 ml-4'></BsSearch>
                                        <button
                                            type='submit'

                                            className="pr-8 shadow-xl">Search</button>

                                    </div>
                                </form>

                            </div>




                        </div>
                    </div>
                </div>

            </div>



            {
                filterJobs.map((job, index) =>
                    <div key={index} className="flex justify-center m-16">

                        <div className="card w-full bg-base-100 shadow-xl m-10 ">
                            <div className="card-body">

                                {/* //viewing all jobs here */}
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className='font-bold text-2xl mb-2'>{job.jobTitle}</h1>
                                        <h1 className='flex justify-start gap-3 text-lg '> <HiLocationMarker className='mt-1' size={20} ></HiLocationMarker> {job.location}</h1>
                                    </div>
                                    <div className="">
                                        <h1 className='flex justify-start gap-3 text-lg mb-2'> <FaMoneyBillWaveAlt className='mt-1' size={20} />${job.salary}</h1>
                                        <h1 className='flex justify-start gap-3 text-lg '><RiUserSettingsFill className='mt-1' size={20} />full time</h1>
                                    </div>
                                    <div className="flex gap-8">
                                        <Link to={`/viewdetails/${job._id}`}>
                                            <div>
                                                <button className='btn btn-warning rounded-full px-8'>Full details</button>
                                            </div>
                                        </Link>

                                        {/*     <div className="">
                                            <button>
                                                <Link to={`/apply/${job._id}`}
                                                    className='btn btn-warning rounded-full px-12 ease-in duration-300 ... button'

                                                >Apply </Link>
                                            </button>

                                        </div> */}

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                )
            }




        </div >
    );
};

export default ViewAllJob;



