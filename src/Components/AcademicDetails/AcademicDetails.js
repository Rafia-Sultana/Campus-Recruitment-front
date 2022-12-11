import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
const AcademicDetails = () => {
    const [user] = useAuthState(auth);
    const [result, setResult] = useState("")
    const [year, setYear] = useState("")


    // academic fetching
    const [academic, setAcademic] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/academic/${user?.uid}`)
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
        fetch(`http://localhost:5000/training/${user?.uid}`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    setTraining(data)
                }
            )
    }, [])





    const handleAcademicDetails = (e) => {
        e.preventDefault()
        const uid = e.target.uid.value;
        const levelofeducation = e.target.levelofeducation.value;
        const degreetitle = e.target.degreetitle.value;
        const majorgroup = e.target.majorgroup.value;
        const instituename = e.target.instituename.value;
        const scale = e.target.scale.value;
        const cgpa = e.target.cgpa.value;

        const academic = { uid, levelofeducation, degreetitle, majorgroup, instituename, year, scale, cgpa, result }

        //POST academic details
        fetch('http://localhost:5000/academic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(academic),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Succesfully academic Details added!")

            })

    }
    //showing result
    const handleChange = (evt) => {
        const value = evt.target.value;
        setResult(value);

    }
    //showing year 
    const handleYearChange = (evt) => {
        const value = evt.target.value;
        setYear(value);

    }



    const handleTraingingSummary = (e) => {
        e.preventDefault()
        const uid = e.target.uid.value;
        const trainingtitle = e.target.trainingtitle.value;
        const instituenametraing = e.target.instituenametraing.value;
        const location = e.target.location.value;
        const duration = e.target.duration.value;
        const country = e.target.country.value;
        console.log(uid, country, location, trainingtitle, year, instituenametraing, duration)
        const training = { uid, country, location, trainingtitle, year, instituenametraing, duration }

        //POST Training Summary
        fetch('http://localhost:5000/training', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(training),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Succesfully training  Details added!")

            })



    }



    return (
        <div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Academic Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {
                        academic.length < 1 ?
                            <form onSubmit={handleAcademicDetails}   >
                                <div className=''>
                                    <div className="grid grid-cols-2 gap-4 my-3">
                                        <div className="form-control ">

                                            <input
                                                name='levelofeducation'
                                                type="text"
                                                placeholder="Level Of Education"
                                                className="input input-bordered"
                                            />

                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='degreetitle'
                                                type="text"
                                                placeholder="Exam/Degree Title"
                                                className="input input-bordered "

                                            />
                                            <input
                                                name='uid'
                                                type="text"
                                                value={user?.uid}
                                                hidden
                                                placeholder="uid"
                                                className="input input-bordered w-full max-w-xs"
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="form-control  ">

                                        <input
                                            name='majorgroup'
                                            type="text"
                                            placeholder="Major Group"
                                            className="input input-bordered w-4/6 mb-3"

                                        />

                                    </div>
                                    <div className="form-control ">

                                        <input
                                            name='instituename'
                                            type="text"
                                            placeholder="Institue Name"
                                            className="input input-bordered "

                                        />
                                        <br></br>

                                    </div>
                                    <div className="grid grid-cols-2 gap-4 ">
                                        {/*  <div className="form-control ">

                            <input
                                name='result'
                                type="text"
                                placeholder="Result"
                                className="input input-bordered"
                            />

                        </div>*/}
                                        <div className="form-control ">

                                            <select
                                                defaultValue={'DEFAULT'}

                                                onChange={handleChange}
                                                className="select text-black   w-full max-w-xs  mb-4" required >

                                                <option value="DEFAULT" disabled >Result</option>
                                                <option >First Division</option>
                                                <option >Second Division</option>
                                                <option >Third Division </option>
                                                <option>Grade</option>

                                                <option >Pass</option>
                                                <option >Enrolled</option>


                                            </select>
                                            <br></br>

                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='cgpa'
                                                type="text"
                                                placeholder="CGPA"
                                                className="input input-bordered "

                                            />

                                        </div>

                                    </div>






                                    <div className="grid grid-cols-2 gap-4 my-3">
                                        <div className="form-control ">

                                            <input
                                                name='scale'
                                                type="text"
                                                placeholder="Scale"
                                                className="input input-bordered"
                                            />

                                        </div>

                                        <div className="form-control ">

                                            {     /*  <input
                                name='yearofpassing'
                                type="text"
                                placeholder="Year of Passing"
                                className="input input-bordered "

                            /> */}




                                            <select
                                                defaultValue={'DEFAULT'}

                                                onChange={handleYearChange}
                                                className="select text-black   w-full max-w-xs  mb-4" required >

                                                <option value="DEFAULT" disabled >Year</option>
                                                <option >2025</option>
                                                <option >2024</option>
                                                <option >2023 </option>
                                                <option>2022</option>
                                                <option >2021</option>
                                                <option >2020</option>
                                                <option >2019 </option>
                                                <option>2018</option>
                                                <option >2017</option>
                                                <option >2016</option>


                                            </select>
                                            <br></br>






                                        </div>

                                    </div>



                                </div>



                                <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                            </form>
                            :
                            <>
                                {
                                    academic.map((a, index) =>
                                        <form>
                                            <div className=''>
                                                <div className="grid grid-cols-2 gap-4 my-3">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Level Of Education</span>
                                                        </label>
                                                        <p>{a.levelofeducation} </p>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Degree Title</span>
                                                        </label>
                                                        <p>{a.degreetitle} </p>

                                                    </div>

                                                </div>

                                                <div className="form-control  ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Major Group</span>
                                                    </label>
                                                    <p>{a.majorgroup}</p>

                                                </div>
                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Institue Name</span>
                                                    </label>
                                                    <p>{a.instituename} </p>
                                                    <br></br>

                                                </div>
                                                <div className="grid grid-cols-2 gap-4 ">
                                                    {/*  <div className="form-control ">

                            <input
                                name='result'
                                type="text"
                                placeholder="Result"
                                className="input input-bordered"
                            />

                        </div>*/}
                                                    <div className="form-control ">
                                                        {
                                                    /*     <select
                                                            defaultValue={'DEFAULT'}

                                                            onChange={handleChange}
                                                            className="select text-black   w-full max-w-xs  mb-4" required >

                                                            <option value="DEFAULT" disabled >Result</option>
                                                            <option >First Division</option>
                                                            <option >Second Division</option>
                                                            <option >Third Division </option>
                                                            <option>Grade</option>

                                                            <option >Pass</option>
                                                            <option >Enrolled</option>


                                                        </select> */}
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Result</span>
                                                        </label>
                                                        <p>{a.result}</p>
                                                        <br></br>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">CGPA</span>
                                                        </label>
                                                        <p>{a.cgpa}</p>

                                                    </div>

                                                </div>






                                                <div className="grid grid-cols-2 gap-4 my-3">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Scale</span>
                                                        </label>
                                                        <p>{a.scale}</p>

                                                    </div>

                                                    <div className="form-control ">

                                                        {     /*  <input
                                name='yearofpassing'
                                type="text"
                                placeholder="Year of Passing"
                                className="input input-bordered "

                            /> */}
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Year of Passing</span>
                                                        </label>



                                                        <p>{a.year}</p>
                                                        <br></br>






                                                    </div>

                                                </div>



                                            </div>



                                            <input
                                                className='btn btn-warning w-full max-w-xs text-white'
                                                type="submit" value="save"
                                                disabled
                                            />
                                        </form>
                                    )
                                }
                            </>
                    }


                </div>

            </div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Training Summary</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {
                        training.length < 1 ?
                            <form onSubmit={handleTraingingSummary}>
                                <div className=''>
                                    <div className="grid grid-cols-2 gap-4 my-3">
                                        <div className="form-control ">

                                            <input
                                                name='trainingtitle'
                                                type="text"
                                                placeholder="Training Title"
                                                className="input input-bordered"
                                            />

                                            <input
                                                name='uid'
                                                type="text"
                                                value={user?.uid}
                                                hidden
                                                placeholder="uid"
                                                className="input input-bordered w-full max-w-xs"
                                                required
                                            />
                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='country'
                                                type="text"
                                                placeholder="Country"
                                                className="input input-bordered "

                                            />

                                        </div>

                                    </div>


                                    <div className="form-control ">

                                        <input
                                            name='instituenametraing'
                                            type="text"
                                            placeholder="Institue Name "
                                            className="input input-bordered "

                                        />
                                        <br></br>

                                    </div>
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div className="form-control ">

                                            {    /*   <input
                                        name='trainingyear'
                                        type="text"
                                        placeholder="Training Year"
                                        className="input input-bordered"
                                    /> */}
                                            <select
                                                defaultValue={'DEFAULT'}

                                                onChange={handleYearChange}
                                                className="select text-black   w-full max-w-xs  mb-4" required >

                                                <option value="DEFAULT" disabled >Year</option>
                                                <option >2025</option>
                                                <option >2024</option>
                                                <option >2023 </option>
                                                <option>2022</option>
                                                <option >2021</option>
                                                <option >2020</option>
                                                <option >2019 </option>
                                                <option>2018</option>
                                                <option >2017</option>
                                                <option >2016</option>


                                            </select>
                                            <br></br>

                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='duration'
                                                type="text"
                                                placeholder="Duration"
                                                className="input input-bordered "

                                            />

                                        </div>

                                    </div>

                                    <div className="form-control ">

                                        <input
                                            name='location'
                                            type="text"
                                            placeholder="Location"
                                            className="input input-bordered w-1/2 my-3"
                                        />



                                    </div>
                                </div>



                                <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                            </form>
                            :
                            <>
                                {
                                    training.map((t, index) =>

                                        <form >
                                            <div className=''>
                                                <div className="grid grid-cols-2 gap-4 my-3">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Training Title</span>
                                                        </label>
                                                        <p>{t.trainingtitle}</p>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Country</span>
                                                        </label>
                                                        <p>{t.country}</p>

                                                    </div>

                                                </div>


                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Institue Name</span>
                                                    </label>
                                                    <p>{t.instituenametraing}</p>
                                                    <br></br>

                                                </div>
                                                <div className="grid grid-cols-2 gap-4 ">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Year</span>
                                                        </label>
                                                        {    /*   <input
                                            name='trainingyear'
                                            type="text"
                                            placeholder="Training Year"
                                            className="input input-bordered"
                                        /> */}
                                                        {  /*        <select
                                                            defaultValue={'DEFAULT'}

                                                            onChange={handleYearChange}
                                                            className="select text-black   w-full max-w-xs  mb-4" required >

                                                            <option value="DEFAULT" disabled >Year</option>
                                                            <option >2025</option>
                                                            <option >2024</option>
                                                            <option >2023 </option>
                                                            <option>2022</option>
                                                            <option >2021</option>
                                                            <option >2020</option>
                                                            <option >2019 </option>
                                                            <option>2018</option>
                                                            <option >2017</option>
                                                            <option >2016</option>


                                                        </select> */}
                                                        <p>{t.year}</p>
                                                        <br></br>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Duration</span>
                                                        </label>
                                                        <p>{t.duration}</p>

                                                    </div>

                                                </div>

                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Location</span>
                                                    </label>
                                                    <p>{t.location}</p>

                                                </div>





                                            </div>



                                            <input
                                                className='btn btn-warning w-full mb-5 max-w-xs text-white'
                                                type="submit" value="save"
                                                disabled />
                                        </form>
                                    )
                                }
                            </>
                    }


                </div>

            </div>
        </div>
    );
};

export default AcademicDetails;