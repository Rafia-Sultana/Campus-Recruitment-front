import React from 'react';
import { Link} from 'react-router-dom'


const Dashboard = () => {

 

  return (
    <div className="drawer drawer-mobile z-10 boxShadow">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
         <h2 className='text-lg font-bold text-purple-500 mx-auto text-center'>
          
         <div className="overflow-x-auto w-full">

</div>


          
          </h2> 

      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-5 overflow-y-auto w-60 bg-primary text-base-100 font-semibold">
  
  <Link to='/dashboard/table' className=" mt-10 mb-4">Total Registered Company  </Link>

  <li className=" mt-5 mb-4">Total Candidate Registered</li>
  <li className="mt-5 mb-4">Total Vacancy</li>
  <li className="mt-5 mb-4" >Reports</li>
  <li className=" mt-5 mb-4" >Change Password</li> 
  <li className=" mt-5 mb-4" >LogOut</li>
          
        </ul>

      </div>


    </div>
  );
};

export default Dashboard;