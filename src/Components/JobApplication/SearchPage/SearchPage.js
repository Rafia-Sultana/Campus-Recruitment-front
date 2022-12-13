import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
const SearchPage = () => {

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

            <div className="flex justify-center mt-0  bg">



            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Expertise</th>
                            <th>Action</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            fullCv?.map((cv, index) => <tr key={index}>

                                <td>{(index + 1)}</td>
                                <td>{cv.name}</td>
                                <td>{cv.designation}</td>
                                <td >
                                    <Link to={`/viewcv/${cv._id}`} className="bg-green-400 p-2 rounded">view CV</Link>

                                </td>
                                <td>{cv.mbl_num}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SearchPage;