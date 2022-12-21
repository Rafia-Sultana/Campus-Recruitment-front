import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useParams } from 'react-router-dom';
const ViewPerCv = () => {
    const [user] = useAuthState(auth)
    const [cv, setCv] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/percv`)
            .then(res => res.json())
            .then(data => setCv(data))
    }, [])
    const filteredCv = cv.filter(data => data.companyUid === user?.uid)
    const { id } = useParams()
    const filteredData = filteredCv.find(data => data._id === id)

    //pdf printing
    const ComponentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle: 'user cv',
        onAfterPrint: () => alert('print success')
    })

    return (
        <div>
            <div className=''>
                <p className='pl-14'>You can download this as <button onClick={handlePrint} className='text-underline text-blue-400'>pdf</button></p>
                <div className='pl-14 pr-16 pt-14'
                    ref={ComponentRef}
                    style={{ width: 'window.innerWidth', height: 'window.innerHeight' }}>
                    <>
                        <div className="" >
                            <h1 className='text-blue-700 text-xl font-bold mb-2'>
                                <h1>{filteredData?.name}</h1>

                            </h1>
                            <h1 className='text-sm'><span className='mr-1'>Address:</span>{filteredData?.house},{filteredData?.thana},{filteredData?.district}</h1>

                            <h1> <h1 className='text-sm'>Mobile Number: {filteredData?.mbl_num}</h1>

                            </h1>
                            <h1 className='text-sm'>Email</h1>
                        </div>
                        <div >
                            <h1 className='font-semibold bg-slate-300 mt-3 underline ...'>Employment History:</h1>

                            <div className='text-sm'>
                                <h1 className='font-semibold'>{filteredData?.designation}</h1>
                                <h1>({filteredData?.period})</h1>
                                <h1 className='font-semibold mt-2 '>{filteredData?.companyname}</h1>
                                <h1>{filteredData?.companylocation}</h1>
                                <h1 className='mt-2'><span className='font-semibold '>Duties/Responsibilities:</span> <br />
                                    {  /*{e.responsibilities}
                                    {
                                            sentences?.map((sentence, index) => <li key={index}
                                                className='px-8 pt-2 '
                                            >{sentence}</li>)
                                        }
                                    
                                    
                                    */}





                                </h1>
                            </div>


                        </div>
                        <div className="mt-3">
                            <h1 className='font-semibold bg-slate-300 mt-3 underline ...'>Academic Qualification:</h1>


                            <table class="w-full border-collapse border border-slate-400 ... mt-2">
                                <thead>
                                    <tr>
                                        <th class="border border-slate-300 ... text-sm">Exam Title</th>
                                        <th class="border border-slate-300 ... text-sm">Concentration/Major</th>
                                        <th class="border border-slate-300 ... text-sm">Institute</th>
                                        <th class="border border-slate-300 ... text-sm">Result</th>
                                        <th class="border border-slate-300 ... text-sm">Passing Year</th>
                                    </tr>
                                </thead>

                                <tr >
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredData?.levelofeducation}({filteredData?.degreetitle})</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredData?.majorgroup}</td>
                                    <td className="border border-slate-300 ... text-center text-sm" >{filteredData?.instituename}</td>
                                    <td className="border border-slate-300 ... text-center text-sm"> {filteredData?.result}</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredData?.year} </td>
                                </tr>



                            </table>
                        </div>

                        <div className="mb-3">
                            <h1 className='font-semibold bg-slate-300 mt-3 mb-2 underline ...'>Training Summary:</h1>

                            <table class="w-full border-collapse border border-slate-400 ...">
                                <thead>
                                    <tr>
                                        <th class="border border-slate-300 ... text-sm"> Training Title</th>
                                        <th class="border border-slate-300 ... text-sm">Institute</th>
                                        <th class="border border-slate-300 ... text-sm">Country</th>
                                        <th class="border border-slate-300 ... text-sm">Location</th>
                                        <th class="border border-slate-300 ... text-sm">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className=''>

                                    <tr >
                                        <td className="border border-slate-300 ... text-center">{filteredData?.trainingtitle}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredData?.instituenametraing}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredData?.country}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredData?.location}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredData?.duration}</td>


                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className="">
                            <h1 className='font-semibold bg-slate-300 mt-3 mb-2 underline ...'> Personal Details </h1>

                            <div className='text-sm'>
                                <h1> Father's Name	<span className='ml-24 mr-4'>:</span>{filteredData?.fathername}  </h1>
                                <h1> Mother's Name	<span className='colon'>:</span>{filteredData?.mothername} </h1>
                                <h1>Date of Birth	<span className='colon1'>:</span>{filteredData?.dob} </h1>
                                <h1> Gender	<span className='colon2'>:</span>{filteredData?.gender}	</h1>

                                <h1>  Nationality	<span className='colon3'>:</span>{filteredData?.nationality}	</h1>
                                <h1>Religion	<span className='colon4'>:</span>{filteredData?.religion}	</h1>


                                <h1>Blood Group	<span className='colon5'>:</span>{filteredData?.bloodGroup}</h1>
                            </div>





                        </div>







                    </>

                </div>

            </div>
        </div >
    );
};

export default ViewPerCv;