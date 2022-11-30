import React from 'react';
import './ViewResume.css'
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'

const ViewResume = () => {
    //pdf printing
    const ComponentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => ComponentRef.current,
        documentTitle: 'user cv',
        onAfterPrint: () => alert('print success')
    })


    const [personal, setPersonal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/personal`)
            .then(res => res.json())
            .then(
                data => {
                    console.log(data)
                    setPersonal(data)
                }
            )
    }, [])
    //address fetching
    const [address, SetAddress] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/address`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    SetAddress(data)
                }
            )
    }, [])


    // employmenthistory fetching 
    const [employmenthistory, setEmploymenthistory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/employmenthistory`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    setEmploymenthistory(data)
                }
            )
    }, [])
    console.log(employmenthistory)
    //viewing as a sentence of responsibilites
    const sentences = employmenthistory[0]?.responsibilities?.split('.')
    console.log(sentences)

    // academic fetching
    const [academic, setAcademic] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/academic`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    setAcademic(data)
                }
            )
    }, [])

    // training fetching
    const [training, setTraining] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/training`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    setTraining(data)
                }
            )
    }, [])

    return (
        <div className=''>
            <p className='pl-14'>You can download this as <button onClick={handlePrint} className='text-underline text-blue-400'>pdf</button></p>
            <div className='pl-14 pr-16 pt-14'
                ref={ComponentRef}
                style={{ width: 'window.innerWidth', height: 'window.innerHeight' }}>
                <>
                    <div className="" >
                        <h1 className='text-blue-700 text-xl font-bold mb-2'>{
                            personal.map(person => <h1>{person.name}</h1>)

                        }</h1>
                        {
                            address.map(a => <h1 className='text-sm'><span className='mr-1'>Address:</span>{a.house},{a.thana},{a.district}</h1>)
                        }
                        <h1>{
                            personal.map(person => <h1 className='text-sm'>Mobile Number: {person.mbl_num}</h1>)

                        }</h1>
                        <h1 className='text-sm'>Email</h1>
                    </div>
                    <div >
                        <h1 className='font-semibold bg-slate-300 mt-3 underline ...'>Employment History:</h1>
                        {
                            employmenthistory.map(e => <div className='text-sm'>
                                <h1 className='font-semibold'>{e.designation}</h1>
                                <h1>({e.period})</h1>
                                <h1 className='font-semibold mt-2 '>{e.companyname}</h1>
                                <h1>{e.companylocation}</h1>
                                <h1 className='mt-2'><span className='font-semibold '>Duties/Responsibilities:</span> <br />
                                    {  /*{e.responsibilities}  */}

                                    {
                                        sentences?.map((sentence, index) => <li key={index}
                                            className='px-8 pt-2 '
                                        >{sentence}</li>)
                                    }



                                </h1>
                            </div>)
                        }

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

                            {
                                academic.map((a, index) => <tr key={index}>
                                    <td className="border border-slate-300 ... text-center text-sm">{a.levelofeducation}({a.degreetitle})</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{a.majorgroup}</td>
                                    <td className="border border-slate-300 ... text-center text-sm" >{a.instituename}</td>
                                    <td className="border border-slate-300 ... text-center text-sm"> {a.result}</td>
                                    <td className="border border-slate-300 ... text-center text-sm">{a.year} </td>
                                </tr>
                                )
                            }

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
                                {
                                    training.map((t, index) => <tr key={index}>
                                        <td className="border border-slate-300 ... text-center">{t.trainingtitle}</td>
                                        <td className="border border-slate-300 ... text-center">{t.instituenametraing}</td>
                                        <td className="border border-slate-300 ... text-center">{t.country}</td>
                                        <td className="border border-slate-300 ... text-center">{t.location}</td>
                                        <td className="border border-slate-300 ... text-center">{t.duration}</td>


                                    </tr>)
                                }
                            </tbody>
                        </table>


                    </div>

                    <div className="">
                        <h1 className='font-semibold bg-slate-300 mt-3 mb-2 underline ...'> Personal Details </h1>
                        {
                            personal.map((p, index) =>
                                <div className='text-sm'>
                                    <h1> Father's Name	<span className='ml-24 mr-4'>:</span>{p.fathername}  </h1>
                                    <h1> Mother's Name	<span className='colon'>:</span>{p.mothername} </h1>
                                    <h1>Date of Birth	<span className='colon1'>:</span>{p.dob} </h1>
                                    <h1> Gender	<span className='colon2'>:</span>{p.gender}	</h1>

                                    <h1>  Nationality	<span className='colon3'>:</span>{p.nationality}	</h1>
                                    <h1>Religion	<span className='colon4'>:</span>{p.religion}	</h1>


                                    <h1>Blood Group	<span className='colon5'>:</span>{p.bloodGroup}</h1>
                                </div>

                            )
                        }


                    </div>







                </>

            </div>
            {    /*      <button onClick={handlePrint}>print this</button> */}
        </div>
    );
};

export default ViewResume;