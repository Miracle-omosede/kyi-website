"use client"
import React, { useState } from 'react';
import Footer from '../Footer/Footer';

const FundingHero = () => {
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
      <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5">
        <div>
          <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
            Be a Changemaker: Donate to Our Cause Today!
          </h1>
        </div>

        <div
          className="relative h-[379px] mt-[40px] rounded-[24px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://miracle.sirv.com/kachem-young-initiative/unsplash_M-4lFg1Xfag.png)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-center p-4">
              Little drops of water make the mighty ocean...
            </h1>
          </div>
        </div>

        <div>
          <p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">
            Your donation can create a lasting impact in the lives of those in
            need. By contributing funds to our organization, you are directly
            supporting our initiatives for Transformative Education, Driving
            rural Literacy, Fostering Community Development, and Reducing
            Inequalities. Every dollar counts and brings us closer to achieving
            our goal. Join us in making a positive change by donating today.
            Together, we can create a brighter future for all.
          </p>
        </div>

        <form className="max-w-full mx-auto p-4 space-y-4 my-[40px]">
          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose a donation amount
            </label>
            <div className="mt-2 flex flex-row md:flex-col space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="donationAmount"
                  value="25"
                  className="form-radio text-[#097895]"
                />
                <span className="ml-2">$25</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="donationAmount"
                  value="50"
                  className="form-radio text-[#097895]"
                />
                <span className="ml-2">$50</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="donationAmount"
                  value="100"
                  className="form-radio text-[#097895]"
                />
                <span className="ml-2">$100</span>
              </label>
            </div>
          </div>

          {/* Custom Donation Amount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Enter a custom donation amount
              </label>
              <input
                type="text"
                name="customAmount"
                id="customAmount"
                className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="program"
                className="block text-sm font-medium text-gray-700"
              >
                Program
              </label>
              <select
                id="program"
                name="program"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
              >
                <option>Literacy Drive</option>
                <option>Health and Wellness Campaign</option>
                <option>CDAP</option>
                <option>Brave Voices</option>
                <option>International Womens Day</option>
                <option>
                  International Exchange for Persons with Disabilities
                </option>
              </select>
            </div>
          </div>

          {/* Donation Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose a donation frequency
            </label>
            <div className="mt-2 flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="donationFrequency"
                  value="monthly"
                  className="form-radio text-[#097895]"
                />
                <span className="ml-2 text-gray-700">Monthly</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="donationFrequency"
                  value="one-time"
                  className="form-radio text-[#097895]"
                  defaultChecked
                />
                <span className="ml-2 text-gray-700">One time</span>
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
                      type="button"
                      onClick={() => setShowModal(true)}
              className="w-full transition ease-in-out inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-white hover:text-[#097895] hover:border-[#097895] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#097895]"
            >
              Go to checkout
            </button>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-full inline-flex justify-center py-2 px-4 sm:px-8 border border-[#097895] shadow-sm text-sm font-medium rounded-md text-[#097895] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#097895]"
            >
              Cancel
            </button>
          </div>
        </form>

        <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
          For further enquiry about donations or to track the status of a donation made, please send us an email at {" "}
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
          WhatsApp Number</a> for verification</span>
          </div>

          
        </div>
      )}


      <Footer/>
    </div>
  );
}

export default FundingHero