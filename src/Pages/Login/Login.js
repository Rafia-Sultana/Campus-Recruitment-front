import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading />
    }


    return (
        <div className='flex min-h-[80vh] justify-center items-center'>
            <div className="font-bold text-4xl mr-5 w-2/6">Step forward to an Employability Test and Stand out <a href='' className="underline decoration-indigo-500 underline-offset-4 ">exceptionally</a>    among thousands of job candidates</div>
            <div className="card w-2/6 bg-base-100 shadow-xl my-10">
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleLogIn}>
                        <div className="form-control w-96">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-5/6">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <br></br>
                        </div>

                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p>
                        <small className='ml-3 '>New to Here?
                            <Link className='text-primary ml-3' to="/signup" >Create New Account</Link>
                        </small>
                    </p>
                    <div className="divider">OR</div>
                    <SocialMedia></SocialMedia>

                </div>
            </div>
        </div >
    );
};

export default Login;