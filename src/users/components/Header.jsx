import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebookF, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [dp, setDp] = useState("")
  const [token, setToken] = useState("")
  const [dropDown, setDropDown] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  }, [token])
  const menuBtnClicked = () => {
    setListStatus(!listStatus)
  }
  return (
    <>
      {/* upper part login&title */}
      <div className="grid grid-cols-3 p-3">
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://e7.pngegg.com/pngimages/722/521/png-clipart-flat-design-book-computer-icons-booking-text-booking.png" alt="logo" />
          <h1 className="text-2xl font-bold ms-1 md:hidden">BOOK STORE</h1>
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login */}
        <div className="md:flex justify-end items-center hidden">
          {/* insta,facebook,twitter */}
          <FaInstagram />
          <FaFacebookF className='mx-2' />
          <FaTwitter />
          {/* login btn */}
          {
            !token ?
              <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'>
                <FaUser className='me-2' /> Login</Link>
              :
              <div className="relative inline-block text-left ms-5">
                <button onClick={() => setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" alt="profilepicture" />
                </button>
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
                    <Link className='flex item-center px-4 py-2 text-sm text-gray-700' to={'/user/profile'}><FaAddressCard className='me-2' /> Profile</Link>
                    <button className='flex item-center px-4 py-2 text-sm text-gray-700'><FaPowerOff className='me-2' /> Logout</button>

                  </div>}
              </div>
          }
        </div>

      </div>
      {/* lower part -link&menu+login btn */}

      <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
        {/* div menu bar- login btn in mobile sreen */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          {/* menu bar */}
          <button onClick={menuBtnClicked} className='cursor-pointer'><FaBars /></button>
          {/* login link */}
{
            !token ?
              <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'>
                <FaUser className='me-2' /> Login</Link>
              :
              <div className="relative inline-block text-left ms-5">
                <button onClick={() => setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png" alt="profilepicture" />
                </button>
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
                    <Link className='flex item-center px-4 py-2 text-sm text-gray-700' to={'/user/profile'}><FaAddressCard className='me-2' /> Profile</Link>
                    <button className='flex item-center px-4 py-2 text-sm text-gray-700'><FaPowerOff className='me-2' /> Logout</button>

                  </div>}
              </div>
          }        </div>
        {/* ul  links */}
        <ul className={listStatus ? "flex flex-col" : "md:flex justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} className='md:mx-4'>Home</Link></li>
          <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} className='md:mx-4'>Books</Link></li>
          <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} className='md:mx-4'>Contact</Link></li>

        </ul>

      </nav>

    </>
  )
}

export default Header