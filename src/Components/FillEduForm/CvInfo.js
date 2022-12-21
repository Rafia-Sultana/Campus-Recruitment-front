import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CvInfo = () => {
    const [cv, setCv] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cv')
            .then(res => res.json())
            .then(
                data => {
                    // console.log((data)
                    setCv(data)
                }
            )
    }, [])


    return (
        <div>
            <div className="">



                {

                    cv.map((c, index) => <div key={index} className='mx-32'>
                        <div className='text-xl text-center'>
                            <h1 className='font-bold '>{c.name}</h1>
                            <h3 className='font-semibold'>{c.title}</h3>
                        </div>
                        <div className="flex justify-center gap-2 text-blue-600">
                            <a href={c.linkdin}>linkdin</a> |
                            <a href={c.github}>Github</a> |
                            <a href={c.portfolio}>portfolio</a>
                        </div>
                        <div className="flex justify-center gap-2">
                            <h1>{c.email}</h1>  |
                            <h1>{c.phone}</h1> |
                            <h1>{c.location}</h1>
                        </div>
                        <hr className=" mx-12 h-px bg-black border-0 dark:bg-gray-700" />
                        <div className="">
                            <h1 className='font-semibold text-lg'>CARRER OBJECTIVES</h1>
                            <h1>{c.obj}</h1>

                            <div className="my-4">
                                <h1 className='font-semibold text-lg'>SKILLS</h1>
                                <h1><span className='font-medium'>Languages::</span>  {c.language}</h1>
                                <h1><span className='font-medium'>Technologies::</span>  {c.technology} </h1>
                                <h1><span className='font-medium'>Tools::</span>  {c.tools} </h1>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='font-semibold text-lg'>PROJECTS</h1>
                            <div className="flex gap-2">
                                <h1>project Name: {c.projectName}</h1> | <a href={c.projectLink} className='text-blue-600'>Live link</a>
                            </div>
                            <li>{c.description}</li>
                        </div>
                        <div className="my-4">
                            <h1 className='font-semibold text-lg'>Education :: {c.education}  </h1>
                        </div>
                    </div>)
                }





            </div>


        </div>
    );
};

export default CvInfo;