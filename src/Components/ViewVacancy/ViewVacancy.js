import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewVacancy = () => {

    const [postJobs, setPostJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setPostJobs(data))
    }, [])
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
                                <td></td>
                                <td>{postJob.jobTitle}</td>
                                <td>{postJob.location}</td>
                                <td>{postJob.apply_date} </td>
                                <td>{postJob.last_date}</td>
                                <td><Link to={`/apply/${postJob._id}`} className='bg-green-500 rounded-lg  mt-4 px-3 pb-1'>Apply For Job</Link></td>
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