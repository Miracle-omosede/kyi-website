"use client";
import React from 'react'

const SubscribeNewsletter = () => {
  return (
    <div className="text-white py-6 md:pl-6 px-10 mt-8">
      <div className="max-w-screen-lg mx-auto md:text-right text-left">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-4">Get the latest updates.</p>
        <form className="flex flex-col sm:flex-row md:justify-end md:items-end items-start justify-start space-y-4 ">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-2 rounded w-full sm:w-auto text-gray-800"
          />
          <button 
            type="submit" 
            className="bg-[#FA6642] text-white p-2 rounded hover:bg-white hover:text-[#FA6642] transition-colors border border-[#FA6642]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeNewsletter;
