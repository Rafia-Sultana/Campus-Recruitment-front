import React from 'react';

const EmploymentHistory = () => {
    return (
        <div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Employment History</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >
                        <div className=''>
                            <div className="grid grid-cols-2 gap-4 my-3">
                                <div className="form-control ">

                                    <input
                                        name='companyname'
                                        type="text"
                                        placeholder="Company Name"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='companybuisness'
                                        type="text"
                                        placeholder="Company Buisness"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>

                            <div className="form-control  ">

                                <input
                                    name='designation'
                                    type="text"
                                    placeholder="Designation"
                                    className="input input-bordered w-4/6 mb-3"

                                />

                            </div>
                            <div className="form-control ">

                                <textarea
                                    name='responsibilities'
                                    type=""
                                    placeholder="Responsibilities"
                                    className="input input-bordered "

                                />
                                <br></br>

                            </div>
                            <div className="grid grid-cols-2 gap-4 ">
                                <div className="form-control ">

                                    <input
                                        name='department'
                                        type="text"
                                        placeholder="Department"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='period'
                                        type="text"
                                        placeholder="Employment Period"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>

                            <div className="form-control ">

                                <input
                                    name='companylocation'
                                    type="text"
                                    placeholder="Company Location"
                                    className="input input-bordered my-3"
                                />

                            </div>







                        </div>



                        <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                    </form>


                </div>

            </div>
        </div>
    );
};

export default EmploymentHistory;