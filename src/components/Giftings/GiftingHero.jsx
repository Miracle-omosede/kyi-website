"use client"
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
// import { FaCopy, FaTimes } from 'react-icons/fa';


const GiftingHero = () => {
  const [showModal, setShowModal] = useState(false);
  const accountNumberPound = "0611451973"; // Replace with your actual account number
  const accountNumberUsd = "0611451966"; // Replace with your actual account number
  const accountNumberEuro = "0611451997"; // Replace with your actual account number
  const accountName = "Nkechinyere Melva Uguru"; // Replace with your organization's name

  // const bankName = "Zenith Bank Plc.";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumberPound, accountNumberEuro, accountNumberUsd);
    alert("Account number copied to clipboard");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
            <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5">
        <div>
          <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
          Send a little love with a thoughtful gift
          </h1>
        </div>

        <div>
        <p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">Make someone&apos;s day brighter by sending a meaningful gift that not only brings joy but also supports our mission of creating positive change. Whether it&apos;s a care package, a personalized item, or a symbolic gesture, your gift will make a lasting impact in the lives of those in need. Join us in spreading love, compassion, and hope through your thoughtful gesture. Start sending a gift today and help us make the world a better place, one present at a time.<br/><br/> <b>Delivery Address: No. 5 Chinweike Elom Road<br/>City/State: Abakaliki/Ebonyi State<br/>Country: Nigeria</b>
        </p>
        </div>

        <form className="max-w-full mx-auto my-[40px] p-4 space-y-4">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c-3.86 0-7 1.64-7 4v2h14v-2c0-2.36-3.14-4-7-4z" />
              </svg>
            </span>
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
          />
        </div>
      </div>

      {/* Email and Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26c.44.3 1.01.3 1.45 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
              
                </span>
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+000 000 000 0000"
                className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
            </div>
          </div>
        </div>
  
  
         {/* Sender details */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label
                htmlFor="sender category"
                className="block text-sm font-medium text-gray-700"
              >
                Sender Category
              </label>
              <select
                id="sender category"
                name="sender category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
              >
                <option>Choose a Category</option>
                <option>Individual</option>
                <option>Company</option>
                <option>Group</option>
                <option>Government</option>
                <option>Institution</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="other"
                className="block text-sm font-medium text-gray-700"
              >
                Senders Name
              </label>
              <input
                type="text"
                name="sender name"
                id="sender name"
                placeholder='Name of Individual, Company, Group, Government or Institution'
                className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
            </div>
          </div>
        

        {/* Location */}
        <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <textarea
          id="locaton"
          name="location"
          
          placeholder="Where are the items being sent from?"
          className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
        />
      </div>

      
        {/* Shipping details */}
        <div>
        <label htmlFor="shippingdetails" className="block text-sm font-medium text-gray-700">
        Shipping Details
        </label>
        <textarea
          id="shippingdetails"
          name="shippingdetails"
          
          placeholder="Include any relevant delivery details like shipping tags, waybill numbers, e.t.c"
          className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
        />
      </div>


        

  
          {/* Submit Button */}
          <div className="flex justify-center sm:justify-center">
          <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-white hover:text-[#097895] hover:border-[#097895] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#097895]"
            >
              Submit
            </button>
      </div>
      </form>

      <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
          For further enquiry about items sent or to track the status of a delivery made, please send us an email at {" "}
            <a
              href="mailto:kachemyounginitiative@gmail.com"
              target="_blank"
              className="text-secondary"
            >
              {" "}
              kachemyounginitiative@gmail.com
            </a>
          </p>
        </div>
        </div>

        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center font-poppins justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative mx-5">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            </button>
            <span className='flex border-secondary border p-3 gap-2 rounded-lg bg-[#09799528] text-xs items-center justify-center my-7'>
              <span>
                {/* close button */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
</span>
              <span>sorry our payment gateway is temporarily down, but don&apos;t fret you can make transfer to account number below</span>
            </span>
            <h2 className="text-xl font-semibold mb-4 font-poppins">Account Information</h2>       {/* USD Account */}
           <div>
           <h2 className="text-lg mb-4 font-poppins">
              Account Name: <span>{accountName}</span><br/>
              Bank: GTB-USD
            </h2>
            <div
              className="flex items-center justify-between border-2 p-4 rounded-xl space-x-2 mb-4 cursor-pointer"
              onClick={handleCopy}
            > 
              <span className="text-secondary">{accountNumberUsd}</span>
              <button className="text-gray-500 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </button>
            </div>
            </div>

            {/* USD Account End */}

            {/* Euro Account */}
            <div>
           <h2 className="text-lg mb-4 font-poppins">
              Account Name: <span>{accountName}</span><br/>
              Bank: GTB-EURO
            </h2>
            <div
              className="flex items-center justify-between border-2 p-4 rounded-xl space-x-2 mb-4 cursor-pointer"
              onClick={handleCopy}
            > 
              <span className="text-secondary">{accountNumberEuro}</span>
              <button className="text-gray-500 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </button>
            </div>
            </div>
            {/* Euro Account Ends */}

            {/* Pounds Account */}
            <div>
           <h2 className="text-lg mb-4 font-poppins">
              Account Name: <span>{accountName}</span><br/>
              Bank: GTB-POUND
            </h2>
            <div
              className="flex items-center justify-between border-2 p-4 rounded-xl space-x-2 mb-4 cursor-pointer"
              onClick={handleCopy}
            > 
              <span className="text-secondary">{accountNumberPound}</span>
              <button className="text-gray-500 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
              </button>
            </div>
            </div>
            {/* Pounds Account Ends */}
            <span className="text-xs">
              Send payment reciepts to our{" "}
              
                <a
                  href="mailto:Kachemyounginitiative@gmail.com"
                  target="_blank"
                  className="underline text-primary"
                >
                  mail
                </a>{" "}
                address
              
              for verification
            </span>

          </div>

          
        </div>
      )}

        <Footer/>
    </div>
  )
}

export default GiftingHero;