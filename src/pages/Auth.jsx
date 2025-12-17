import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function Auth({ insideRegister }) {
  const navigate = useNavigate()
  const [viewPassword, setViewPassword] = useState(false)
  //  store data from  form
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })
  console.log(userDetails);

  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (email && password && username) {
      // toast.success("API CALL")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Register successfuly...  please login to bookstore!!`)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/login')
        } else {
          console.log(result);

          toast.error("something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      toast.info("please fill the form completely")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
      // toast.success("API CALL")
      try {
        // api call
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("login success")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(() => {
            if (result.data.users.role=="admin") {
              navigate('/admin/home')
            } else {
              navigate('/')
            }
          }, 2500)
        } else if (result.status == 401 || result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("Something went wrong!!")
          setUserDetails({ username: "", email: "", password: "" })

        }

      } catch (err) {
        console.log(err);

      }
    } else {
      toast.info("please fill the form completely")
    }
  }

  const handleGoogleLogin = async (credentialResponse)=>{
 
    console.log("Inside HandleGoogle login");
console.log(credentialResponse);
const decode = jwtDecode(credentialResponse.credential)
  console.log(decode);
    
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/auth-bg.jpg)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className="text-3xl text-center font-bold">BOOK STORE</h1>
        <div style={{ width: '400px' }} className="bg-black text-white p-5 flex flex-col justify-center items-center my-5">
          <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl' />
          </div>
          <h2 className="text-2xl">{insideRegister ? "Register" : "Login"}</h2>
          <form className="my-3 w-full">
            {/* username */}
            {
              insideRegister &&
              <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} placeholder='User Name' type="text" className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />

            }
            {/* email */}
            <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder='Email Id' type="text" className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />
            {/* password */}
            <div className='flex items-center'>
              <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' type={viewPassword ? "text" : "password"} className="bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5" />
              {viewPassword ?
                <FaEyeSlash onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px' }} />
                :
                <FaEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{ marginLeft: '-30px' }} />
              }

            </div>
            {/* forget password */}
            {
              
              <div className="flex justify-between mb-5">
                <p className="text-xs text-orange-300">*Never share your password with others</p>
{!insideRegister && <button className="text-xs underline">Forget Password</button>
}              </div>
            }
            {/* login btn/register btn */}
            <div className='text-center'>
              {
                insideRegister ?
                  <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>

              }
            </div>
            {/* google authentication */}
            <div className="text-center my-5 ">
              {
                !insideRegister && <p>----------------or---------------</p>
              }
              {
                !insideRegister &&
                <div className='my-5 flex justify-center items-center w-full'>
                  <GoogleLogin
  onSuccess={credentialResponse => {
    handleGoogleLogin(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
                </div>
              }
            </div>

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
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

    </div>
  )

  function newFunction() {
    return "Login"
  }
}

export default Auth