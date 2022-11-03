import React from 'react';
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleSignUp = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name,email,password)
    createUserWithEmailAndPassword(email, password)
  }

 return (
        <div className='flex min-h-[80vh] justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>
                    <form onSubmit={handleSignUp}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name' 
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                             />
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
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
                            name='password'
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                             
                            />
                            <br></br>
                           
                        </div>

                       
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