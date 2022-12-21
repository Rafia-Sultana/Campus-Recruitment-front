import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Modal from './Modal';

const RegisteredCompany = () => {
  const [user] = useAuthState(auth);
  const [registeredCompany, setRegisteredCompany] = useState([])
  const [toggle, setToggle] = useState(false)

  const url = `http://localhost:5000/role-user/employee`;
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setRegisteredCompany(data))
  }, [url, toggle])
  const handleDisable = (id) => {
    /* console.log((id) */
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

              <th>Company Name</th>
              <th>Address</th>
              <th>Email</th>
              <th></th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              registeredCompany.map((r, index) => <tr key={index}  >
                <td>{r.companyname}  </td>
                <td>{r.companyaddress}</td>
                <td>{r.email}</td>

                <label htmlFor={`my-modal-${r._id}`} className="btn mt-4">Details</label>


                <Modal r={r} />

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

export default RegisteredCompany; 