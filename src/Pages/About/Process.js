import React from "react";
import Fade from 'react-reveal/Fade';
const Process = () =>{
    return(
        <div className="text-white bg-black h-screen">

      {/*text section*/ }
        <div className=" text-center">
        <h1 className="text-5xl pt-20 font-semibold">Our <span className="text-amber-400">Process</span> </h1>
        <p className="mt-4 mx-72">Our process involves focusing on the talent, skills, and experience of an individual as a key indicator of the present and future value that they will bring to any organization.</p>
       </div>
        {/*card section*/ }
        <div className="grid grid-cols-5 m-20" >
      {/*first card section*/ }
        <Fade left>
        <div className="w-52 h-80  bg-gradient-to-r from-sky-500 to-blue-700 rounded-3xl  image-full">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
        <h2 className="card-title text-7xl font-bold">1.</h2>
        <p className="mx-2"><span  className="font-bold text-3xl">DISCOVER</span><br></br>Evidence based approach.</p>
        </div>
        </div>
        </Fade>

          {/*second card section*/ }
          <Fade left>
        <div className="w-52 h-80  bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl  image-full">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
        <h2 className="card-title text-7xl font-bold">2.</h2>
        <p className="mx-1"><span  className="font-bold text-3xl">NETWORK</span><br></br>Building purposeful relationships.</p>
        </div>
        </div>
        </Fade>

          {/*third card section*/ }
           {/*third card section*/ }
        <div className="w-52 h-80  bg-gradient-to-r from-purple-500 to-pink-700 rounded-3xl  image-full">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
        <h2 className="card-title text-7xl font-bold">3.</h2>
         <p className="mx-1"><span  className="font-bold text-3xl">DESIGN</span><br></br>Creating an experience.</p>
        </div>
        </div>
        {/*third card section*/ }

          {/*fourth card section*/ }
          <Fade right>
        <div className="w-52 h-80  bg-gradient-to-r from-emerald-500 to-green-700 rounded-3xl  image-full">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
        <h2 className="card-title text-7xl font-bold">4.</h2>
       <p className="mx-1"><span  className="font-bold text-3xl">DEVELOP</span><br></br>Customized and hybrid talent solutions.</p>
        </div>
        </div>
        </Fade>

        {/*fifth card section*/ }
        <Fade right>
        <div className="w-52 h-80  bg-gradient-to-r from-rose-500 to-red-700 rounded-3xl  image-full">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
        <h2 className="card-title text-7xl font-bold">5.</h2>
        <p className="mx-1"><span  className="font-bold text-3xl">DELIVER</span><br></br>Speed & Clarity.</p>
        </div>
        </div>
        </Fade>


        </div>

        </div>
    )
}
export default Process