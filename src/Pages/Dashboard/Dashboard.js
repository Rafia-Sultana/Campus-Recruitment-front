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
  const [historyofAppliedJob, setHistoryofAppliedJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/percv/${user?.email}`, {
        })
            .then(res => res.json())
            .then(data => {
                setHistoryofAppliedJob(data)
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
                <div className="card-body bg-gradient-to-r from-cyan-200 to-blue-300 hover:from-blue-300 hover:to-blue-400">
                    <p className='font-semibold text-lg'>Total Registered Company</p>
                    <p className='font-bold text-lg'>{registeredCompany.length}</p>
                  
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-pink-200 to-fuchsia-300 hover:from-fuchsia-300 hover:to-fuchsia-400">
                    <p className='font-semibold text-lg'>Total Registered Candidate</p>
                    <p className='font-bold text-lg'>{registeredCandidate.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-green-200 to-emerald-300 hover:from-emerald-300 hover:to-emerald-400">
                    <p className='font-semibold text-lg'>Total Vacancy</p>
                    <p className='font-bold text-lg'>{postJobAdmin.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
            <div className="card-body bg-gradient-to-r from-lime-200 to-teal-300 hover:from-lime-300 hover:to-teal-400">
                <p className='font-semibold text-lg'>Total no. of Application</p>
                <p className='font-bold text-lg'>{allCv.length}</p>
            </div>
        </div>
                </>
             }
               {user?.email && candidate?.role === "candidate" &&
                <>
                <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-rose-200 to-pink-300 hover:from-rose-300 hover:to-pink-400">
                    <p className='font-semibold text-lg'>Total Applied  Job</p>
                    <p className='font-bold text-lg'>{historyofAppliedJob.length}</p>
                </div>
            </div>
            <div className="card w-72 h-32 shadow-xl">
            <div className="card-body bg-gradient-to-r from-blue-200 to-indigo-300 hover:from-blue-300 hover:to-indigo-400">
                <p className='font-semibold text-lg'>Total Vacancy Posted</p>
                <p className='font-bold text-lg'>{postJobAdmin.length}</p>
            </div>
        </div>
                </>
               }
             {user?.email && candidate?.role === "employee" &&
                <>
                <div className="card w-72 h-32 shadow-xl">
                <div className="card-body bg-gradient-to-r from-blue-200 to-indigo-300 hover:from-blue-300 hover:to-indigo-400">
                    <p className='font-semibold text-lg'>Total Vacancy Posted</p>
                    <p className='font-bold text-lg'>{postJobs.length}</p>
                </div>
            </div>
           
            <div className="card w-72 h-32 shadow-xl">
            <div className="card-body bg-gradient-to-r from-yellow-200 to-amber-300 hover:from-yellow-300 hover:to-amber-400">
                <p className='font-semibold text-lg'>Total no. of sort listed Aplication</p>
                <p className='font-bold text-lg'>{perShortListed.length}</p>
            </div>
        </div>
        <div className="card w-72 h-32 shadow-xl">
        <div className="card-body bg-gradient-to-r from-red-200 to-orange-300 hover:from-red-300 hover:to-orange-400">
            <p className='font-semibold text-lg'>Total no. of Rejected Aplication</p>
            <p className='font-bold text-lg'>{perRejected.length}</p>
        </div>
    </div>
         
                </>
             }
            </div>

         
   

        </div>
    );
};

export default Dashboard;