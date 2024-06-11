import React from 'react'

const FundingHero = () => {
  return (
    <div>
        <div className='max-w-[1140px] w-full mx-auto  font-poppins px-5'>
            <div>
            <h1 className='md:text-[36px] text-[20px] font-semibold text-center'>
            Be a Changemaker: Donate to Our Cause Today!
                </h1>
            </div>

            <div className="relative h-[379px] mt-[40px] rounded-[24px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://miracle.sirv.com/kachem-young-initiative/unsplash_M-4lFg1Xfag.png)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-center p-4">
          Little drops of water make the mighty ocean...
        </h1>
      </div>
    </div>

            <div>
            <p className='md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]'>
            Your donation can create a lasting impact in the lives of those in need. By contributing funds to our organization, you are directly supporting our initiatives for Transformative Education, Driving rural Literacy, Fostering Community Development, and Reducing Inequalities. Every dollar counts and brings us closer to achieving our goal. Join us in making a positive change by donating today. Together, we can create a brighter future for all.
                </p>
            </div>
        

            <form className="max-w-full mx-auto p-4 space-y-4">
      {/* Donation Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Choose a donation amount
        </label>
        <div className="mt-2 flex flex-row md:flex-col space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="donationAmount" value="25" className="form-radio text-[#097895]" />
            <span className="ml-2">$25</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="donationAmount" value="50" className="form-radio text-[#097895]" />
            <span className="ml-2">$50</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="donationAmount" value="100" className="form-radio text-[#097895]" />
            <span className="ml-2">$100</span>
          </label>
        </div>
      </div>

      {/* Custom Donation Amount */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="program" className="block text-sm font-medium text-gray-700">
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
            <option>International Exchange for Persons with Disabilities</option>
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
            <input type="radio" name="donationFrequency" value="monthly" className="form-radio text-[#097895]" />
            <span className="ml-2 text-gray-700">Monthly</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="donationFrequency" value="one-time" className="form-radio text-[#097895]" defaultChecked />
            <span className="ml-2 text-gray-700">One time</span>
          </label>
        </div>
      </div>

      {/* Submit Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-white hover:text-[#097895] hover:border-[#097895] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go to checkout
        </button>
        <button
          type="button"
          className="w-full inline-flex justify-center py-2 px-4 sm:px-8 border border-[#097895] shadow-sm text-sm font-medium rounded-md text-[#097895] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
      </div>
    </form>


        </div>
    </div>
  )
}

export default FundingHero