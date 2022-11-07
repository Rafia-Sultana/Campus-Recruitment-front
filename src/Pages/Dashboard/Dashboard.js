import React from 'react';
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {



  return (
    <>
    <div className="drawer drawer-mobile z-10 boxShadow">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
        <h2 className='text-lg font-bold text-purple-500 mx-auto text-center'> Welcome To Your Dashboard </h2>

        <Outlet />

      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-5 overflow-y-auto w-60 bg-primary text-base-100 font-semibold">

    {/*       <Link to='/dashboard/table' className=" mt-10 mb-4">Total Registered Company  </Link> */}
          <Link to='/dashboard/registeredCompany' className=" mt-10 mb-4">Total Registered Company  </Link>
          <Link to='/dashboard/registeredCandidate' className=" mt-5 mb-4">Total Registered Candidate  </Link>
          <Link to='/dashboard/totalVacancy' className=" mt-5 mb-4">Total Vacancy  </Link>
          

         {/*  <li className=" mt-5 mb-4">Total Candidate Registered</li>
          <li className="mt-5 mb-4">Total Vacancy</li> */}
          <li className="mt-5 mb-4" >Reports</li>
          <li className=" mt-5 mb-4" >Change Password</li>
          <li className=" mt-5 mb-4" >LogOut</li>

        </ul>

      </div>


    </div>
   
    </>
  );
};

export default Dashboard;