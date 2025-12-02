import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  const [viewPassword,setViewPassword] = useState(false)
//  store data from  form
 const[userDetails,setUserDetails] = useState(false)
 
 
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/auth-bg.jpg)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex flex-col justify-center items-center my-5">
           <div style={{width:'100px',height:'100px',borderRadius:'50%'}} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl'/>
           </div>
           <h2 className="text-2xl">{insideRegister?"Register":"Login"}</h2>
           <form className="my-3 w-full">
            {/* username */}
            {
              insideRegister &&
                          <input placeholder='User Name' type="text" className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />

            }
            {/* email */}
            <input placeholder='Email Id' type="text" className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />
            {/* password */}
<div className='flex items-center'>
                          <input placeholder='Password' type={viewPassword ? "text" : "password"} className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />
                                               {   viewPassword ?
                                                   <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px'}}/>
:
                          <FaEye onClick={()=>setViewPassword(!viewPassword)}   className='text-gray-400 cursor-pointer' style={{marginLeft:'-30px'}}/>
                          }

</div>
            {/* forget password */}
{
  !insideRegister &&
  <div className="flex justify-between mb-5">
  <p className="text-xs text-orange-300">*Never share your password with others</p>
  <button className="text-xs underline">Forget Password</button>
  </div>
}
            {/* login btn/register btn */}
        <div className='text-center'>
              {
                insideRegister ?
                <button type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                :
                <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
  
              }
        </div>
        {/* google authentication */}
        <div className="my-5 text-center">
          {
            insideRegister ?
              <p className="text-blue-600">Alreary a user ? <Link className='underline ms-5' to={'/login'}> Login</Link></p>
            :
                          <p className="text-blue-600">Are you new a user ? <Link className='underline ms-5' to={'/register'}> Register</Link></p>

          }
        </div>
           </form>
        </div>
      </div>
    </div>
  )

  function newFunction() {
    return "Login"
  }
}

export default Auth