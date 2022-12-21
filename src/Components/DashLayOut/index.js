import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init';

export function DashLayOut() {
    const [user] = useAuthState(auth);
    const [candidate, setCandidate] = useState([])

    const url = `http://localhost:5000/candidates/${user?.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setCandidate(data[0]))
    }, [url])
    return (
        <div>
            <div className="drawer drawer-mobile z-10 boxShadow">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-12">

                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-amber-400 text-base-100">



                        {user?.email && candidate?.role === "candidate" &&
                            <>
                                <div className="collapse">
                                    <input type="checkbox" />
                                    <div className="collapse-title  font-medium">
                                        Manage Resume
                                    </div>
                                    <div className="collapse-content">

                                        <Link to='/dashboard/fillEduForm' className="mb-2 ">Edit CV </Link> <br />
                                        <Link to='/dashboard/viewresume' className=" ">View CV </Link>

                                        { /* <p>Personalized Resume</p>
                                        <p>Email Resume</p> */}
                                    </div>
                                </div>

                                <Link to='/dashboard/candidatesorted' className=" ">Sort Listed Application </Link>
                                <Link to='/dashboard/viewvacancy' className=" ">View Vacancy</Link>
                                <Link to='/dashboard/history' className=" ">History of applied job</Link>

                            </>
                        }
                        {user?.email && candidate?.role === "admin" &&
                            <>
                                <Link to='/dashboard/registeredCompany' className=" mt-10 mb-4">Total Registered Company  </Link>
                                <Link to='/dashboard/registeredCandidate' className=" mt-5 mb-4" >Total Registered Candidate  </Link>
                                <Link to='/dashboard/totalVacancy' className=" mt-5 mb-4">Total Vacancy  </Link>
                            </>
                        }
                        {user?.email && candidate?.role === "employee" &&
                            <>

                                <div className="">
                                    <Link to='/dashboard/addVacancy' className="mx-4 my-3 font-medium">Post Vacancy </Link>
                                </div>
                                <div className="collapse">
                                    <input type="checkbox" />
                                    <div className="collapse-title font-medium ">
                                        Job Application
                                    </div>
                                    <div className="collapse-content text-sm">
                                        <Link to='/dashboard/new' className="flex justify-start">New Application </Link>
                                        <Link to='/dashboard/sortlisted' className=" ">Sort Listed Application </Link>
                                        <Link to='/dashboard/rejected' className=" ">Rejected Application </Link><br />
                                        <Link to='/dashboard/all' className=" ">All Application </Link>

                                    </div>
                                    <div className="mx-4 my-2">
                                        <Link to='/dashboard/companyprofile' className="font-medium ">Company Profile </Link>

                                    </div>
                                    <div>
                                        <Link to='/dashboard/viewpostjob' className="mx-4 mb-10 font-medium">View Post Jobs </Link>
                                    </div>
                                    <div>
                                        <Link to='/dashboard/companyreport' className="mx-4 my-5 font-medium ">Report </Link>
                                    </div>
                                </div>
                            </>
                        }
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default DashLayOut;