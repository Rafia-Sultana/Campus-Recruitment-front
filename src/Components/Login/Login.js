import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SocialMedia from './SocialMedia';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


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
    const handleGoogleSignUp=(e)=>{
        e.preventDefault()
const email=e.target.email.value;
console.log(email);
const password=e.target.password.value;
console.log(password);
    }



    return (
       
        <div className='flex min-h-[80vh] justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleGoogleSignUp}>
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
                  {/*   <button onClick={() => signInWithGoogle()}
                       
                        className="btn btn-outline hover:btn-warning"
                    >Continue with Google</button> */}
                </div>
            </div>
        </div >
    );
};

export default Login;