import React from 'react';

const FillEduForm = () => {
    return (
        <div>
            {    /*  <div className="overflow-x-auto">
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




                    <div className="flex justify-center">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold ">Upload your CV</span>
                            </label>
                            <input
                                type='file'
                                className=" w-96 h-8" />
                        </div>
                        <div className="divider">OR</div>
                        <div className=" font-semibold text-lg bg-blue-400 text-center ">Make your CV</div>
                    </div>



                </table>
                <input className='btn btn-warning w-full max-w-xs text-white mt-5' type="submit" value="Submit" />
            </div> */}
            <table class="border-separate w-full border border-slate-400 ...">
                <thead>
                    <tr>
                        <th class="border border-slate-300 ...">Levels</th>
                        <th class="border border-slate-300 ...">Board/Universities</th>
                        <th class="border border-slate-300 ...">CGPA</th>
                        <th class="border border-slate-300 ...">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 ...">Msc</td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">Bsc</td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">HSC</td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">SSC</td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                        <td class="border border-slate-300 ..."><input type="text" className="input input-bordered w-full max-w-xs" /></td>
                    </tr>
                </tbody>
            </table>
            <div className="flex w-full mt-8">
                <div className="grid h-20 flex-grow card bg-green-300 rounded-box place-items-center text-lg font-bold">Upload CV</div>
                <div className="divider divider-horizontal">OR</div>
                <div className="grid h-20 flex-grow card bg-blue-300 rounded-box place-items-center text-lg font-bold">Make CV</div>
            </div>

        </div>
    );
};

export default FillEduForm;