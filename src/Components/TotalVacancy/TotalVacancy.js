import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


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
                <td></td>
                <td>{postJob.jobTitle}</td>
                <td>{postJob.location}</td>
                <td>
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-4" className="btn">view Details</label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                      <h3 className="text-2xl font-bold text-center mb-5 ">Vcancy Details</h3>
                      <p className='text-lg font-semibold'>
                        Job-Title: {postJob.jobTitle} <br />
                        Monthly-Salary : {postJob.salary} <br />
                        Job Description : {postJob.description} <br />
                        Job Location : {postJob.location} <br />
                        No of Opening : {postJob.openings} <br />
                        Apply-Date : {postJob.apply_date} <br />
                        Last_Date : {postJob.last_date}

                      </p>
                    </label>
                  </label>

                </td>
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