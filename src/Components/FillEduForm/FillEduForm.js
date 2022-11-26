import React from 'react';
import { Link } from 'react-router-dom';
const FillEduForm = () => {
    return (
        <div>


            <div className="flex w-full mt-8">
                <div className="grid h-20 flex-grow card bg-green-300 rounded-box place-items-center text-lg font-bold">Upload CV</div>
                <div className="divider divider-horizontal">OR</div>
                <div className="grid h-20 flex-grow card bg-blue-300 rounded-box place-items-center text-lg font-bold">Make Resume</div>
                <Link to='/dashboard/cvform'>Make CV</Link>
            </div>

        </div>
    );
};

export default FillEduForm;