import React from 'react';
import { useEffect,useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const CandidateSorted = () => {
    const [user]=useAuthState(auth)

    const [sortedCandidate, setSortedCandidate] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/shortlist-candidates/${user?.email}`, {
        })
            .then(res => res.json())
            .then(data => {
                setSortedCandidate(data)
            })
  
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
                    <th>Job Posting Date</th>
                   
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
            {
                sortedCandidate.map((h,index)=>
                    <tr key={index}>
                    <td>{h.jobName}</td>
                    <td>{h.jobTitle}</td>
                    <td>{h.location}</td>
                    <td>{h.apply_date}</td>
                    <td>${h.salary}</td>

                    </tr>
                )
            }
            </tbody>

        </table>
    </div>
        </div>
    );
};

export default CandidateSorted;