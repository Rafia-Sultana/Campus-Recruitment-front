import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Modal from './Modal';

const RegisteredCompany = () => {
  const [user] = useAuthState(auth);
  const [registeredCompany, setRegisteredCompany] = useState([])

  const url = `http://localhost:5000/role-user/employee`;
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setRegisteredCompany(data))
  }, [url])
  /* console.log(registeredCompany); */
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
                {/* The button to open modal */}
                <label htmlFor={`my-modal-${r._id}`} className="btn mt-4">Details</label>

                {/* Put this part before </body> tag */}
                <Modal r={r} />

                <td><button className='bg-red-500 p-3 rounded'>delete</button></td>

              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCompany;