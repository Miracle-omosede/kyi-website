"use client"
import React, { useState } from 'react';
import Footer from '../Footer/Footer';

const SponsorshipHero = () => {
  const [showModal, setShowModal] = useState(false);
  const accountNumber = "1234567890"; // Replace with your actual account number
  const accountName = "Kachem Young Initiative."; // Replace with your organization's name

  const bankName = "Zenith Bank Plc.";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied to clipboard");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
            <div className='flex flex-col'>
        <div className='md:h-[150px] w-full flex items-center justify-center bg-[#CEE4EA] py-[40px] md:px-[60px] px-5'>
            <p className='text-black text-[20px] md:text-[24px] font-semibold text-center font-poppins'>
            In Ebonyi, a significant number of children are out of school due to unaffordable fees and materials,<br className='md:block hidden'/> surpassing those enrolled in any organized education.
            </p>
        </div>

        <div className='max-w-[1140px] w-full mx-auto mt-[120px] font-poppins px-5'>
            <div>
                <h1 className='md:text-[36px] text-[20px] font-semibold text-center'>
                Education is the Greatest Gift a Society can Bequeath to its Youth
                </h1>

                <p className='md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]'>
                Embark on a life-changing journey of empowerment and opportunity! Our NGO believes in the transformative power of education and invites you to join our student sponsorships program. By sponsoring a student, you become a beacon of hope, unlocking doors that lead to brighter futures. Witness the incredible impact of your support as you provide access to education, empowering young minds to break free from the cycle of poverty. Together, let&apos;s rewrite destinies, nurture dreams, and create a ripple effect that will resonate for generations. Sponsor a student today and be part of something extraordinary. <br/><br/>Join us in making education the catalyst for change. Start by filling the form below - 
                </p>
            </div>

            <form className="max-w-full mx-auto p-4 my-[40px] space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              {/* User icon */}
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

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">
              {/* Mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26c.44.3 1.01.3 1.45 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Sponsor Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
          >
            <option>Choose a category</option>
            <option>Individual</option>
            <option>Company/Organisation</option>
            <option>Social Group or Club</option>
            <option>Government or Government related Institutions</option>
            <option>Religious Institution</option>
          </select>
        </div>

        <div>
          <label htmlFor="sponsorName" className="block text-sm font-medium text-gray-700">
            Sponsor Name
          </label>
          <input
            type="text"
            name="sponsorName"
            id="sponsorName"
            className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="How much are you putting into the sponsorship"
            className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="recipients" className="block text-sm font-medium text-gray-700">
            Recipients
          </label>
          <input
            type="text"
            name="recipients"
            id="recipients"
            placeholder="How many students will you be willing to sponsor"
            className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div>
        <label htmlFor="aim" className="block text-sm font-medium text-gray-700">
          Aim of Sponsor
        </label>
        <textarea
          id="aim"
          name="aim"
          rows="4"
          placeholder="Describe the aim of the sponsor..."
          className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
        />
      </div>

      <div>
        <label htmlFor="criteria" className="block text-sm font-medium text-gray-700">
          Sponsorship Criteria
        </label>
        <input
          type="text"
          name="criteria"
          id="criteria"
          placeholder="What are the criteria or requirements for awarding this sponsorship?"
          className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
        />
      </div>

      <div className="flex justify-center sm:justify-end">
        <button
             type="button"
             onClick={() => setShowModal(true)}
          className="w-full sm:w-auto inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-[#022F3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>

    <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
          For further enquiry about sponsorships, please send us an email at<a href="mailto:kachemyounginitiative@gmail.com" target="_blank" className="text-secondary"> kachemyounginitiative@gmail.com</a> 
            </p>
          </div>
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
            <h2 className="text-xl font-semibold mb-4 font-poppins">Account Information</h2>
            <div className="flex items-center justify-between border-2 p-4 rounded-xl space-x-2 mb-4 cursor-pointer" onClick={handleCopy}>
              <span className='text-secondary'>{accountNumber}</span>
              <button  className="text-gray-500 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>

              </button>
            </div>
            <p className='text-md'>{accountName}</p>
            <p className='text-md font-semibold'>{bankName}</p>
            <span className='text-xs'>Send payment reciepts to our <a href='#' className='text-teal-700 underline'>
          WhatsApp Number</a> for confirmation and we will reach out to you</span>
          </div>

          
        </div>
      )}

    
    <Footer/>
    </div>
  )
}

export default SponsorshipHero;