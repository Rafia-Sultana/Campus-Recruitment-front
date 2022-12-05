import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useAuthState } from 'react-firebase-hooks/auth';
const SocialMedia = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (error1) {
    return (
      <div>
        <p>Error: {error1.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const handlegooglesignup = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    console.log(email);
    const password = e.target.password.value;
    console.log(password);
  }
  return (
    <div className="card-body">
      <button onClick={() => signInWithGoogle()}
        className="btn btn-outline hover:btn-warning"
      >
        Continue with Google
      </button>
      {   /* <button onClick={() => signInWithGithub()}
                 className="btn btn-outline hover:btn-warning"
                >
                Continue with Github
                </button> */}

    </div>
  )
}
export default SocialMedia;