import React from 'react'
import Footer from '../Footer/Footer';

const SponsorshipHero = () => {
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
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-[#022F3A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>

    <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
         For further enquiry about any form of partnership, please send us an email at <a href="mailto:kachemyounginitiative@gmail.com" target="_blank" className="text-secondary"> kachemyounginitiative@gmail.com</a> 
            </p>
          </div>
        </div>

        
    </div>
    
    <Footer/>
    </div>
  )
}

export default SponsorshipHero;