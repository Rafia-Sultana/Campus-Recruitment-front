import React from 'react'

const Modal = ({ r }) => {
    console.log(r)
   
    return (
        <>
            <input type="checkbox" id={`my-modal-${r._id}`} className="modal-toggle " />
       
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative " htmlFor="">
                    <h3 className="text-lg font-bold">{r?.companyname}</h3>
                    <h3><span className="font-medium mr-1">Publish Year:</span> {r.publishyear}</h3>
                    <h3><span className="font-medium mr-1">Company URL:</span>   <span className='italic'>{r.url}</span></h3>
                    <h3><span className="font-medium mr-1">Company Address:</span> {r.companyaddress}</h3>
                    <h3 className="font-semibold underline underline-offset-2 mt-3">HR Details</h3>
                    <h3><span className="font-medium mr-1">Name:</span> {r.contactname}</h3>
                    <h3><span className="font-medium mr-1">Name:</span> {r.contactemail}</h3>
                    <h3><span className="font-medium mr-1">Mobile_No:</span> {r.contactmobile}</h3>
                    <h3><span className="font-medium mr-1">Designation:</span> {r.contactdesignation}</h3>
                    <p className="py-4">
                    </p>
                    <div className="modal-action">
                        
                    </div>
                </label>
            </label>

        </>
    )
}

export default Modal