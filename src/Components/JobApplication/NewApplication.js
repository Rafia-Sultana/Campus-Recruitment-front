import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BsCheckSquareFill } from 'react-icons/bs'
import { CiNoWaitingSign } from 'react-icons/ci'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const NewApplication = () => {

    const [user] = useAuthState(auth)

    console.log(user?.uid)
    const [cv, setCv] = useState([])
    /*  console.log(cv); */
    useEffect(() => {
        fetch(`http://localhost:5000/percv`)
            .then(res => res.json())
            .then(data => setCv(data))
    }, [])
    /*     console.log(cv[0]?.designation); */
    const filteredCv = cv.filter(data => data.companyUid === user?.uid)
    console.log(filteredCv)
    const handleShortlist = (e, uid, filteredCvId) => {
        e.preventDefault()

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Expertise</th>
                            <th>View</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td></td>
                            <td>{filteredCv[0]?.name}</td>
                            <td>{filteredCv[0]?.designation}</td>

                            <td>

                                {filteredCv[0] ?
                                    <> <Link to='/dashboard/viewpercv'>
                                        <button className="bg-success p-3">View CV</button>
                                    </Link>
                                    </>
                                    : <></>



                                }

                            </td>
                            <td>
                                {filteredCv[0] ?
                                    <>
                                        <button onClick={(e) => handleShortlist(filteredCv.uid, filteredCv._id, e)}>


                                            <BsCheckSquareFill size={30}></BsCheckSquareFill>

                                        </button>
                                        <button  >

                                            <CiNoWaitingSign size={30}></CiNoWaitingSign>
                                        </button>
                                    </>
                                    : <>
                                    </>
                                }
                            </td>
                        </tr>







                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default NewApplication;