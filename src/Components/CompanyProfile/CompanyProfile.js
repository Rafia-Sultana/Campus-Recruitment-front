import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const CompanyProfile = () => {
    const [user] = useAuthState(auth);
    const [company, setCompany] = useState([])

    const url = `http://localhost:5000/candidates/${user?.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setCompany(data[0]))
    }, [url])
    return (
        <div>
            <table class="border-separate border-spacing-2 border border-slate-400 ... mx-10 my-10">
                <thead>
                    <tr>
                        <th class="border border-slate-300 ...">Company Name</th>
                        <th class="border border-slate-300 ...">{company?.companyname}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 ...">publish year</td>
                        <td class="border border-slate-300 ...">{company?.publishyear}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ..."> Addres</td>
                        <td class="border border-slate-300 ...">{company?.companyaddress}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">URL</td>
                        <td class="border border-slate-300 ...">{company?.url}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table class="border-separate border-spacing-2 border border-slate-400 ... mx-10 my-10">
                <thead>
                    <tr>
                        <th class="border border-slate-300 ...">User Name</th>
                        <th class="border border-slate-300 ...">{company?.username}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 ... ">Email</td>
                        <td class="border border-slate-300 ... px-5">{company?.email}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ..."> Contact</td>
                        <td class="border border-slate-300 ...">{company?.contactmobile}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">Designation</td>
                        <td class="border border-slate-300 ...">{company?.contactdesignation}</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 ...">Role</td>
                        <td class="border border-slate-300 ...">{company?.role}</td>
                    </tr>
                </tbody>
            </table>












        </div>
    );
};

export default CompanyProfile;