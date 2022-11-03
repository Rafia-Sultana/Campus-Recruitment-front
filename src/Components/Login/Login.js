import React from 'react';
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleLogIn=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password)

    }



    return (
       <div className='flex min-h-[80vh] justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleLogIn}>
                   <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
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
                    <p><small>New to Here? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <SocialMedia></SocialMedia>
                 
                </div>
            </div>
        </div >
    );
};

export default Login;