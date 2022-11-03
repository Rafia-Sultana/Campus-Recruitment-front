import React from 'react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialMedia from './SocialMedia';


const SignUp = () => {
/******/
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (user) {
  //   return (
  //     <div>
  //       <p>Registered User: {user.email}</p>
  //     </div>
  //   );
  }
const  handleSignUp =(e) =>{
    e.preventDefault();
    const name = e.target.text.value;
   
    const email = e.target.email.value;
   
    const password = e.target.password.value;
    console.log(password);
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
                                name="text"
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
                                type="password"
                              name="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                         
                            />
                            <br></br>
                           
                        </div>

              <button type='submit' className='btn btn-primary w-full max-w-xs text-white'>SignUp</button>
                    
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