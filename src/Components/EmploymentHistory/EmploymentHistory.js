import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const EmploymentHistory = () => {
    const [user] = useAuthState(auth);

    {/* employmenthistory fetching */ }
    const [employmenthistory, setEmploymenthistory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/employmenthistory/${user?.uid}`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log(data)
                    setEmploymenthistory(data)
                }
            )
    }, [])



    const handleCompanyDetails = (e) => {
        e.preventDefault()
        const uid = e.target.uid.value;
        const companyname = e.target.companyname.value;
        const companybuisness = e.target.companybuisness.value;
        const designation = e.target.designation.value;
        const responsibilities = e.target.responsibilities.value;
        const department = e.target.department.value;
        const period = e.target.period.value;
        const companylocation = e.target.companylocation.value;
        console.log(companyname, companybuisness, companylocation, designation, responsibilities, department, period);
        const employmentHistoryDetails = { uid, companyname, companybuisness, companylocation, designation, responsibilities, department, period }



        fetch('http://localhost:5000/employmenthistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employmentHistoryDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Succesfully Employment History Details added!")
                {  /* e.target.reset(); */ }
            })

    }
    return (
        <div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Employment History</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {
                        employmenthistory.length < 1 ?
                            <form onSubmit={handleCompanyDetails}>
                                <div className=''>
                                    <div className="grid grid-cols-2 gap-4 my-3">
                                        <div className="form-control ">

                                            <input
                                                name='companyname'
                                                type="text"
                                                placeholder="Company Name"
                                                className="input input-bordered"
                                                required
                                            />

                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='companybuisness'
                                                type="text"
                                                placeholder="Company Buisness"
                                                className="input input-bordered "
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="form-control  ">

                                        <input
                                            name='designation'
                                            type="text"
                                            placeholder="Designation"
                                            className="input input-bordered w-4/6 mb-3"
                                            required
                                        />

                                    </div>
                                    <div className="form-control ">

                                        <textarea
                                            name='responsibilities'
                                            type="text"
                                            placeholder="Responsibilities"
                                            className="input input-bordered "
                                            required
                                        />
                                        <br></br>

                                    </div>
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div className="form-control ">

                                            <input
                                                name='department'
                                                type="text"
                                                placeholder="Department"
                                                className="input input-bordered"
                                                required
                                            />

                                        </div>

                                        <div className="form-control ">

                                            <input
                                                name='period'
                                                type="text"
                                                placeholder="Employment Period"
                                                className="input input-bordered "
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="form-control ">

                                        <input
                                            name='companylocation'
                                            type="text"
                                            placeholder="Company Location"
                                            className="input input-bordered my-3"
                                            required
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



                                <input
                                    className='btn btn-warning w-full max-w-xs text-white'
                                    type="submit"
                                    value="save" />
                            </form>
                            :
                            <>
                                {
                                    employmenthistory.map((e, index) =>

                                        <form >
                                            <div className=''>
                                                <div className="grid grid-cols-2 gap-4 my-3">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Company Name</span>
                                                        </label>
                                                        <p> {e.companyname}</p>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Company Buisness</span>
                                                        </label>
                                                        <p>{e.companybuisness} </p>

                                                    </div>

                                                </div>

                                                <div className="form-control  ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Designation</span>
                                                    </label>
                                                    <p>{e.designation} </p>

                                                </div>
                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg"> Responsibilities </span>
                                                    </label>
                                                    <p>{e.responsibilities}</p>
                                                    <br></br>

                                                </div>
                                                <div className="grid grid-cols-2 gap-4 ">
                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Department</span>
                                                        </label>
                                                        <p>{e.department} </p>

                                                    </div>

                                                    <div className="form-control ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Period</span>
                                                        </label>
                                                        <p>{e.period} </p>

                                                    </div>

                                                </div>

                                                <div className="form-control ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Company Location</span>
                                                    </label>
                                                    <p>{e.companylocation} </p>

                                                </div>
                                            </div>



                                            <input
                                                className='btn btn-warning w-full max-w-xs text-white'
                                                type="submit"
                                                value="save"
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

export default EmploymentHistory;