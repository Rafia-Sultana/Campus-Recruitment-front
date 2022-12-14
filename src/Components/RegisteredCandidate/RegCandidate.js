import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const RegisteredCandidate = () => {
  const [user] = useAuthState(auth);
  const [registeredCandidate, setRegisteredCandidate] = useState([])

  const url = `http://localhost:5000/role-user/candidate`;
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setRegisteredCandidate(data))
  }, [url])
  /* console.log(registeredCompany); */
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


                <td><button className='bg-red-500 p-3 rounded'>delete</button></td>

              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCandidate;