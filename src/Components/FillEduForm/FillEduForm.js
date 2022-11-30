import React from 'react';
import { Link } from 'react-router-dom';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
const FillEduForm = () => {
    return (
        <div>


            {  /*  <div className="flex w-full mt-8">
                <div className="grid h-20 flex-grow card bg-green-300 rounded-box place-items-center text-lg font-bold">Upload CV</div>
                <div className="divider divider-horizontal">OR</div>
                <div className="grid h-20 flex-grow card bg-blue-300 rounded-box place-items-center text-lg font-bold">Make Resume</div>
                <Link to='/dashboard/cvform'>Make CV</Link>
            </div>
        peer-checked:bg-secondary peer-checked:text-secondary-content
        peer-checked:bg-secondary peer-checked:text-secondary-content
        bg-primary
         bg-primary
        
        */}

            {/*upper details */}
            <div className="text-sm breadcrumbs mb-5">
                <ul>
                    <li>
                        <Link to='/dashboard/personaldetails'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Personal
                        </Link>

                    </li>
                    <li>
                        <Link to='/dashboard/academicdetails'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard/employmenthistory'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Employment
                        </Link>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Other Information
                        </a>
                    </li>
                </ul>
            </div>









        </div>
    );
};

export default FillEduForm;