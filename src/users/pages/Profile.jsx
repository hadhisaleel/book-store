import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edii from '../components/Edii'
import SellBook from '../components/SellBook'
import Purchase from '../components/Purchase'
import BookStatus from '../components/BookStatus'

function Profile() {
  const [tab,setTab]= useState(1)

  return (
    <>
      <Header />

      {/* Black Banner */}
      <div className="bg-black h-[200px] w-full"></div>

      {/* Profile Section */}
      <div  className="w-full flex flex-col items-center px-6">

        {/* Profile Image */}
        <div  className="w-[230px] h-[230px] rounded-full bg-white p-3 -mt-28 shadow-md flex justify-center items-center">
          <img 
            className="w-[200px] h-[200px] rounded-full object-cover"
            src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/author-brainstorms-idea.jpg"
            alt=""
          />
        </div>

        {/* Name + Edit Button */}
        <div className="w-full max-w-3xl flex justify-between items-center mt-6">
          <h1 className="text-2xl font-bold flex items-center">
            Username <FaCircleCheck className="text-blue-400 ml-3" />
          </h1>
          <Edii/>
        </div>

        {/* Bio / Introduction */}
        <p className="text-justify max-w-3xl mt-4 mb-12">
          I enjoy creating meaningful digital experiences and solving real-world problems through clean code,
          modern technologies, and creative thinking. I believe in continuous learning and love taking on
          challenges that help me grow both professionally and personally.
        </p>
 </div>
        {/* tabs with content */}

        <div className="md:px-40">
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Sell book</p>
            <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Book status</p>
            <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-1 border-r p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'} >Purchase History</p>
          </div>
          {/* content */}
         { tab==1 &&
          <SellBook/>}
         { tab==2 &&
          <BookStatus/>}
        { tab==3 &&
         <Purchase/>}
        </div>
     

      <Footer />
    </>
  )
}

export default Profile
