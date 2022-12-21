import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Report = () => {
    const [user] = useAuthState(auth)
    const [report, setReport] = useState([])
    //pdf printing
    const ComponentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle: 'user cv',
        onAfterPrint: () => alert('print success')
    })
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.uid}`)
            .then(res => res.json())
            .then(data => setReport(data))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const apply_date = e.target.from.value;
        const last_date = e.target.to.value;
        console.log(apply_date,last_date)

    }
    return (
        <div className=' '>
            <form onSubmit={handleSubmit} className='flex p-2'>
                <div className='px-5'>
                    <label for="from" className='font-bold'>From:</label>
                    <input type="date" name="from"></input>
                </div>
                <div>
                    <label for="to" className='font-bold'>To:</label>
                    <input type="date" name="to"></input>
                </div>
                <div className="px-5 bg-success ">

                    <input
                        type="submit"
                        value='submit'
                    ></input>
                </div>
            </form>
            <div className="overflow-x-auto">
                <p className='pl-14 flex justify-end mr-16 rounded'> <button onClick={handlePrint} className='text-underline bg-blue-400 p-2 rounded'>print</button></p>
                <div className='pl-14 pr-16 pt-14'
                    ref={ComponentRef}
                    style={{ width: 'window.innerWidth', height: 'window.innerHeight' }}>

                    <>

                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>sl.</th>
                                    <th>jobTitle</th>
                                    <th>location</th>
                                    <th>workPlace</th>
                                    <th>openings</th>
                                    <th>apply_date</th>
                                    <th>last_date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    report.map((r, index) => <tr>
                                        <td>{index + 1}</td>
                                        <td>{r.jobTitle}</td>
                                        <td>{r.location}</td>
                                        <td>{r.workPlace}</td>
                                        <td>{r.openings}</td>
                                        <td>{r.apply_date}</td>
                                        <td>{r.last_date}</td>

                                    </tr>)
                                }

                            </tbody>
                        </table>


                    </>
                </div>

            </div>



        </div >
    );
};

export default Report;