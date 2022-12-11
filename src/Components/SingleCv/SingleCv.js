import React from 'react';

const SingleCv = ({ cv }) => {




    console.log(cv);
    return (
        <div>

            <div>
                <div className=''>
                    <div className='pl-14 pr-16 pt-14'

                        style={{ width: 'window.innerWidth', height: 'window.innerHeight' }}>
                        <>
                            <div className="" >
                                <h1 className='text-blue-700 text-xl font-bold mb-2'>{
                                    <h1>{cv.name}</h1>

                                }</h1>
                                {
                                    <h1 className='text-sm'><span className='mr-1'>Address:</span>{cv.house},{cv.thana},{cv.district}</h1>
                                }
                                <h1>{
                                    <h1 className='text-sm'>Mobile Number: {cv.mbl_num}</h1>

                                }</h1>
                                <h1 className='text-sm'>Email</h1>
                            </div>
                            <div >
                                <h1 className='font-semibold bg-slate-300 mt-3 underline ...'>Employment History:</h1>
                                {


                                    <div className='text-sm'>
                                        <h1 className='font-semibold'>{cv.designation}</h1>
                                        <h1>({cv.period})</h1>
                                        <h1 className='font-semibold mt-2 '>{cv.companyname}</h1>
                                        <h1>{cv.companylocation}</h1>
                                        <h1 className='mt-2'><span className='font-semibold '>Duties/Responsibilities:</span> <br />


                                            {
                                                /*   sentences?.map((sentence, index) => <li key={index}
                                                      className='px-8 pt-2 '
                                                  >{sentence}</li>) */
                                            }



                                        </h1>
                                    </div>
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
                                        <tr>
                                            <td className="border border-slate-300 ... text-center text-sm">{cv.levelofeducation}({cv.degreetitle})</td>
                                            <td className="border border-slate-300 ... text-center text-sm">{cv.majorgroup}</td>
                                            <td className="border border-slate-300 ... text-center text-sm" >{cv.instituename}</td>
                                            <td className="border border-slate-300 ... text-center text-sm"> {cv.result}</td>
                                            <td className="border border-slate-300 ... text-center text-sm">{cv.year} </td>
                                        </tr>

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
                                            <tr>
                                                <td className="border border-slate-300 ... text-center">{cv.trainingtitle}</td>
                                                <td className="border border-slate-300 ... text-center">{cv.instituenametraing}</td>
                                                <td className="border border-slate-300 ... text-center">{cv.country}</td>
                                                <td className="border border-slate-300 ... text-center">{cv.location}</td>
                                                <td className="border border-slate-300 ... text-center">{cv.duration}</td>


                                            </tr>
                                        }
                                    </tbody>
                                </table>


                            </div>

                            <div className="">
                                <h1 className='font-semibold bg-slate-300 mt-3 mb-2 underline ...'> Personal Details </h1>
                                {

                                    <div className='text-sm'>
                                        <h1> Father's Name	<span className='ml-24 mr-4'>:</span>{cv.fathername}  </h1>
                                        <h1> Mother's Name	<span className='colon'>:</span>{cv.mothername} </h1>
                                        <h1>Date of Birth	<span className='colon1'>:</span>{cv.dob} </h1>
                                        <h1> Gender	<span className='colon2'>:</span>{cv.gender}	</h1>

                                        <h1>  Nationality	<span className='colon3'>:</span>{cv.nationality}	</h1>
                                        <h1>Religion	<span className='colon4'>:</span>{cv.religion}	</h1>


                                        <h1>Blood Group	<span className='colon5'>:</span>{cv.bloodGroup}</h1>
                                    </div>


                                }


                            </div>







                        </>

                    </div>

                </div>
            </div>




        </div>
    );
};

export default SingleCv;