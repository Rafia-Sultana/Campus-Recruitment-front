import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Components/Loading/Loading';
const EmployeSignUp = () => {
    const navigate = useNavigate();
    const [country, setCountry] = useState("")
    const [district, setDistrict] = useState("")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleEmployeSignUp = async (e) => {
        e.preventDefault()
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        const companyname = e.target.companyname.value;
        const publishyear = e.target.publishyear.value;
        const companyaddress = e.target.companyaddress.value
        const url = e.target.url.value;
        const contactname = e.target.contactname.value;
        const contactemail = e.target.contactemail.value;
        const contactmobile = e.target.contactmobile.value;
        const contactdesignation = e.target.contactdesignation.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: username })

        const userInfo = { username, email, confirmpassword, companyname, publishyear, companyaddress, url, contactname, contactemail, contactmobile, contactdesignation, country, district }
        await handleEmployee(userInfo)


        /*  console.log(username, password, confirmpassword, companyname, publishyear, url, contactname, contactemail, contactmobile, contactdesignation, companyaddress, country, district); */
    }

    const handleEmployee = (userInfo) => {
        const url = 'http://localhost:5000/candidates'
        const role = 'employee'
        const employeeInfo = { ...userInfo, role }
        console.log(employeeInfo);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeInfo),
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
            })
    }



    if (user) {
        navigate('/');
    }

    if (loading || updating) {
        return <Loading />
    }
    /*     let errorElement;
        if (error || updateError) {
            errorElement = <p className='text-red-500'>{error?.message || updateError?.message}</p>
        } */
    const handleChange = (evt) => {
        const value = evt.target.value;
        setCountry(value)
    }
    const handleDistrictChange = (evt) => {
        const value = evt.target.value;
        setDistrict(value)
    }

    return (
        <div>
            <form onSubmit={handleEmployeSignUp}>
                <h1 className='text-center mt-5 font-bold text-2xl'>Employer Registration Form</h1>
                <h1 className='mx-5 font-semibold text-lg mt-3'>Account Information</h1>
                <div className="flex gap-8 m-4">
                    <input type="text" name='username' placeholder="UserName" className="input  input-bordered input-black w-full max-w-xs " />
                    <input
                        name='email'
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"

                    />
                    <input type="Password" name='password' placeholder="Password" className="input  input-bordered input-black w-full max-w-xs " />
                    <input type="Password" name='confirmpassword' placeholder="Confirm Password" className="input  input-bordered input-black  w-full max-w-xs" />
                </div>
                <h1 className='mx-5 font-semibold text-lg mt-3'>Company Details Information</h1>
                <div className="flex gap-8 m-4">
                    <input type="text" name='companyname' placeholder="Company Name" className="input  input-bordered input-black w-1/2  " />
                    <input type="text" name='publishyear' placeholder="Year of Establishment" className="input  input-bordered input-black w-2/6  " />


                </div>
                <h1 className='mx-5 font-semibold text-lg mt-3'>Company Address</h1>
                <div className="mt-3">
                    <select
                        defaultValue={'DEFAULT'}
                        onChange={handleChange}
                        className="select w-2/6 mb-4 ml-8" >

                        <option value="DEFAULT" disabled >Bangladesh</option>
                        <option>Bangladesh</option>
                        <option >UK</option>
                        <option >Dubai</option>
                        <option > Chaina </option>
                        <option>India</option>
                        <option >Saudi Arabia</option>
                        <option>Qatar</option>
                        <option >Japan</option>
                        <option >Germany</option>
                        <option >Pakistan</option>
                        <option >Africa</option>
                        <option >South Korea</option>
                    </select>

                </div>
                <div className=" w-3/6 mx-4 mb-4">
                    <div className="">
                        <select
                            defaultValue={'DEFAULT'}
                            onChange={handleDistrictChange}
                            className="select w-3/6 mb-4 mx-4" >

                            <option value="DEFAULT" disabled >Select District</option>
                            <option >Dhaka</option>
                            <option >Gazipur</option>
                            <option >Chittagong</option>
                            <option>Sylhet</option>
                            <option >Rajshahi</option>
                            <option>Cumilla</option>
                            <option >Rangpur</option>
                            <option >Barishal</option>
                            <option >Khulna</option>
                            <option >Noakhali</option>
                            <option >Mymensing</option>
                        </select>
                    </div>
                    <div className="">
                        {
                       /*  <select
                            defaultValue={'DEFAULT'}
                            onChange={handleDistrictChange}
                            className="select w-3/6 mb-4 mx-4" >

                            <option value="DEFAULT" disabled >Select Thana</option>
                            <option >Dhaka</option>
                            <option >Gazipur</option>
                            <option >Chittagong</option>
                            <option>Sylhet</option>
                            <option >Rajshahi</option>
                            <option>Cumilla</option>
                            <option >Rangpur</option>
                            <option >Barishal</option>
                            <option >Khulna</option>
                            <option >Noakhali</option>
                            <option >Mymensing</option>
                        </select> */}


                    </div>
                    <textarea
                        type='text'
                        name='companyaddress'
                        className="textarea textarea-bordered w-4/6"
                        placeholder="Write Company Address">
                    </textarea>


                </div>
                <div className="">
                    <h1 className='mx-5 font-semibold text-lg mt-3'>Website URL</h1>
                    <input type="url" name='url' placeholder="" className="input input-bordered w-5/6 mx-4" />
                </div>
                {/* <h1 className='mx-5 font-semibold text-lg mt-3'>Contact</h1> */}
                <h1 className='mx-5 font-semibold text-lg mt-3'>Primary Contact</h1>
                <div className="grid grid-cols-2 gap-4 mx-4 mb-4">
                    <input type="text" name='contactname' placeholder="Contact Person's Name" className="input  input-bordered input-black w-96  " />
                    <input type="text" name='contactdesignation' placeholder="Contact Person's Designation" className="input  input-bordered input-black w-96  " />
                    <input type="email" name='contactemail' placeholder="Contact Person's Email" className="input  input-bordered input-black w-96  " />
                    <input type="tel" name='contactmobile' placeholder="Contact Person's Mobile" className="input  input-bordered input-black w-96  " />

                </div>
                {/* {errorElement} */}
                <input type="submit" value="Register" className='input input-bordered bg-green-400 mx-5 mb-5 w-1/6' />
                <Link to='/employelogin'>
                    <button className='bg-blue-200 mx-5 input input-bordered' >Back to LogIn</button>
                </Link>

            </form>

        </div>
    );
};

export default EmployeSignUp;