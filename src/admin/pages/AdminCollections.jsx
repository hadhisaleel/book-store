import React, { useState } from 'react'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import Footer from '../../components/Footer'
function AdminCollections() {
  const [tab,setTab] = useState(1)
  return (
    <>
       <AdminHeader/>
    
  <div className="md:grid grid-cols-5">
    <div className="col-span-1">
      <AdminSideBar/>
    </div>
   <div className='col-span-4 p-10'> 
    <h1 className="my-10 text-center text-3xl font-bold">All Collections</h1>
    {/* tabs */}
    <div className="flex my-5 justify-center items-center">
      <p onClick={()=>setTab(1)} className={tab==1?"cursor-pointer text-xl text-blue-600 border-gray-200 font-bold border-t border-l border-r p-3":"border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
       <p onClick={()=>setTab(2)} className={tab==2?"cursor-pointer text-xl text-blue-600 border-gray-200 font-bold border-t border-l border-r p-3":"border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
    </div>
    {/* tab content */}
    {
      tab==1 &&
      <div className="md:grid grid-cols-4 w-full mt-10">
  {/* dublicate book card div */}
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
     <div className='grid mt-3 w-full'>
        <button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVED</button>
      </div>
     </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
      <div className='grid mt-3 w-full'>
        <button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVED</button>
      </div>
    </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
      <div className='grid mt-3 w-full'>
        <button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVED</button>
      </div>
    </div>
  </div>
  <div className="shadow rounded p-3 mx-4">
    <img width={'300px'} height={'300px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf.webp?ts=1734004864" alt="" />
    <div className="flex justify-center items-center flex-col mt-4">
      <h3 className="text-blue-600 font-bold text-lg">Author</h3>
      <h4 className="text-lg">title</h4>
      <h4>$price</h4>
      <div className='grid mt-3 w-full'>
        <button className='bg-green-600 mt-3 py-2 px-3 text-white'>APPROVED</button>
      </div>
    </div>
  </div>
</div>
    }
    {
      tab==2 &&
      <div className="md:grid grid-cols-3 w-full mt-10">
        {/* duplicate user */}
        <div className="rounded bg-gray-200 p-1 m-2 text-wrap">
          <p className="text-red-600 font-bold">ID :dre4527797ywiub</p>
          <div className="flex items-center text-wrap mt-2">
             {/* user image */}
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://cdn-dlmfn.nitrocdn.com/WjhRAZnhnJlaJhMwVcEPYwfxtpYISNzb/assets/images/optimized/rev-afac40e/booksloveme.com/wp-content/uploads/2020/08/09-10-2022-20-14-18.webp" alt="" />
          {/* content */}
          <div className='ms-5'>
            <h4 className="font-bold text-2xl text-blue-700">Name</h4>
            <p>saleel@gmail.com</p>
          </div>
          </div>
        </div>
        {/* duplicate user */}
        <div className="rounded bg-gray-200 p-1 m-2 text-wrap">
          <p className="text-red-600 font-bold">ID :dre4527797ywiub</p>
          <div className="flex items-center text-wrap mt-2">
             {/* user image */}
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://cdn-dlmfn.nitrocdn.com/WjhRAZnhnJlaJhMwVcEPYwfxtpYISNzb/assets/images/optimized/rev-afac40e/booksloveme.com/wp-content/uploads/2020/08/09-10-2022-20-14-18.webp" alt="" />
          {/* content */}
          <div className='ms-5'>
            <h4 className="font-bold text-2xl text-blue-700">Name</h4>
            <p>saleel@gmail.com</p>
          </div>
          </div>
        </div>
        {/* duplicate user */}
        <div className="rounded bg-gray-200 p-1 m-2 text-wrap">
          <p className="text-red-600 font-bold">ID :dre4527797ywiub</p>
          <div className="flex items-center text-wrap mt-2">
             {/* user image */}
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://cdn-dlmfn.nitrocdn.com/WjhRAZnhnJlaJhMwVcEPYwfxtpYISNzb/assets/images/optimized/rev-afac40e/booksloveme.com/wp-content/uploads/2020/08/09-10-2022-20-14-18.webp" alt="" />
          {/* content */}
          <div className='ms-5'>
            <h4 className="font-bold text-2xl text-blue-700">Name</h4>
            <p>saleel@gmail.com</p>
          </div>
          </div>
        </div>
        {/* duplicate user */}
        <div className="rounded bg-gray-200 p-1 m-2 text-wrap">
          <p className="text-red-600 font-bold">ID :dre4527797ywiub</p>
          <div className="flex items-center text-wrap mt-2">
             {/* user image */}
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://cdn-dlmfn.nitrocdn.com/WjhRAZnhnJlaJhMwVcEPYwfxtpYISNzb/assets/images/optimized/rev-afac40e/booksloveme.com/wp-content/uploads/2020/08/09-10-2022-20-14-18.webp" alt="" />
          {/* content */}
          <div className='ms-5'>
            <h4 className="font-bold text-2xl text-blue-700">Name</h4>
            <p>saleel@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    }
   </div>
  </div>
    <Footer/>
    </>
  )
}

export default AdminCollections