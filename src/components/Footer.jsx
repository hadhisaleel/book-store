import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Book Store</h2>
          <p className="text-sm leading-6">
            Discover, Create and Share unlimited recipes with the world.
            Your kitchen companion with step-by-step guidance.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
         
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-3">Stay updates with our latest trends</p>
          <div className="flex">
            <input
              className="w-full p-2 rounded-l bg-gray-800 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r text-white">
              Join
            </button>
          </div>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Book Store — All Rights Reserved.</p>
        <div className="flex gap-5 text-xl">
          <FaFacebook className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  )
}

export default Footer