import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SortListed = () => {
    const [user] = useAuthState(auth)
    const [perShortListed, setPerShortListed] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/short-list/${user?.uid}`, {
        })
            .then(res => res.json())
            .then(data => {
                setPerShortListed(data)
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
                            perShortListed.map((per, index) => <tr>
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
export default SortListed;