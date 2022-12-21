import React from 'react';
import { useEffect,useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [registeredCandidate, setRegisteredCandidate] = useState([])
    const [registeredCompany, setRegisteredCompany] = useState([])
    const [postJobs, setPostJobs] = useState([])
    const [postJobAdmin, setPostJobsAdmin] = useState([])
    const [allCv, setAllCv] = useState([]);
    const [perShortListed, setPerShortListed] = useState([])
    const [candidate, setCandidate] = useState([])
   
    useEffect(() => {
      fetch(`http://localhost:5000/role-user/candidate`).then(res => res.json()).then(data => setRegisteredCandidate(data))
    }, [])
 
  useEffect(() => {
    fetch(`http://localhost:5000/role-user/employee`).then(res => res.json()).then(data => setRegisteredCompany(data))
  }, [])
  
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setPostJobsAdmin(data))
  }, [])
  
  useEffect(() => {
      fetch(`http://localhost:5000/allCvs`)
          .then(res => res.json())
          .then(
              data => {
                  setAllCv(data)

              }
          )
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.uid}`)
        .then(res => res.json())
        .then(data => setPostJobs(data))
}, [])
  
  useEffect(() => {
      fetch(`http://localhost:5000/short-list/${user?.uid}`, {
      })
          .then(res => res.json())
          .then(data => {
              setPerShortListed(data)
          })

  }, [])
  const [perRejected, setRejected] = useState([])
  useEffect(() => {
      fetch(`http://localhost:5000/rejected/${user?.uid}`, {
      })
          .then(res => res.json())
          .then(data => {
              setRejected(data)
          })

  }, [])
  

  const url = `http://localhost:5000/candidates/${user?.email}`;
  useEffect(() => {
      fetch(url).then(res => res.json()).then(data => setCandidate(data[0]))
  }, [url])
    return (
        <div className="">
            <div className='grid grid-cols-3 gap-4'>
             {user?.email && candidate?.role === "admin" &&
                <>
                <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-blue-800">
                    <p className='font-semibold text-lg'>Total Registered Company</p>
                    <p>{registeredCompany.length}</p>
                  
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-pink-300 to-fuchsia-500 hover:from-fuchsia-600 hover:to-fuchsia-800">
                    <p className='font-semibold text-lg'>Total Registered Candidate</p>
                    <p>{registeredCandidate.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-green-300 to-emerald-600 hover:from-emerald-500 hover:to-emerald-800">
                    <p className='font-semibold text-lg'>Total Vacancy</p>
                    <p>{postJobAdmin.length}</p>
                </div>
            </div>
                </>
             }
               {user?.email && candidate?.role === "candidate" &&
                <>
                <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-rose-300 to-pink-600 hover:from-rose-500 hover:to-pink-800">
                    <p className='font-semibold text-lg'>Total Applied  Job</p>
                    <p></p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
            <div className="card-body bg-gradient-to-r from-blue-300 to-indigo-600 hover:from-blue-500 hover:to-indigo-800">
                <p className='font-semibold text-lg'>Total Vacancy Posted</p>
                <p>{postJobAdmin.length}</p>
            </div>
        </div>
                </>
               }
             {user?.email && candidate?.role === "employee" &&
                <>
                <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-blue-300 to-indigo-600 hover:from-blue-500 hover:to-indigo-800">
                    <p className='font-semibold text-lg'>Total Vacancy Posted</p>
                    <p>{postJobs.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-lime-300 to-teal-600 hover:from-lime-500 hover:to-teal-800">
                    <p className='font-semibold text-lg'>Total no. of Application</p>
                    <p>{allCv.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
            <div className="card-body bg-gradient-to-r from-yellow-300 to-amber-600 hover:from-yellow-500 hover:to-amber-800">
                <p className='font-semibold text-lg'>Total no. of sort listed Apllication</p>
                <p>{perShortListed.length}</p>
            </div>
        </div>
        <div className="card w-72 h-32 shadow-xl">
        <div className="card-body bg-gradient-to-r from-red-200 to-orange-600 hover:from-red-400 hover:to-orange-700">
            <p className='font-semibold text-lg'>Total no. of Rejected Apllication</p>
            <p>{perRejected.length}</p>
        </div>
    </div>
         
                </>
             }
            </div>

         
   

        </div>
    );
};

export default Dashboard;