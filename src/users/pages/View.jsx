import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye, FaRupeeSign, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function View() {
  const [modalStatus,setModalstatus] = useState(false)

  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className="shadow border p-5 border-gray-400">
        <div className="md:grid grid-cols-4 gap-x-10">
          {/* image */}
          <div className="col-span-1">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />

          </div>
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className="text-2xl font-black"> Book Title</h1>
              <button onClick={()=>setModalstatus(true)} className="text-gray-400"><FaEye/></button>
            </div>
            <p className="my-3 text-blue-700">-Author</p>
            <div className="md:grid grid-cols-3 gap-5 my-10">
              <p className="font-bold">Publisher :</p>
                            <p className="font-bold">Language :</p>
              <p className="font-bold">No of pages :</p>
              <p className="font-bold">Original Price :</p>
              <p className="font-bold">IBNS :</p>
              <p className="font-bold">Catogory :</p>
              <p className="font-bold">Seller :</p>

            </div>
            <div className="md:my-10 my-4">
              <p className="font-bold text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ratione error repudiandae quam vitae quia commodi quisquam nam, quos, ullam, sint deleniti. Qui, odio aliquam? Dignissimos reiciendis voluptates accusamus facere.
                Error quidem qui quod impedit labore. Iusto recusandae, dolor nobis architecto laboriosam culpa voluptatibus doloremque deserunt natus qui eum temporibus aspernatur blanditiis quae id at! Iusto amet vitae excepturi a.
              </p>

            </div>
            <div className="flex justify-end">
              <Link to={'/books'} className='bg-blue-700 p-2 text-white flex items-center rounded'> <FaBackward className='me-2'/>Back</Link>
                            <button className='mx-2 bg-green-700 p-2 text-white flex items-center rounded'> <FaRupeeSign className='me-2'/>300</button>


            </div>
          </div>
        </div>
      </div>
    </div>

    {/* modal */}
{ modalStatus &&
   <div onClick={()=>setModalstatus(false)} className="relative z-10">
      <div  className="bg-gray-500/75 fixed inset-0">
           <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white rounded-2xl md:w-250 w-100">
              {/* modal title */}
              <div onClick={()=>setModalstatus(false)} className="bg-black text-white p-3 flex justify-between items-center">
                <h3>Books Image</h3>
                < FaX/>
              </div>
              {/* modal body */}
              <div className="relative p-5">
                <p className='text-blue-600 flex items-center'> <FaCamera className='me-2'/> Camera click of the book in the hand of Seller</p>
                {/* book image in row */}
                <div className="md:flex flex-wrap my-4">
                  <img className='md:w-75 w-25 md:me-2 mb-3 mb:mb-0' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
                  
                </div>
              </div>
            </div>
           </div>
      </div>
    </div>}
    <Footer/>
    </>
  )
}

export default View