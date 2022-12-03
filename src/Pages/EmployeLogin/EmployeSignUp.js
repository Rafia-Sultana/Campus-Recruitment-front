import React from 'react';

const EmployeSignUp = () => {
    return (
        <div>
            <h1>Employer Registration Form</h1>
            <h1>Account Information</h1>
            <div className="flex gap-8 m-4">
                <input type="text" placeholder="UserName" className="input  input-bordered input-black w-full max-w-xs " />
                <input type="text" placeholder="Password" className="input  input-bordered input-black w-full max-w-xs " />
                <input type="text" placeholder="Confirm Password" className="input  input-bordered input-black  w-full max-w-xs" />
            </div>
            <h1>Company Details Information</h1>
            <div className="flex gap-8 m-4">
                <input type="text" placeholder="Company Name" className="input  input-bordered input-black w-1/2  " />
                <input type="text" placeholder="Year of Establishment" className="input  input-bordered input-black w-2/6  " />


            </div>
            <h1>Company Address</h1>
            <div className="">
                <select className="select select-bordered w-5/6 m-4">
                    <option disabled selected>Bangladesh</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                </select></div>
            <div className="grid grid-cols-2 mx-8 mb-4">
                <div className="">  <select className="select select-bordered w-3/6 ">
                    <option disabled selected>Select District</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                </select></div>
                <div className="">  <select className="select select-bordered w-3/6 mb-4">
                    <option disabled selected>Select Thana</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                    <option>Normal Tomato</option>
                </select></div>
                <textarea className="textarea textarea-bordered" placeholder="Write Company Address"></textarea>


            </div>
            <div className="">
                <h1>Website URL</h1>
                <input type="text" placeholder="" className="input input-bordered w-5/6 mx-4" />
            </div>
            <h1>Contact</h1>
            <h1>Primary Contact</h1>
            <div className="grid grid-cols-2 gap-4 mx-4 mb-4">
                <input type="text" placeholder="Contact Person's Name" className="input  input-bordered input-black w-96  " />
                <input type="text" placeholder="Contact Person's Designation" className="input  input-bordered input-black w-96  " />
                <input type="text" placeholder="Contact Person's Email" className="input  input-bordered input-black w-96  " />
                <input type="text" placeholder="Contact Person's Mobile" className="input  input-bordered input-black w-96  " />

            </div>


        </div>
    );
};

export default EmployeSignUp;