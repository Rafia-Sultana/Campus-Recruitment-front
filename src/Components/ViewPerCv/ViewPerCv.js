import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const ViewPerCv = () => {
    const [user] = useAuthState(auth)
    //pdf printing
    const ComponentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle: 'user cv',
        onAfterPrint: () => alert('print success')
    })
    const [cv, setCv] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/percv`)
            .then(res => res.json())
            .then(data => setCv(data))
    }, [])

    const filteredCv = cv.filter(data => data.companyUid === user?.uid)
    console.log(filteredCv)



    console.log(cv[0]?.designation);
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
                                <h1>{filteredCv[0]?.name}</h1>

                            </h1>
                            <h1 className='text-sm'><span className='mr-1'>Address:</span>{filteredCv[0]?.house},{filteredCv[0]?.thana},{filteredCv[0]?.district}</h1>

                            <h1> <h1 className='text-sm'>Mobile Number: {filteredCv[0]?.mbl_num}</h1>

                            </h1>
                            <h1 className='text-sm'>Email</h1>
                        </div>
                        <div >
                            <h1 className='font-semibold bg-slate-300 mt-3 underline ...'>Employment History:</h1>

                            <div className='text-sm'>
                                <h1 className='font-semibold'>{filteredCv[0]?.designation}</h1>
                                <h1>({filteredCv[0]?.period})</h1>
                                <h1 className='font-semibold mt-2 '>{filteredCv[0]?.companyname}</h1>
                                <h1>{filteredCv[0]?.companylocation}</h1>
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
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredCv[0]?.levelofeducation}({cv[0]?.degreetitle})</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredCv[0]?.majorgroup}</td>
                                    <td className="border border-slate-300 ... text-center text-sm" >{filteredCv[0]?.instituename}</td>
                                    <td className="border border-slate-300 ... text-center text-sm"> {filteredCv[0]?.result}</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{filteredCv[0]?.year} </td>
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
                                        <td className="border border-slate-300 ... text-center">{filteredCv[0]?.trainingtitle}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredCv[0]?.instituenametraing}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredCv[0]?.country}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredCv[0]?.location}</td>
                                        <td className="border border-slate-300 ... text-center">{filteredCv[0]?.duration}</td>


                                    </tr>

                                </tbody>
                            </table>


                        </div>

                        <div className="">
                            <h1 className='font-semibold bg-slate-300 mt-3 mb-2 underline ...'> Personal Details </h1>

                            <div className='text-sm'>
                                <h1> Father's Name	<span className='ml-24 mr-4'>:</span>{filteredCv[0]?.fathername}  </h1>
                                <h1> Mother's Name	<span className='colon'>:</span>{filteredCv[0]?.mothername} </h1>
                                <h1>Date of Birth	<span className='colon1'>:</span>{filteredCv[0]?.dob} </h1>
                                <h1> Gender	<span className='colon2'>:</span>{filteredCv[0]?.gender}	</h1>

                                <h1>  Nationality	<span className='colon3'>:</span>{filteredCv[0]?.nationality}	</h1>
                                <h1>Religion	<span className='colon4'>:</span>{filteredCv[0]?.religion}	</h1>


                                <h1>Blood Group	<span className='colon5'>:</span>{filteredCv[0]?.bloodGroup}</h1>
                            </div>





                        </div>







                    </>

                </div>

            </div>
        </div>
    );
};

export default ViewPerCv;