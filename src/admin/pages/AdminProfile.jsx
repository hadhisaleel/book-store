import React from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'
function AdminProfile() {
  return (
    <>
       <AdminHeader/>
    
  <div className="md:grid grid-cols-5">
    <div className="col-span-1">
      <AdminSideBar/>
    </div>
   <div className='col-span-4 p-10'> 
    <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
    <div className="md:grid grid-cols-2 gap-10">
      {/* text */}
      <div className='w-full'>
        <h3 className='text-xl font-bold mb-5'>Welcome to admin setting pannel </h3>
        <p className='text-justify mb-5'>Welcome to BOOK STORE, a complete destination for book lovers. We offer a wide collection of books across various genres including fiction, non-fiction, academics, children’s literature, self-help, biographies, spirituality, and more. Our mission is to make reading accessible, enjoyable, and affordable for everyone.

We provide:
✔ Latest bestsellers & timeless classics
✔ Exclusive author collections
✔ Student-friendly academic & exam-oriented books
✔ Fast and secure delivery
✔ Hassle-free return & customer support

Whether you're a passionate reader, a student, or someone looking for the perfect gift, BOOK STORE delivers the right book for every moment. Dive into a world of stories, knowledge, and imagination — your next favorite read is here!</p>
      </div>
      {/* form */}
      <div className="flex justify-center items-center flex-col my-5 bg-blue-100">
                    {/* image */}
                    <label htmlFor="uploadPImg">
                        <input type="file" name="" id="uploadPImg" hidden/>
                         <img 
            className="w-[200px] h-[200px] rounded-full object-cover mt-5"
            src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/author-brainstorms-idea.jpg"
            alt=""/>
                    </label>
                    <button style={{marginTop:"-20px"}} className='bg-yellow-500 p-2 text-white rounded '><FaPen/></button>
                    {/* name */}
                    <div className="mt-10 mb-3 w-full px-5">
                        <input type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full'/>
                    </div>
                    {/* password */}
                    <div className=" mb-3 w-full px-5">
                        <input type="password" placeholder='New Password' className='border border-gray-200 p-2 rounded w-full'/>
                    </div>
                    <div className=" mb-3 w-full px-5">
                        <input type="password" placeholder='Conform Password' className='border border-gray-200 p-2 rounded w-full'/>
                    </div>
                    
                    {/* button */}
                    <div className="mb-3 flex justify-end px-5 w-full mt-5">
                        <button className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red-600'>RESET</button>
                                                <button className='mx-4 px-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600'>UPDATE</button>

                    </div>

                </div>
    </div>
   </div>
  </div>
    <Footer/>
    </>
  )
}

export default AdminProfile