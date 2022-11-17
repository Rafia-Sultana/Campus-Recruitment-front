import React from 'react';

const FillEduForm = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table border={1} cellPadding={10} className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>Levels</th>
                            <th>Board/University</th>
                            <th >Year</th>
                            <th>CGPA</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th> Msc</th>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        </tr>
                        <tr>
                            <th> Bsc</th>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        </tr>
                        <tr>
                            <th>HSC</th>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        </tr>
                        <tr>
                            <th > SSC</th>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                            <td><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        </tr>


                    </tbody>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Upload your CV</span>
                        </label>
                        <input
                            type='file'
                            className=" w-96 h-8" />
                    </div>
                </table>
                <input className='btn btn-warning w-full max-w-xs text-white mt-5' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default FillEduForm;