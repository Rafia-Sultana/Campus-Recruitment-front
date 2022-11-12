import React from 'react';
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {



  return (
    < >
    <div className="drawer drawer-mobile z-10 boxShadow">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
        <h2 className='text-lg font-bold text-purple-500 mx-auto text-center '></h2>

  {    /**<div className="card w-80 h-32 bg-blue-100 shadow-xl">
        <div className="card-body">
        
          <p>Total Registered Company</p>
          <p></p>
        </div>
      </div> */  }


        <Outlet />

      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-5 overflow-y-auto w-60 bg-yellow-600 text-base-100 font-semibold">


          <Link to='/dashboard/registeredCompany' className=" mt-10 mb-4">Total Registered Company  </Link>
          <Link to='/dashboard/registeredCandidate' className=" mt-5 mb-4" >Total Registered Candidate  </Link>
          <Link to='/dashboard/totalVacancy' className=" mt-5 mb-4">Total Vacancy  </Link>




          

         {/*  <li className=" mt-5 mb-4">Total Candidate Registered</li>
          <li className="mt-5 mb-4">Total Vacancy</li> */}
         

     {  /*    <li className="mt-5 mb-4" >Reports</li>
          <li className=" mt-5 mb-4" >Change Password</li>
          <li className=" mt-5 mb-4" >LogOut</li> */}
          

          

          <div className="collapse">
          <input type="checkbox" /> 
          <div className="collapse-title  font-medium">
           Post Vacancy
          </div>
          <div className="collapse-content"> 
          <Link to='/dashboard/addVacancy' className=" ">Add Vacancy  </Link>
            <p>Manage Vacancy</p>
          </div>
        </div>
          <div className="collapse">
          <input type="checkbox" /> 
          <div className="collapse-title ">
           Job Application
          </div>
          <div className="collapse-content "> 
          <Link to='/dashboard/new' className="flex justify-start">New Application </Link>
          <Link to='/dashboard/sortlisted' className=" ">Sort Listed Application </Link>
          <Link to='/dashboard/rejected' className=" ">Rejected Application </Link>
          <Link to='/dashboard/all' className=" ">All Application </Link>
          
          </div>
        </div>

        </ul>

      </div>


    </div>
   
    </>
  );
};

export default Dashboard;