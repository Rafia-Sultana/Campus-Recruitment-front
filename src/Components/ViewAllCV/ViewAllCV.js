import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCv from '../SingleCv/SingleCv';



const ViewAllCV = () => {
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
    const { id } = useParams()
    console.log(fullCv)
    console.log(id);
    const filteredData = fullCv.filter(data => data._id === id)
    console.log(filteredData)
    return (
        <div className="">
            {filteredData.map((cv, index) => (<SingleCv key={index + 1} cv={cv} />))}
        </div>
    );
};

export default ViewAllCV;