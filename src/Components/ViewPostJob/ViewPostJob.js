import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Modal from '../RegisteredCompany/Modal';
const ViewPostJob = () => {
    const [user] = useAuthState(auth);
    const [postJobs, setPostJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
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
                            <th> </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            postJobs.map((postJob, index) => <tr key={index}>
                                <td>{postJob.jobName}</td>
                                <td>{postJob.jobTitle}</td>
                                <td>{postJob.location}</td>
                                <td>{postJob.apply_date} </td>
                                <td>{postJob.last_date}</td>
                                <td>

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

export default ViewPostJob;