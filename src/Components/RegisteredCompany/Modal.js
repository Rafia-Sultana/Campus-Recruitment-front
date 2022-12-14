import React from 'react'

const Modal = ({ r }) => {
    console.log(r);
    return (
        <>
            <input type="checkbox" id={`my-modal-${r._id}`} className="modal-toggle" />
            {        /*  <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{r?.email}</h3>
                    <p className="py-4">You've been selected for use Wikipedia for free!</p>
                </div>
            </div>
 */}
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{r?.email}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">okay!</label>
                    </div>
                </label>
            </label>

        </>
    )
}

export default Modal