import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const CompanyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>

        </div>
    );
};

export default CompanyProfile;