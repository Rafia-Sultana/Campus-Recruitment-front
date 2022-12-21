import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ViewVacancy = () => {
    const [allCv, setAllCv] = useState([]);

    const [appliedJob, setAppliedJob] = useState([])

    const [user] = useAuthState(auth)
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



    let filteredData = fullCv.find(data => data.email === user?.email)
    const handleApplyjob = (uid, jobId,postJob, e) => {
   

        e.preventDefault();

        filteredData = { ...filteredData, companyUid: uid, jobId,...postJob }

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
            .then()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/percv`, {
        })
            .then(res => res.json())
            .then(data => {
                setAppliedJob(data)
            })

    }, [])


    const [postJobs, setPostJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])


  
    // K7nNEab6I8VsOIA2ZwT3O5R7QWb2
    // GiNkYnYYjfRyH3SGEuZ703wdW2A3
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
                                    <button

                                       /*  disabled={(appliedJob.filter(data => data.jobId === postJob._id).length > 1) ?  "true" : ""} */
                                        /*  disabled={(appliedJob.filter(data => data.email === user?.email).length === 1) ? "true" : ""}
                                         */

                                        onClick={(e) => handleApplyjob(postJob.uid, postJob._id,postJob, e)}
                                      
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

// disabled={(appliedJob.filter(data => data.jobId === postJob._id).length > 1) ? (appliedJob.filter(data => data.uid === user?.uid).length > 1)&& "true" : ""}