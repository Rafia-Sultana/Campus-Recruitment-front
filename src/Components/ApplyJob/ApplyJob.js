import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ApplyJob = () => {
    const { id } = useParams()
    /* console.log((id) */
    const [postJobs, setPostJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])

    /*     useEffect(() => {
            fetch(`http://localhost:5000/apply/${id}`)
                .then(res => res.json())
                .then(data => console.log(("singleData.....", data))
        }, []) */

    // useEffect(() => {
    //     console.log(("postjobs......", postJobs);
    // }, [postJobs])



    const handleApply = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const phn_num = e.target.phn_num.value
        // console.log((name, email, phn_num)
        const stuInfo = { name, email, phn_num }

        fetch(`http://localhost:5000/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stuInfo),
        })
            .then(res => res.json())
            .then(data => {

                toast("Applied Succesfully !")
                e.target.reset();
            })

    }

    /*     useEffect(() => {
            fetch(`http://localhost:5000/apply/${id}`)
                .then(res => res.json())
                .then(data => console.log(("id............", data))
        }, [])
     */



    // const data = postJobs.find(job => job.email === stuInfo.email)
    // console.log(("find...........", data)
    return (
        <div className='flex justify-center items-center my-36'>

            <div className="min-h-screen">
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center">Good Job!</h2>
                        <p>You are applying for the position of  <span className='font-bold'>{postJobs?.jobTitle}!!</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>

            </div>






            {  /* <div className="">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://talentumph.com/wp-content/uploads/2021/06/nastuh-abootalebi-J1rNS2qv8BQ-unsplash.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">

                            <div className="">

                                <div className="hero-content flex-col lg:flex-row-reverse">

                                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                        <div className="card-body ">

                                            <p className='text-center text-black font-bold underline decoration-black  underline-offset-4 decoration-2 text-2xl'>Apply Job</p>
                                            <form onSubmit={handleApply}>
                                                <div className="form-control">
                                                    <div className="text-black">
                                                        <label className="label">
                                                            <span className="label-text font-semibold text-base mt-4">Position Applying For</span>

                                                        </label>
                                                        <div className=" border-solid border-2 border-gray-600 rounded p-2 text-left disabled">

                                                            <ul>
                                                                <li> {postJobs?.jobTitle}</li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                    <input type="text" name='name' placeholder="Full_Name" className="input input-bordered mt-5 text-black" />
                                                    <input type="email" name='email' placeholder="Email" className="input input-bordered  text-black mt-4 mb-2" />
                                                    <input type="text" name='phn_num' placeholder="Phone_number" className="input input-bordered  text-black mt-2 mb-3" />





                                                    <button className="btn btn-warning mt-6">Apply</button>

                                                </div>
                                                <ToastContainer />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



        </div>
    );
};

export default ApplyJob;