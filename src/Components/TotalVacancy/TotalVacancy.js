import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import ModalTotalVacancy from './ModalTotalVacancy';

const TotalVacancy = () => {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              postJobs.map((postJob, index) => <tr key={index}>
              
                <td>{postJob.jobName}</td>
                <td>{postJob.jobTitle}</td>
                <td>{postJob.location}</td>
               
                
   <label htmlFor={`my-modal-${postJob._id}`} className="btn">Details</label>

<ModalTotalVacancy postJob={postJob} ></ModalTotalVacancy>

                
              </tr>

              )
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}
export default TotalVacancy;