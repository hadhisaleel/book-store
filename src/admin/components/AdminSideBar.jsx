import React from 'react'
import {  FaHome } from 'react-icons/fa'
import { FaBookJournalWhills, FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
             <div className='my-10 flex justify-center items-center'>
                  <img 
              className="w-[100px] h-[100px] rounded-full object-cover"
              src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/author-brainstorms-idea.jpg"
              alt=""/>
             </div>
             {/* name */}
             <h1 className="text-2xl font-bold mb-5">Name</h1>
             {/* links */}
             <div className="mt-10 flex flex-col justify-center items-center">
              <div className="mb-3">
                <Link className='flex items-center' to={'/admin/home'}><FaHome className='me-2'/>Dashboard</Link>
              </div>
               <div className="mb-3">
                <Link className='flex items-center' to={'/admin/resourse'}><FaBookJournalWhills className='me-2'/>Resourse</Link>
              </div>
               <div className="mb-3">
                <Link className='flex items-center' to={'/admin/profile'}><FaGears className='me-2'/>Settings</Link>
              </div>
             </div>


    </div>
  )
}

export default AdminSideBar