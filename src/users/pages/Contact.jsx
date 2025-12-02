import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Footer from "../../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
  <>
  <Header/>
      <div className="w-full flex flex-col items-center py-12 px-5">
  
        <div className="text-center max-w-[900px] mb-10">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide">Contacts</h2>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
            officia dolorem accusantium, dicta libero magni omnis architecto
            voluptas culpa praesentium ipsum assumenda quae, nihil rerum fugit
            expedita corrupti. Ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
  
        <div className="flex flex-col gap-6 mb-12 lg:flex-row justify-center items-center lg:gap-16 text-center">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-xl" />
            <p className="text-[15px]">123 Main Street, Apt 4B, Arytown, CA 91234</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-xl" />
            <p className="text-[15px]">+91 9874561230</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl" />
            <p className="text-[15px]">Bookstore@gmail.com</p>
          </div>
        </div>
  
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center gap-10">
  
         
          <div className="bg-gray-200 p-7 rounded-md shadow w-full max-w-[460px] mx-auto">
            <h3 className="font-semibold text-lg mb-5 text-center">Send me Message</h3>
  
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 rounded border-2 border-yellow-400 bg-white"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-2 mb-4 rounded bg-white"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 h-28 mb-5 rounded bg-white resize-none"
            ></textarea>
  
            <button className="w-full p-2 bg-gray-800 text-white rounded hover:bg-black tracking-wide transition">
              Send
            </button>
          </div>
  
          <div className="w-full max-w-[460px] h-[350px] rounded overflow-hidden shadow">
            <iframe
              title="map"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?q=kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
  
        </div>
          
      </div>
        <Footer/>
  </>

  );
}

export default Contact
