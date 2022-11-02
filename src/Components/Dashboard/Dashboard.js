import React from 'react';
import { Link} from 'react-router-dom'


const Dashboard = () => {

 

  return (
    <div className="drawer drawer-mobile z-10 boxShadow">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
         <h2 className='text-2xl font-bold text-purple-500 mx-auto text-center'>Welcome To Your Dashboard</h2> 

      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-primary text-base-100">
        <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    
          
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;