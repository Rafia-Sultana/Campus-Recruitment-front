import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const All = () => {
    const [status, setStatus] = useState("")
    const handleChange = (evt) => {
        const value = evt.target.value;
        setStatus(value);

    }
    const [allCv, setAllCv] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allCvs`)
            .then(res => res.json())
            .then(
                data => {
                    setAllCv(data)

                }
            )
    }, [])

    let fullCv = []

    const [a, b, c, d, e, f] = allCv


    for (let i = 0; i < a?.length; i++) {
        let singleData = {}
        singleData = { ...singleData, ...a[i] }
        singleData = { ...singleData, ...b[i] }
        singleData = { ...singleData, ...c[i] }
        singleData = { ...singleData, ...d[i] }
        singleData = { ...singleData, ...e[i] }
        singleData = { ...singleData, ...f[i] }

        fullCv.push(singleData)
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
                            <th>Action</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            fullCv.map((cv, index) => <tr key={index}>

                                <td>{(index + 1)}</td>
                                <td>{cv.name}</td>
                                <td>{cv.designation}</td>
                                <td >
                                    <Link to={`/viewcv/${cv._id}`} className="bg-green-400 p-2 rounded">view CV</Link>

                                </td>
                                <td>
                                    <select className="select select-bordered select-sm w-full max-w-xs">
                                        defaultValue={'DEFAULT'}
                                        onChange={handleChange}
                                        <option value="DEFAULT" disabled selected>Choose Status</option>
                                        <option>Shortlisted</option>
                                        <option>Pending</option>
                                    </select>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default All;