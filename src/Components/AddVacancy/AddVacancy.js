import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddVacancy = () => {


  const [jobTitle, setJobTitle] = useState("")

  const handleJobPost = (e) => {
    e.preventDefault()
    const jobResponsibilities = e.target.jobResponsibilities.value;
    const educationalRequirements = e.target.educationalRequirements.value;
    const employmentStatus = e.target.employmentStatus.value;
    const workPlace = e.target.workPlace.value;
    const experienceRequirements = e.target.experienceRequirements.value;
    const additionalRequirements = e.target.additionalRequirements.value;
    const otherBenefits = e.target.otherBenefits.value;
    const openings = e.target.openings.value
    const location = e.target.location.value
    const apply_date = e.target.apply_date.value
    const last_date = e.target.last_date.value
    const salary = e.target.salary.value
    console.log(jobResponsibilities, employmentStatus, educationalRequirements, workPlace, experienceRequirements, additionalRequirements, otherBenefits, openings, location, apply_date, last_date, salary, jobTitle)

    const user = { jobTitle, jobResponsibilities, employmentStatus, educationalRequirements, workPlace, experienceRequirements, additionalRequirements, otherBenefits, location, openings, apply_date, last_date, salary }


    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {

        toast("Succesfully added!")
        e.target.reset();
      })



  }
  const handleChange = (evt) => {
    const value = evt.target.value;
    setJobTitle(value);

  }



  return (
    <div>

      <p className='font-semibold text-3xl text-center underline underline-offset-4'> Job Information</p>
      <form onSubmit={handleJobPost}>

        <select
          defaultValue={'DEFAULT'}
          onChange={handleChange}
          className="select w-full max-w-xs mt-12 mb-4" >

          <option value="DEFAULT" disabled >Job Title</option>
          <option >Web Developer</option>
          <option >Software Engineer</option>
          <option >React Developer </option>
          <option>Javascript Developer</option>
          <option >Laravel Developer</option>
          <option >Django Developer</option>
          <option >Graphics Designer</option>
          <option >Senior Full Stack developer</option>
          <option >System Engineer</option>
          <option >Senior SQA Engineer</option>
          <option >Senior System &Cloud Engineer</option>
        </select>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            name='jobResponsibilities'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Educational Requirements</span>
          </label>
          <textarea
            name='educationalRequirements'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Employment Status</span>
          </label>
          <textarea
            name='employmentStatus'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Work Place</span>
          </label>
          <textarea
            name='workPlace'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Experience Requirements</span>
          </label>
          <textarea
            name='experienceRequirements'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Additional Requirements</span>
          </label>
          <textarea
            name='additionalRequirements'
            className="textarea textarea-bordered h-8"></textarea>
          <label className="label">
            <span className="label-text">Compansion & Other benefits</span>
          </label>
          <textarea
            name='otherBenefits'
            className="textarea textarea-bordered h-8"></textarea>

          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <textarea
            name='location'
            className="textarea textarea-bordered h-8"></textarea>

          <label className="label">
            <span className="label-text">No. of Openings</span>
          </label>
          <textarea
            name='openings'
            className="textarea textarea-bordered h-8"></textarea>
        </div>

        <div className='flex justify-start gap-32'>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Apply date</span>
            </label>
            <input
              name='apply_date'
              type="date"
              className="input input-bordered w-full max-w-xs"

            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last date</span>
            </label>
            <input
              name='last_date'
              type="date"
              className="input input-bordered w-full max-w-xs"

            />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Monthly Salary</span>
            </label>
            <textarea
              name='salary'
              placeholder='$'
              className="textarea textarea-bordered w-96 h-8"></textarea>
          </div>

        </div>






        <input className='btn btn-warning w-full max-w-xs text-white mt-5' type="submit" value="Post" />
        <ToastContainer />
      </form>
    </div>
  )
}
export default AddVacancy;