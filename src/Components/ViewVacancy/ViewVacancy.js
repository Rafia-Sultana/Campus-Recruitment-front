import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';


const ViewVacancy = () => {
    const [allCv, setAllCv] = useState([]);

    const [appliedJob, setAppliedJob] = useState([])

    const [user] = useAuthState(auth)
    /*   console.log(user) */
    useEffect(() => {
        fetch(`http://localhost:5000/allCvs`)
            .then(res => res.json())
            .then(
                data => {
                    setAllCv(data)

                }
            )
    }, [])



    let fullCv = []

    const [a, b, c, d, e, f] = allCv


    for (let i = 0; i < a?.length; i++) {
        let singleData = {}
        singleData = { ...singleData, ...a[i] }
        singleData = { ...singleData, ...b[i] }
        singleData = { ...singleData, ...c[i] }
        singleData = { ...singleData, ...d[i] }
        singleData = { ...singleData, ...e[i] }
        singleData = { ...singleData, ...f[i] }

        fullCv.push(singleData)
    }

    // console.log(fullCv)



    let filteredData = fullCv.find(data => data.email === user?.email)
    // console.log(filteredData);
    const handleApplyjob = (uid, jobId, e) => {

        e.preventDefault()

        filteredData = { ...filteredData, companyUid: uid, jobId }
        delete filteredData._id
        //POST One Candidate details
        fetch(`http://localhost:5000/percv`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filteredData),

        })
            .then(res => res.json())
            .then(data => {


            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/percv`, {
        })
            .then(res => res.json())
            .then(data => {
                setAppliedJob(data)
            })

    }, [])


    // console.log(appliedJob);


    const [postJobs, setPostJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])

    // console.log(postJobs);
    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>


                            <th>company Name</th>
                            <th>Job title</th>
                            <th>location</th>
                            <th>Apply_Start_date</th>
                            <th>Apply_Last_date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            postJobs.map((postJob, index) => <tr key={index}>
                                <td>{postJob.name}</td>
                                <td>{postJob.jobTitle}</td>
                                <td>{postJob.location}</td>
                                <td>{postJob.apply_date} </td>
                                <td>{postJob.last_date}</td>
                                <td>

                                    {/* <Link to={`/apply/${postJob._id}`} className='bg-green-500 rounded-lg  mt-4 px-3 pb-1'>Apply For Job</Link> */}

                                    <button
                                        disabled={(appliedJob.filter(data => data.jobId === postJob._id).length === 1) ? "true" : ""}
                                        onClick={(e) => handleApplyjob(postJob.uid, postJob._id, e)}
                                        className='btn btn-success p-4'  >Apply for Job</button>

                                </td>
                            </tr>

                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ViewVacancy;