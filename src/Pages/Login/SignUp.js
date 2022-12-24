import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Components/Loading/Loading';
import { useEffect } from 'react';

const SignUp = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleSignUp = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        await handleCandidate(email, name)
    }
    const handleCandidate = (email, name) => {
        const url = 'http://localhost:5000/candidates'
        const role = 'candidate'
        const candidateInfo = { email, name, role }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(candidateInfo),
        })
            .then(res => res.json())
            .then()
    }





    if (user) {
        navigate('/');
    }
    if (loading || updating) {
        return <Loading />
    }
    let errorElement;
    if (error || updateError) {
        errorElement = <p className='text-red-500'>{error?.message || updateError?.message}</p>
    }

    return (
        <div className='flex min-h-[80vh] justify-center items-center'>
            <div className="font-bold text-4xl mr-5 w-2/6">Search, View, Apply to any jobs from anywhere!!</div>
            <div className="card w-2/6 bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Candidate Register</h2>
                    <form onSubmit={handleSignUp}>

                        <div className="form-control w-5/6">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />

                        </div>
                        <div className="form-control w-5/6">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                required

                            />
                            <br></br>

                        </div>

                        {errorElement}
                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account ?<Link className='text-primary' to="/login"> Pleasse login</Link></small></p>
                    <div className="divider">OR</div>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </div >
    );
};

export default SignUp;