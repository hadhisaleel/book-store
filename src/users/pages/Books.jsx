import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Books() {

  const [showCategoryList,setShowCategoryList] = useState(false)
const[token,setToken] = useState("")

useEffect(()=>{
  if (sessionStorage.getItem("token")) {
    const userToken = sessionStorage.getItem("token")
    setToken(userToken)
  }
},[])

  return (
    <>
      <Header />
      {/* login  book page  */}
     { token?
      <>
        {/* title and seacrh box */}
        <div className="flex flex-col justify-center items-center my-5">
          {/* bookstrore */}
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          {/* search box */}
          <div className="flex my-5">
            <input placeholder='search by title' type="text" className="border p-2 border-gray-400 w-100" />
            <button className="bg-black text-white p-2">Search</button>
          </div>

        </div>
        {/* booksand filter */}
        <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
          {/* filter title */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Filter</h1>
              <button onClick={()=>setShowCategoryList(!showCategoryList)} className="text-2xl md:hidden"><FaBars /></button>
            </div>
            {/* filter option */}
            <div className={showCategoryList?"block":"md:block hidden"}>
              {/* category 1 */}
              <div className="mt-3">
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all">All</label>
              </div>
              {/* book catogery */}
              <div className="mt-3">
                <input type="radio" name="filter" id="demo" />
                <label htmlFor="demo">Category name</label>
              </div>
            </div>
          </div>
          {/* book row */}
          <div className="col-span-3">
<div className="md:grid grid-cols-4 mt-5 md:mt-0">
  {/* book card div */}
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <Link to={'/books/id/view'} className='bg-black text-white py-2 px-4 mt-2'>View </Link>
    </div>
  </div>
  {/* book card div */}
   <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <Link to={'/books/id/view'} className='bg-black text-white py-2 px-4 mt-2'>View </Link>
    </div>
  </div>
  {/* book card div */}
   <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <Link to={'/books/id/view'} className='bg-black text-white py-2 px-4 mt-2'>View </Link>
    </div>
  </div>
  {/* book card div */}
   <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <Link to={'/books/id/view'} className='bg-black text-white py-2 px-4 mt-2'>View </Link>
    </div>
  </div>
</div>
          </div>
        </div>


      </>
      :
      
      <div className='w-full h-screen flex justify-center items-center flex-col'>
{/*without login book page */}
<img src="https://media.lordicon.com/icons/wired/gradient/94-lock-unlock.gif" alt="lock screen" />
<p className='text-xl font-bold my-5'>Please <Link className='underline text-blue-600' to={'/login'}>Login</Link> to Explore more!!</p>
      </div>
      }
      
      <Footer />
    </>
  )
}

export default Books