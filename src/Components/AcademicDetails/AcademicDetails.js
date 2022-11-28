import React from 'react';

const AcademicDetails = () => {
    return (
        <div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Academic Details</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >
                        <div className=''>
                            <div className="grid grid-cols-2 gap-4 my-3">
                                <div className="form-control ">

                                    <input
                                        name='levelofeducation'
                                        type="text"
                                        placeholder="Level Of Education"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='degreetitle'
                                        type="text"
                                        placeholder="Exam/Degree Title"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>

                            <div className="form-control  ">

                                <input
                                    name='majorgroup'
                                    type="text"
                                    placeholder="Major Group"
                                    className="input input-bordered w-4/6 mb-3"

                                />

                            </div>
                            <div className="form-control ">

                                <input
                                    name='instituename'
                                    type=""
                                    placeholder="Institue Name"
                                    className="input input-bordered "

                                />
                                <br></br>

                            </div>
                            <div className="grid grid-cols-2 gap-4 ">
                                <div className="form-control ">

                                    <input
                                        name='result'
                                        type="text"
                                        placeholder="Result"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='cgpa'
                                        type="text"
                                        placeholder="CGPA"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-4 my-3">
                                <div className="form-control ">

                                    <input
                                        name='scale'
                                        type="text"
                                        placeholder="Scale"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='yearofpassing'
                                        type="text"
                                        placeholder="Year of Passing"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>



                        </div>



                        <input className='btn btn-warning w-full max-w-xs text-white' type="submit" value="save" />
                    </form>


                </div>

            </div>
            <div className="collapse collapse-plus border mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-400 border  text-primary-content ">
                    <p>Training Summary</p>
                </div>
                <div className="collapse-content text-black text-primary-content ">

                    <form >
                        <div className=''>
                            <div className="grid grid-cols-2 gap-4 my-3">
                                <div className="form-control ">

                                    <input
                                        name='trainingtitle'
                                        type="text"
                                        placeholder="Training Title"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='country'
                                        type="text"
                                        placeholder="Country"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>


                            <div className="form-control ">

                                <input
                                    name='instituenametraing'
                                    type=""
                                    placeholder="Institue Name "
                                    className="input input-bordered "

                                />
                                <br></br>

                            </div>
                            <div className="grid grid-cols-2 gap-4 ">
                                <div className="form-control ">

                                    <input
                                        name='trainingyear'
                                        type="text"
                                        placeholder="Training Year"
                                        className="input input-bordered"
                                    />

                                </div>

                                <div className="form-control ">

                                    <input
                                        name='duration'
                                        type="text"
                                        placeholder="Duration"
                                        className="input input-bordered "

                                    />

                                </div>

                            </div>

                            <div className="form-control ">

                                <input
                                    name='location'
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered w-1/2 my-3"
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

export default AcademicDetails;