import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
 <> 
  {/*heder upper part  */}
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://e7.pngegg.com/pngimages/722/521/png-clipart-flat-design-book-computer-icons-booking-text-booking.png" alt="logo" />
          <h1 className="text-2xl font-bold ms-1 ">BOOK STORE</h1>
        </div>
        {/* logout */}
        <button className='bg-black px-3 py-2 rounded text-white flex border items-center hover:text-black hover:bg-white'><FaPowerOff className='me-2'/> LOGOUT </button>
      </div>
      {/* header lower part */}
      <div className="bg-black p-2">
<marquee>
          <p className="text-white">Welcome ,Admin! You are all set to manage and moniter the system .Let's get to work!</p>
  
</marquee>      </div>
 </>
  )
}

export default AdminHeader