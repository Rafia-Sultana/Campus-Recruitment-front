import React from 'react'
import { Link, Outlet} from 'react-router-dom'
const RegisteredCandidate = () =>{

const handleStudentInfo = (e) =>{
  e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const gender = e.target.gender .value
    const city = e.target.city.value
    const dob = e.target.dob.value
    const age = e.target.age.value
    const reg_date = e.target.reg_date.value
   
    const phone_number = e.target.phone_number.value
    console.log(name,email,phone_number,gender ,city,dob,reg_date,age)
}
 return(
        <div>
     
       
 <div className="overflow-x-auto overflow-y-auto mt-10">

  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Full_Name</th> 
        <th>Location</th> 
        <th>Mbl No.</th> 
        <th>Reg. Date</th> 
       
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Gazipur</td> 
        <td>019********</td> 
     
        <td>12/16/2020</td> 
        

  {/**modal starts here */}
{/* The button to open modal */}
<label htmlFor="my-modal-6" className="btn">VIEW DETAILS</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
 
  <div className="modal-action flex justify-center mt-0 ">
  <label className="label">
          <span className="label-text font-bold text-3xl ">Student Information</span>
      </label>
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute bg-red-600 right-2 top-2">X</label>
</div>

  <form onSubmit={handleStudentInfo}>

  <div className="form-control w-full max-w-xs mt-5">
   {  /*  <label className="label">
          <span className="label-text">Name</span>
      </label> */}
      <input
          name='name' 
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
       />
      
  </div>
 <div className='flex justify-between mt-5'>
 <div className="form-control w-1/2 max-w-xs mr-2 ">
 { /*    <label className="label">
         <span className="label-text">Email</span>
     </label> */}
     <input
         name='email'
         type="email"
         placeholder="Email"
         className="input input-bordered w-full max-w-xs"
       
     />
    
 </div>
 <div className="form-control w-1/2 max-w-xs">
 {  /*   <label className="label">
         <span className="label-text">Phone_number</span>
     </label> */}
     <input
     name='phone_number'
         type="tel"
         placeholder="Phone_number"
         className="input input-bordered w-full max-w-xs"
      
     />
     <br></br>
    
 </div>
</div>
 <div className='flex justify-between'>
 <div className="form-control w-1/2 max-w-xs mr-2">
 { /*    <label className="label">
         <span className="label-text">Email</span>
     </label> */}
     <input
         name='gender'
         type="text"
         placeholder="Gender"
         className="input input-bordered w-full max-w-xs"
       
     />
    
 </div>
 <div className="form-control w-1/2 max-w-xs mr-2">
 {  /*   <label className="label">
         <span className="label-text">Phone_number</span>
     </label> */}
     <input
     name='age'
         type="number"
         placeholder="Age"
         className="input input-bordered w-full max-w-xs"
      
     />
     <br></br>
    
 </div>
 <div className="form-control w-1/2 max-w-xs">
 {  /*   <label className="label">
         <span className="label-text">Phone_number</span>
     </label> */}
     <input
     name='dob'
         type="text"
         placeholder="DOB"
         className="input input-bordered w-full max-w-xs"
      
     />
     <br></br>
    
 </div>
</div>


<div className="form-control w-full max-w-xs">
{  /*   <label className="label">
        <span className="label-text">Phone_number</span>
    </label> */}
    <input
    name='city'
        type="text"
        placeholder="City"
        className="input input-bordered w-full max-w-xs"
     
    />
    <br></br>
   
</div>
<div className="form-control w-full max-w-xs">
{  /*   <label className="label">
        <span className="label-text">Phone_number</span>
    </label> */}
    <input
    name='reg_date'
        type="date"
        placeholder="Reg_date"
        className="input input-bordered w-full max-w-xs"
     
    />
    <br></br>
   
</div>

 
  <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="Update" />
</form>



  
  </div>
</div>



        {/**modal ends here */}








{/*table section */}
      </tr>
      <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
        <td>Red</td>
      </tr>
     
     
      <tr>
        <th>7</th> 
        <td>Meghann Durtnal</td> 
        <td>Staff Accountant IV</td> 
        <td>Schuster-Schimmel</td> 
        <td>Philippines</td> 
        <td>2/17/2021</td> 
        <td>Yellow</td>
      </tr>
   
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    )
}
export default RegisteredCandidate;