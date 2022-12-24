import React from 'react';

const ModalTotalVacancy = ({postJob}) => {
    
    return (
        <div className='mt-2'>
       

{/* Put this part before </body> tag */}
<input type="checkbox" id={`my-modal-${postJob._id}`} className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg font-bold">{postJob.jobName}</h3>
    <h3 className=""><span className="font-medium mr-2">JobTitle:</span>   {postJob.jobTitle}</h3>
    <h3 className=""><span className="font-medium mr-2">JobResponsibilities:</span>  
    <br /> {postJob.jobResponsibilities}</h3>
    <h3 className=""><span className="font-medium mr-2">EmploymentStatus:</span> <br />  {postJob.employmentStatus}</h3>
    <h3 className=""><span className="font-medium mr-2">EducationalRequirements:</span> <br />  {postJob.educationalRequirements}</h3>
    <h3 className=""><span className="font-medium mr-2">ExperienceRequirements:</span>  <br /> {postJob.experienceRequirements}</h3>
    <h3 className=""><span  className="font-medium mr-2">AdditionalRequirements:</span> <br />  {postJob.additionalRequirements}</h3>
    <h3 className=""><span className="font-medium mr-2"> OtherBenefits:</span>  <br /> {postJob.otherBenefits}</h3>
    <h3 className=""><span className="font-medium mr-2">Location:</span>  <br /> {postJob.location}</h3>
    <h3 className=""><span className="font-medium mr-2">Apply_date:</span> <br />  {postJob.apply_date}</h3>
    <h3 className=""><span className="font-medium mr-2">Last_date:</span>   {postJob.last_date}</h3>
    <h3 className=""><span className="font-medium mr-2">Salary:</span>   {postJob.salary}</h3>
    <p className="py-4"></p>
  </label>
</label>
        </div>
    );
};

export default ModalTotalVacancy;