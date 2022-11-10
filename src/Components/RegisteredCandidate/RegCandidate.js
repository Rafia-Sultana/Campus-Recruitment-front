import React from 'react'
import { Link, Outlet} from 'react-router-dom'
const RegisteredCandidate = () =>{

const handleStudentInfo = (e) =>{
  const email=e.target.email.value;
  const name=e.target.fname.value;
  console.log(email,name);
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
        



<div >
{/* The button to open modal */}
<label htmlFor="my-modal-6" className="btn">View Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h2 className='text-center text-3xl font-bold text-slate-500 mb-2'>Student Information</h2>
  <input type="text" name='fname' placeholder="Full_Name" className="input input-bordered input-warning w-full max-w-xs mt-6" />
 
  <div className='flex justify-between mb-4 my-4'>
  <input type="text" name='email'  placeholder="Email" className="input input-bordered input-warning w-full max-w-xs mr-2" />
  <input type="text" placeholder="Phone_Number" className="input input-bordered input-warning w-full max-w-xs" />
 </div>
 <div  className='flex justify-between mb-4 '>
 <input type="text" placeholder="Gender" className="input input-bordered input-warning w-full max-w-xs mr-2" />
 <input type="text" placeholder="Age" className="input input-bordered input-warning w-full max-w-xs mr-2" />
 <input type="text" placeholder="DOB" className="input input-bordered input-warning w-full max-w-xs" />
 </div>
 <select className="select select-warning w-full max-w-xs">
 <option disabled selected>City</option>
 <option>Cheese</option>
 <option>Veggie</option>
 <option>Pepperoni</option>
 <option>Margherita</option>
 <option>Hawaiian</option>
</select>

<select className="select select-warning select-sm w-full max-w-xs mt-4">
  <option disabled selected>Reg. Date</option>
  <option>10/11/22</option>
  <option>11/11/22</option>
  <option>12/11/22</option>
</select>

    
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn" onSubmit={handleStudentInfo}>submit</label>
    </div>
  </div>
</div>
</div>





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