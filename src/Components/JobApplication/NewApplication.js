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
    console.log(cv);
    useEffect(() => {
        fetch(`http://localhost:5000/percv`)
            .then(res => res.json())
            .then(data => setCv(data))
    }, [])
    const filteredCv = cv.filter(data => data.companyUid === user?.uid)
    console.log(filteredCv)
    const handleShortList = (f) => {
        console.log(f)

        //POST One Candidate details
        fetch(`http://localhost:5000/short-list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(f),

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)


            })
    }
    const handleRejected = (f) => {
        console.log(f)

        //POST One Candidate details handleRejected
        fetch(`http://localhost:5000/rejected`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(f),

        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)


            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Expertise</th>
                            <th>View</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            filteredCv.map((f, index) => <tr>
                                <td>{f?.name}</td>
                                <td>{f?.designation}</td>
                                <td>

                                    {f ?
                                        <> <Link to='/dashboard/viewpercv'>
                                            <button className="bg-success p-3">View CV</button>
                                        </Link>
                                        </>
                                        : <></>



                                    }

                                </td>
                                <td>
                                    {f ?
                                        <>
                                            <button onClick={() => handleShortList(f)}>
                                                <BsCheckSquareFill size={30}></BsCheckSquareFill>
                                            </button>
                                            <button onClick={() => handleRejected(f)} >

                                                <CiNoWaitingSign size={30}></CiNoWaitingSign>
                                            </button>
                                        </>
                                        : <>
                                        </>
                                    }
                                </td>
                            </tr>)
                        }







                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default NewApplication;