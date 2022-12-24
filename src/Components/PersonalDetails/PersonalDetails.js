import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PersonalDetails = () => {

    const [user] = useAuthState(auth);
    //personal fetching 
    const [personal, setPersonal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/personal/${user?.uid}`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log((data)
                    setPersonal(data)
                }
            )
    }, [])

    //address fetching
    const [address, SetAddress] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/address/${user?.uid}`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log((data)
                    SetAddress(data)
                }
            )
    }, [])
    //career fetching
    const [career, SetCareer] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/career/${user?.uid}`)
            .then(res => res.json())
            .then(
                data => {
                    // console.log((data)
                    SetCareer(data)
                }
            )
    }, [])





    const [bloodGroup, setBloodGroup] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const uid = e.target.uid.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const fathername = e.target.fathername.value;
        const mothername = e.target.mothername.value;
        const dob = e.target.dob.value;
        const gender = e.target.gender.value;
        const religion = e.target.religion.value;
        const nationality = e.target.nationality.value;
        const mbl_num = e.target.mbl_num.value;

       
        const personal = { uid, email, name, mothername, fathername, dob, gender, religion, nationality, mbl_num, bloodGroup }

        //POST personal details
        fetch('http://localhost:5000/personal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personal),
        })
            .then(res => res.json())
            .then(data => {
                
                toast("Succesfully Personal Details added!")

            })



    }
    const handleChange = (evt) => {
        const value = evt.target.value;
        setBloodGroup(value);

    }


    const handleAddressDetails = (e) => {
        e.preventDefault()


        const uid = e.target.uid.value;
        
        const district = e.target.district.value;
        const thana = e.target.thana.value;
        const postOffice = e.target.postOffice.value;
        const house = e.target.house.value;

        const address = { district, thana, postOffice, house, uid }

        //POST address details
        fetch('http://localhost:5000/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(address),
        })
            .then(res => res.json())
            .then(data => {
                
                toast("Succesfully Address Details added!")
                /* e.target.reset(); */
            })

    }
    const handleCareerDetails = (e) => {
        e.preventDefault()
        const uid = e.target.uid.value;
        
        const objective = e.target.objective.value;
        const expectedsalary = e.target.expectedsalary.value;
        const jobnature = e.target.jobnature.value;
        
        const career = { uid, objective, expectedsalary, jobnature }

        //POST career details
        fetch('http://localhost:5000/career', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(career),
        })
            .then(res => res.json())
            .then(data => {
                
                toast("Succesfully Career Details added!")
                /* e.target.reset(); */
            })
    }

    return (
        <div>




            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Personal Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {personal.length < 1 ?
                        <form onSubmit={handleSubmit}>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"
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
                            <div className='flex justify-start gap-5 mt-0'>
                                <div className="form-control w-1/2 max-w-xs mr-2 ">
                                    <label className="label">
                                        <span className="label-text">Father's Name</span>
                                    </label>
                                    <input
                                        name='fathername'
                                        type="text"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />

                                </div>
                                <div className="form-control w-1/2 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Mother's Name</span>
                                    </label>
                                    <input
                                        name='mothername'
                                        type="text"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                    <br></br>

                                </div>
                            </div>
                            <div className='flex justify-start gap-5 mt-0'>
                                <div className="form-control w-1/2 max-w-xs mr-2 ">
                                    <label className="label">
                                        <span className="label-text">Date Of Birth</span>
                                    </label>
                                    <input
                                        name='dob'
                                        type="date"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />

                                </div>
                                <div className="form-control w-1/2 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <input
                                        name='gender'
                                        type="text"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                    <br></br>

                                </div>
                            </div>
                            <div className='flex justify-start gap-5 mt-0'>
                                <div className="form-control w-1/2 max-w-xs mr-2 ">
                                    <label className="label">
                                        <span className="label-text">Religion</span>
                                    </label>
                                    <input
                                        name='religion'
                                        type="text"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />

                                </div>
                                <div className="form-control w-1/2 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Nationality</span>
                                    </label>
                                    <input
                                        name='nationality'
                                        type="text"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />
                                    <br></br>

                                </div>
                            </div>
                            <div className='flex justify-start gap-5 mt-0'>
                                <div className="form-control w-1/2 max-w-xs mr-2 ">
                                    <label className="label">
                                        <span className="label-text">Mobile Number</span>
                                    </label>
                                    <input
                                        name='mbl_num'
                                        type="tel"
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                        required
                                    />

                                </div>
                                <div className="form-control w-1/2 max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <select
                                        defaultValue={'DEFAULT'}
                                        onChange={handleChange}
                                        className="select text-black   w-full max-w-xs  mb-4" required >

                                        <option value="DEFAULT" disabled >Select</option>
                                        <option >A(+ve)</option>
                                        <option >A(-ve)</option>
                                        <option >B(+ve) </option>
                                        <option>B(-ve)</option>

                                        <option >O(+ve)</option>
                                        <option >O(-ve)</option>
                                        <option >AB(+ve)</option>
                                        <option >AB(-ve)</option>

                                    </select>
                                    <br></br>

                                </div>
                            </div>

                            <input
                                className='btn btn-warning w-full max-w-xs text-white'
                                type="submit"
                                value="save" />
                            <ToastContainer />
                        </form> :
                        <>
                            <p>{personal.map((person, index) => <form >

                                <div className="form-control w-full max-w-xs mt-5">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <p>{person.name}</p>

                                </div>
                                <div className='flex justify-start gap-5 mt-0'>
                                    <div className="form-control w-1/2 max-w-xs mr-2 ">
                                        <label className="label">
                                            <span className="label-text">Father's Name</span>
                                        </label>
                                        <p>{person.fathername}</p>

                                    </div>
                                    <div className="form-control w-1/2 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Mother's Name</span>
                                        </label>
                                        <p>{person.mothername}</p>
                                        <br></br>

                                    </div>
                                </div>
                                <div className='flex justify-start gap-5 mt-0'>
                                    <div className="form-control w-1/2 max-w-xs mr-2 ">
                                        <label className="label">
                                            <span className="label-text">Date Of Birth</span>
                                        </label>
                                        <p>{person.dob}</p>

                                    </div>
                                    <div className="form-control w-1/2 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Gender</span>
                                        </label>
                                        <p>{person.gender}</p>
                                        <br></br>

                                    </div>
                                </div>
                                <div className='flex justify-start gap-5 mt-0'>
                                    <div className="form-control w-1/2 max-w-xs mr-2 ">
                                        <label className="label">
                                            <span className="label-text">Religion</span>
                                        </label>
                                        <p>{person.religion}</p>

                                    </div>
                                    <div className="form-control w-1/2 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Nationality</span>
                                        </label>
                                        <p>{person.nationality}</p>
                                        <br></br>

                                    </div>
                                </div>
                                <div className='flex justify-start gap-5 mt-0'>
                                    <div className="form-control w-1/2 max-w-xs mr-2 ">
                                        <label className="label">
                                            <span className="label-text">Mobile Number</span>
                                        </label>
                                        <p>{person.mbl_num}</p>

                                    </div>
                                    <div className="form-control w-1/2 max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Blood Group</span>
                                        </label>
                                        <p>{person.bloodGroup}</p>
                                        <br></br>

                                    </div>
                                </div>

                                <input
                                    className='btn btn-warning w-full max-w-xs text-white'
                                    type="submit"
                                    value="save"
                                    disabled
                                />
                         

                                <ToastContainer />
                            </form>)}</p>
                        </>
                    }
                </div>

            </div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Address Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {
                        address.length < 1 ?
                            <form onSubmit={handleAddressDetails}>
                                <div className='flex justify-start gap-5 mt-5 mb-3'>
                                    <div className="form-control w-full max-w-xs ">

                                        <input
                                            name='district'
                                            type="text"
                                            placeholder="District"
                                            className="input input-bordered w-full max-w-xs"
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

                                    <div className="form-control w-1/2 max-w-xs ">

                                        <input
                                            name='thana'
                                            type="text"
                                            placeholder="Thana"
                                            className="input input-bordered w-full max-w-xs"
                                            required
                                        />

                                    </div>
                                    <div className="form-control w-1/2 max-w-xs ">

                                        <input
                                            name='postOffice'
                                            type="text"
                                            placeholder="PostOffice"
                                            className="input input-bordered w-full max-w-xs"
                                            required
                                        />

                                    </div>


                                </div>

                                <div className="form-control w-full">

                                    <input
                                        name='house'
                                        type="text"
                                        placeholder="Type your house no/Road/Village"
                                        className="input input-bordered "
                                        required
                                    />
                                    <br></br>

                                </div>

                                <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                            </form>
                            : <>

                                {
                                    address.map((a, index) =>
                                        <form>
                                            <div className='flex justify-start gap-5 mt-5 mb-3'>
                                                <div className="form-control w-full max-w-xs ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">District</span>
                                                    </label>
                                                    <p>{a.district} </p>

                                                </div>

                                                <div className="form-control w-1/2 max-w-xs ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Thana</span>
                                                    </label>
                                                    <p>
                                                        {a.thana}</p>

                                                </div>
                                                <div className="form-control w-1/2 max-w-xs ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Post Office</span>
                                                    </label>
                                                    <p>{a.postOffice}</p>

                                                </div>


                                            </div>

                                            <div className="form-control w-full">
                                                <label className="label">
                                                    <span className="label-text font-bold text-lg">House Details</span>
                                                </label>
                                                <p>{a.house}</p>
                                                <br></br>

                                            </div>

                                            <input
                                                className='btn btn-warning w-full max-w-xs text-white'
                                                type="submit"
                                                disabled
                                                value="save"
                                            />
                                        </form>

                                    )
                                }


                            </>
                    }


                </div>

            </div>
            <div className="collapse collapse-plus border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Career Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    {
                        career.length < 1 ?
                            <form onSubmit={handleCareerDetails}>
                                <div >
                                    <div className="form-control w-full  mt-3 ">


                                        <textarea
                                            name='objective'
                                            type="text"
                                            className="textarea textarea-bordered w-full mb-3"
                                            placeholder="Career Objective"
                                            required
                                        ></textarea>

                                    </div>

                                    <div className="flex  gap-16">
                                        <div className="form-control w-1/2 max-w-xs ">

                                            <input
                                                name='expectedsalary'
                                                type="text"
                                                placeholder="Expected Salary"
                                                className="input input-bordered w-full mb-3"
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
                                        <div className="form-control w-1/2 max-w-xs ">

                                            <input
                                                name='jobnature'
                                                type="text"
                                                placeholder="Available for (Job Nature) "
                                                className="input input-bordered w-full mb-3"
                                                required
                                            />

                                        </div>
                                    </div>


                                </div>



                                <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                            </form>
                            :
                            <>
                                {
                                    career.map((c, index) =>

                                        <form >
                                            <div >
                                                <div className="form-control w-full  mt-3 ">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-lg">Carrer Objective</span>
                                                    </label>
                                                    <p>{c.objective}</p>

                                                </div>

                                                <div className="flex  gap-16">
                                                    <div className="form-control w-1/2 max-w-xs ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Expected Salary</span>
                                                        </label>
                                                        <p>{c.expectedsalary}</p>

                                                    </div>
                                                    <div className="form-control w-1/2 max-w-xs ">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-lg">Job Nature</span>
                                                        </label>
                                                        <p>{c.jobnature} </p>

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
















        </div>
    );
};

export default PersonalDetails;