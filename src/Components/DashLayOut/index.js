import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init';

export function DashLayOut() {
    const [user] = useAuthState(auth);
    const [isCandidate, setIsCandidate] = useState([])

    console.log(user?.email)
    const url = `http://localhost:5000/candidates/${user?.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setIsCandidate(data[1]))
    }, [url])
    console.log(setIsCandidate)
    return (
        <div>
            <div className="drawer drawer-mobile z-10 boxShadow">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu  overflow-y-auto w-3/6 font-semibold">



                        {user?.email && isCandidate ?
                            <>
                                <div className="collapse">
                                    <input type="checkbox" />
                                    <div className="collapse-title  font-medium">
                                        Manage Resume
                                    </div>
                                    <div className="collapse-content">
                                        <Link to='/dashboard/fillEduForm' className="mb-2 ">Edit Resume/CV </Link> <br />
                                        <Link to='/dashboard/viewresume' className=" ">View Resume </Link>

                                        <p>Personalized Resume</p>
                                        <p>Email Resume</p>
                                    </div>
                                </div>

                                <Link to='/dashboard/sortlisted' className=" ">Sort Listed Application </Link>
                                <Link to='/dashboard/viewvacancy' className=" ">View Vacancy</Link>
                                <Link to='/dashboard/history' className=" ">History of applied job</Link>

                            </>


                            :
                            <>
                                <Link to='/dashboard/registeredCompany' className=" mt-10 mb-4">Total Registered Company  </Link>
                                <Link to='/dashboard/registeredCandidate' className=" mt-5 mb-4" >Total Registered Candidate  </Link>
                                <Link to='/dashboard/totalVacancy' className=" mt-5 mb-4">Total Vacancy  </Link>

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
                            </>
                        }
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default DashLayOut;