import React from 'react';

const AdminLogin = () => {
    const handleAdminLogIn = () => {

    }
    return (
        <div>
            <div className='flex min-h-[80vh] justify-center items-center'>

                <div className="card w-2/6 bg-base-100 shadow-xl my-10">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold">ADMIN</h2>
                        <form onSubmit={handleAdminLogIn}>
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

                            <input
                                className='btn btn-primary w-full max-w-xs text-white'
                                type="submit"
                                value="Submit" />
                        </form>



                    </div>
                </div>
            </div >
        </div>
    );
};

export default AdminLogin;