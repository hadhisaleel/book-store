import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
function Edii() {
    const[offcanvasStatus,setOffcanvasStatus] =useState(false)
  return (
    <div>
        <button onClick={()=>setOffcanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600 '>EDIT <FaEdit className='ms-3'/></button>
        {/* offcanvs */}
        {
            offcanvasStatus &&
            <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
            </div>
            <div className="bg-white h-full z-52 w-90 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between text-white">
<h3 className="text-lg">Update Profile</h3>
<button onClick={()=>setOffcanvasStatus(false)}><FaXmark/></button>

                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col my-5">
                    {/* image */}
                    <label htmlFor="uploadPImg">
                        <input type="file" name="" id="uploadPImg" hidden/>
                         <img 
            className="w-[200px] h-[200px] rounded-full object-cover"
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
                    {/* bio */}
                    <div className=" mb-3 w-full px-5">
                        <textarea rows={3} type="text" placeholder='Bio' className='border border-gray-200 p-2 rounded w-full'/>
                    </div>
                    {/* button */}
                    <div className="mb-3 flex justify-end px-5 w-full mt-5">
                        <button className='px-3 py-2 rounded bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red-600'>RESET</button>
                                                <button className='mx-4 px-3 py-2 rounded bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-green-600'>UPDATE</button>

                    </div>

                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Edii