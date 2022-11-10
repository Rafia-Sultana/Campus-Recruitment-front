import React from 'react'
import { Link } from 'react-router-dom';
const RegisteredCompany = () =>{
    return(
        <div>
 <div className="overflow-x-auto mt-10">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
   {/*      <th>Job</th>  */}
        <th>company</th> 
        <th>location</th> 
        <th>Mbl No.</th> 
        <th>Reg. Date</th> 
        
        <th>Action</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
       
    
        
        <div>

        {/* The button to open modal */}
        <label htmlFor="my-modal-6" className="btn">View Details</label>
        
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <h2 className='text-center text-3xl font-bold text-slate-500 mb-2'>Company Information</h2>
          <input type="text" placeholder="Company_Name" className="input input-bordered input-warning w-full max-w-xs mt-6" />
          <input type="text" placeholder="Company_URL" className="input input-bordered input-warning w-full max-w-xs mt-6" />
         
          <div className='flex justify-between mb-4 my-4'>
          <input type="text" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs mr-2" />
          <input type="text" placeholder="Phone_Number" className="input input-bordered input-warning w-full max-w-xs" />
         </div>
    {    /** <div  className='flex justify-between mb-4 '>
         <input type="text" placeholder="Gender" className="input input-bordered input-warning w-full max-w-xs mr-2" />
         <input type="text" placeholder="Age" className="input input-bordered input-warning w-full max-w-xs mr-2" />
         <input type="text" placeholder="DOB" className="input input-bordered input-warning w-full max-w-xs" />
         </div> */}
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
              <label htmlFor="my-modal-6" className="btn">submit</label>
            </div>
          </div>
        </div>
        </div>







    
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
        <th>4</th> 
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th> 
        <td>Yancy Tear</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
        <td>Brazil</td> 
        <td>5/22/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th> 
        <td>Irma Vasilik</td> 
        <td>Editor</td> 
        <td>Wiza, Bins and Emard</td> 
        <td>Venezuela</td> 
        <td>12/8/2020</td> 
        <td>Purple</td>
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
      <tr>
        <th>8</th> 
        <td>Sammy Seston</td> 
        <td>Accountant I</td> 
        <td>O'Hara, Welch and Keebler</td> 
        <td>Indonesia</td> 
        <td>5/23/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>9</th> 
        <td>Lesya Tinham</td> 
        <td>Safety Technician IV</td> 
        <td>Turner-Kuhlman</td> 
        <td>Philippines</td> 
        <td>2/21/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>10</th> 
        <td>Zaneta Tewkesbury</td> 
        <td>VP Marketing</td> 
        <td>Sauer LLC</td> 
        <td>Chad</td> 
        <td>6/23/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>11</th> 
        <td>Andy Tipple</td> 
        <td>Librarian</td> 
        <td>Hilpert Group</td> 
        <td>Poland</td> 
        <td>7/9/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>12</th> 
        <td>Sophi Biles</td> 
        <td>Recruiting Manager</td> 
        <td>Gutmann Inc</td> 
        <td>Indonesia</td> 
        <td>2/12/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>13</th> 
        <td>Florida Garces</td> 
        <td>Web Developer IV</td> 
        <td>Gaylord, Pacocha and Baumbach</td> 
        <td>Poland</td> 
        <td>5/31/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>14</th> 
        <td>Maribeth Popping</td> 
        <td>Analyst Programmer</td> 
        <td>Deckow-Pouros</td> 
        <td>Portugal</td> 
        <td>4/27/2021</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>15</th> 
        <td>Moritz Dryburgh</td> 
        <td>Dental Hygienist</td> 
        <td>Schiller, Cole and Hackett</td> 
        <td>Sri Lanka</td> 
        <td>8/8/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>16</th> 
        <td>Reid Semiras</td> 
        <td>Teacher</td> 
        <td>Sporer, Sipes and Rogahn</td> 
        <td>Poland</td> 
        <td>7/30/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>17</th> 
        <td>Alec Lethby</td> 
        <td>Teacher</td> 
        <td>Reichel, Glover and Hamill</td> 
        <td>China</td> 
        <td>2/28/2021</td> 
        <td>Khaki</td>
      </tr>
      <tr>
        <th>18</th> 
        <td>Aland Wilber</td> 
        <td>Quality Control Specialist</td> 
        <td>Kshlerin, Rogahn and Swaniawski</td> 
        <td>Czech Republic</td> 
        <td>9/29/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>19</th> 
        <td>Teddie Duerden</td> 
        <td>Staff Accountant III</td> 
        <td>Pouros, Ullrich and Windler</td> 
        <td>France</td> 
        <td>10/27/2020</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>20</th> 
        <td>Lorelei Blackstone</td> 
        <td>Data Coordiator</td> 
        <td>Witting, Kutch and Greenfelder</td> 
        <td>Kazakhstan</td> 
        <td>6/3/2020</td> 
        <td>Red</td>
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
export default RegisteredCompany;