import React from 'react';

const Dashboard = () => {
    return (
        <div className="">
            <div className='flex justify-between'>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-blue-800">
                        <p className='font-semibold text-lg'>Total Registered Company</p>
                        <p></p>
                    </div>
                </div>
                <div className="card w-72 h-32 shadow-xl">
                    <div className="card-body bg-gradient-to-r from-pink-300 to-fuchsia-500 hover:from-fuchsia-500 hover:to-fuchsia-800">
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
            </div>



        </div>
    );
};

export default Dashboard;