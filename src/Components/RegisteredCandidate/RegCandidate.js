import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const RegisteredCandidate = () => {
  const [user] = useAuthState(auth);
  const [registeredCandidate, setRegisteredCandidate] = useState([])

  const [toggle, setToggle] = useState(false)

  const url = `http://localhost:5000/role-user/candidate`;
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setRegisteredCandidate(data))
  }, [url, toggle])
  const handleDisable = (id) => {
    const dlt = `http://localhost:5000/role-user/delete/${id}`
    fetch((dlt),
      { method: 'DELETE' })
      .then()
      ;
    setToggle(!toggle)
  }
  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>

              <th> Name</th>

              <th>Email</th>
              <th></th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              registeredCandidate.map((r, index) => <tr key={index}  >
                <td>{r.name}  </td>

                <td>{r.email}</td>
                <td></td>


                <td><button onClick={() => handleDisable(r._id)}
                  className='bg-red-500 p-3 rounded'>disabled</button></td>

              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCandidate; 