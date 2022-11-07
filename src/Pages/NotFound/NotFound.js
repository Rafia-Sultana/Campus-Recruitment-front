import React from 'react'
import notFoundGif from '../../Images/notfound.gif'
const Notfound = () =>{
    return(
        <div className='flex items-center justify-center h-screen w-full'>
<img src={notFoundGif} alt='' />
        </div>
    )
}
export default Notfound;