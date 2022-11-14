import React from 'react';

const Dashboard = () => {
    return (
        <div className="">
            <div className='grid grid-cols-3 gap-4'>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-blue-800">
                        <p className='font-semibold text-lg'>Total Registered Company</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-pink-300 to-fuchsia-500 hover:from-fuchsia-600 hover:to-fuchsia-800">
                        <p className='font-semibold text-lg'>Total Registered Candidate</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-green-300 to-emerald-600 hover:from-emerald-500 hover:to-emerald-800">
                        <p className='font-semibold text-lg'>Total Vacancy</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-rose-300 to-pink-600 hover:from-rose-500 hover:to-pink-800">
                        <p className='font-semibold text-lg'>Total Applied  Job</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-violet-300 to-purple-600 hover:from-violet-500 hover:to-purple-800">
                        <p className='font-semibold text-lg'>Last 7days Applied  Job</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-blue-300 to-indigo-600 hover:from-blue-500 hover:to-indigo-800">
                        <p className='font-semibold text-lg'>Total Vacancy Posted</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-lime-300 to-teal-600 hover:from-lime-500 hover:to-teal-800">
                        <p className='font-semibold text-lg'>Total no. of Application</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-yellow-300 to-amber-600 hover:from-yellow-500 hover:to-amber-800">
                        <p className='font-semibold text-lg'>Total no. of sort listed Apllication</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-red-200 to-orange-600 hover:from-red-400 hover:to-orange-700">
                        <p className='font-semibold text-lg'>Total no. of Rejected Apllication</p>
                        <p></p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;