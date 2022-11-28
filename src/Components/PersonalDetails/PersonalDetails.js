import React from 'react';

const PersonalDetails = () => {
    return (
        <div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Personal Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >

                        <div className="form-control w-full max-w-xs mt-5">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className='flex justify-start gap-5 mt-0'>
                            <div className="form-control w-1/2 max-w-xs mr-2 ">
                                <label className="label">
                                    <span className="label-text">Father's Name</span>
                                </label>
                                <input
                                    name='fathername'
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-1/2 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mother's Name</span>
                                </label>
                                <input
                                    name='mothername'
                                    type=""
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />
                                <br></br>

                            </div>
                        </div>
                        <div className='flex justify-start gap-5 mt-0'>
                            <div className="form-control w-1/2 max-w-xs mr-2 ">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input
                                    name='dob'
                                    type="date"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-1/2 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input
                                    name='gender'
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />
                                <br></br>

                            </div>
                        </div>
                        <div className='flex justify-start gap-5 mt-0'>
                            <div className="form-control w-1/2 max-w-xs mr-2 ">
                                <label className="label">
                                    <span className="label-text">Religion</span>
                                </label>
                                <input
                                    name='religion'
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-1/2 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Nationality</span>
                                </label>
                                <input
                                    name='nationality'
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />
                                <br></br>

                            </div>
                        </div>
                        <div className='flex justify-start gap-5 mt-0'>
                            <div className="form-control w-1/2 max-w-xs mr-2 ">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input
                                    name='mbl_num'
                                    type="tel"
                                    placeholder=""
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-1/2 max-w-xs">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select
                                    defaultValue={'DEFAULT'}

                                    className="select text-black   w-full max-w-xs  mb-4" >

                                    <option value="DEFAULT" disabled >Select</option>
                                    <option >A(+ve)</option>
                                    <option >A(-ve)</option>
                                    <option >B(+ve) </option>
                                    <option>B(-ve)</option>

                                    <option >O(+ve)</option>
                                    <option >O(-ve)</option>
                                    <option >AB(+ve)</option>
                                    <option >AB(-ve)</option>

                                </select>
                                <br></br>

                            </div>
                        </div>

                        <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                    </form>


                </div>

            </div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Address Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >
                        <div className='flex justify-start gap-5 mt-5 mb-3'>
                            <div className="form-control w-full max-w-xs ">

                                <input
                                    name='district'
                                    type="text"
                                    placeholder="District"
                                    className="input input-bordered w-full max-w-xs"
                                />

                            </div>

                            <div className="form-control w-1/2 max-w-xs ">

                                <input
                                    name='thana'
                                    type="text"
                                    placeholder="Thana"
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>
                            <div className="form-control w-1/2 max-w-xs ">

                                <input
                                    name='po'
                                    type="text"
                                    placeholder="PostOffice"
                                    className="input input-bordered w-full max-w-xs"

                                />

                            </div>


                        </div>

                        <div className="form-control w-full">

                            <input
                                name='house'
                                type=""
                                placeholder="Type your house no/Road/Village"
                                className="input input-bordered "

                            />
                            <br></br>

                        </div>

                        <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                    </form>


                </div>

            </div>
            <div className="collapse collapse-plus border">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Career Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >
                        <div >
                            <div className="form-control w-full  mt-3 ">


                                <textarea
                                    name='objective'
                                    type="text"
                                    className="textarea textarea-bordered w-full mb-3" placeholder="Career Objective"></textarea>

                            </div>

                            <div className="flex  gap-16">
                                <div className="form-control w-1/2 max-w-xs ">

                                    <input
                                        name='expectedsalary'
                                        type="text"
                                        placeholder="Expected Salary"
                                        className="input input-bordered w-full mb-3"

                                    />

                                </div>
                                <div className="form-control w-1/2 max-w-xs ">

                                    <input
                                        name='jobnature'
                                        type="text"
                                        placeholder="Available for (Job Nature) "
                                        className="input input-bordered w-full mb-3"

                                    />

                                </div>
                            </div>


                        </div>



                        <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                    </form>


                </div>

            </div>
        </div>
    );
};

export default PersonalDetails;