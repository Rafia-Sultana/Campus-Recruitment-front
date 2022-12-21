import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Rejected = () => {
    const [user] = useAuthState(auth)
    /* console.log((user?.uid); */

    const [perRejected, setRejected] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/rejected/${user?.uid}`, {
        })
            .then(res => res.json())
            .then(data => {
                setRejected(data)
            })

    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Expertise</th>
                            <th>Email</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            perRejected.map((per, index) => <tr>
                                <td>{per?.name}</td>
                                <td>{per?.designation}</td>
                                <td>{per?.email}</td>
                                <td>{per?.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Rejected;