"use client"
import React,{useState} from 'react'
import Footer from '../Footer/Footer';

// Ebonyi: ['Abakaliki', 'Afikpo', 'Izzi', 'Ezza North', 'Afikpo South', 'Ohaukwu', 'Ebonyi', 'Oniocha', 'Ishielu', 'Ezza South', 'Ikwo', 'Afikpo North', 'Ohaozara', 'Ivo'],


const statesAndCities = {
    Abia: ['Aba', 'Umuahia'],
    Adamawa: ['Yola', 'Mubi'],
    AkwaIbom: ['Uyo', 'Eket'],
    Anambra: ['Awka', 'Onitsha'],
    Bauchi: ['Bauchi', 'Azare'],
    Bayelsa: ['Yenagoa', 'Brass'],
    Benue: ['Makurdi', 'Otukpo'],
    Borno: ['Maiduguri', 'Biu'],
    CrossRiver: ['Calabar', 'Ikom'],
    Delta: ['Asaba', 'Warri'],
    Ebonyi: ['Abakaliki', 'Afikpo', 'Izzi', 'Ezza North', 'Afikpo South', 'Ohaukwu', 'Ebonyi', 'Oniocha', 'Ishielu', 'Ezza South', 'Ikwo', 'Afikpo North', 'Ohaozara', 'Ivo'],
    Edo: ['Benin City', 'Auchi'],
    Ekiti: ['Ado Ekiti', 'Ikere Ekiti'],
    Enugu: ['Enugu', 'Nsukka'],
    Gombe: ['Gombe', 'Kaltungo'],
    Imo: ['Owerri', 'Orlu'],
    Jigawa: ['Dutse', 'Hadejia'],
    Kaduna: ['Kaduna', 'Zaria'],
    Kano: ['Kano', 'Wudil'],
    Katsina: ['Katsina', 'Funtua'],
    Kebbi: ['Birnin Kebbi', 'Argungu'],
    Kogi: ['Lokoja', 'Okene'],
    Kwara: ['Ilorin', 'Offa'],
    Lagos: ['Lagos', 'Ikeja'],
    Nasarawa: ['Lafia', 'Keffi'],
    Niger: ['Minna', 'Suleja'],
    Ogun: ['Abeokuta', 'Ijebu Ode'],
    Ondo: ['Akure', 'Ondo'],
    Osun: ['Oshogbo', 'Ife'],
    Oyo: ['Ibadan', 'Oyo'],
    Plateau: ['Jos', 'Pankshin'],
    Rivers: ['Port Harcourt', 'Bonny'],
    Sokoto: ['Sokoto', 'Tambuwal'],
    Taraba: ['Jalingo', 'Wukari'],
    Yobe: ['Damaturu', 'Potiskum'],
    Zamfara: ['Gusau', 'Kaura Namoda'],
    FCT: ['Abuja'],

      // United States
  California: ['Los Angeles', 'San Francisco', 'San Diego'],
  Texas: ['Houston', 'Dallas', 'Austin'],
  NewYork: ['New York City', 'Buffalo', 'Rochester'],
  Florida: ['Miami', 'Orlando', 'Tampa'],
  Illinois: ['Chicago', 'Springfield', 'Naperville'],
  
  // Canada
  Ontario: ['Toronto', 'Ottawa', 'Mississauga'],
  Quebec: ['Montreal', 'Quebec City', 'Laval'],
  BritishColumbia: ['Vancouver', 'Victoria', 'Surrey'],
  Alberta: ['Calgary', 'Edmonton', 'Red Deer'],
  
  // Australia
  NewSouthWales: ['Sydney', 'Newcastle', 'Wollongong'],
  Victoria: ['Melbourne', 'Geelong', 'Ballarat'],
  Queensland: ['Brisbane', 'Gold Coast', 'Cairns'],
  
  // United Kingdom
  England: ['London', 'Manchester', 'Birmingham'],
  Scotland: ['Edinburgh', 'Glasgow', 'Aberdeen'],
  Wales: ['Cardiff', 'Swansea', 'Newport'],
  NorthernIreland: ['Belfast', 'Derry', 'Lisburn'],
  
  // India
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
  TamilNadu: ['Chennai', 'Coimbatore', 'Madurai'],
  Delhi: ['New Delhi', 'Old Delhi', 'Dwarka'],
  
  // China
  Beijing: ['Chaoyang', 'Haidian', 'Fengtai'],
  Shanghai: ['Pudong', 'Huangpu', 'Jingan'],
  Guangdong: ['Guangzhou', 'Shenzhen', 'Dongguan'],
  
  // Germany
  Bavaria: ['Munich', 'Nuremberg', 'Augsburg'],
  Berlin: ['Berlin'],
  Hamburg: ['Hamburg'],
  Hesse: ['Frankfurt', 'Wiesbaden', 'Darmstadt'],
  
  // France
  IleDeFrance: ['Paris', 'Boulogne-Billancourt', 'Saint-Denis'],
  ProvenceAlpesCoteDAzur: ['Marseille', 'Nice', 'Toulon'],
  AuvergneRhoneAlpes: ['Lyon', 'Grenoble', 'Saint-Etienne'],
  
  // Japan
  Tokyo: ['Tokyo', 'Shinjuku', 'Shibuya'],
  Osaka: ['Osaka', 'Sakai', 'Higashiōsaka'],
  Kyoto: ['Kyoto', 'Uji', 'Kameoka'],
  };
  
const VolunteeringHero = () => {
    const [selectedState, setSelectedState] = React.useState('');
    const [cities, setCities] = React.useState([]);
  
    const handleStateChange = (event) => {
      setSelectedState(event.target.value);
      setCities(statesAndCities[event.target.value] || []);
    };
  
  return (
    <div>
            <div className="max-w-[1140px] w-full mx-auto  font-poppins px-5">
        <div>
          <h1 className="md:text-[36px] text-[20px] font-semibold text-center">
          Ignite Hope and Transform Lives: Volunteer to Empower People in Need
          </h1>
        </div>

        <div>
        <p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">
        Are you ready to ignite hope and transform lives? Join our dedicated team of volunteers and become a beacon of change for communities in need. At Kachem Young Initiative, we are committed to empowering vulnerable individuals and making a lasting impact on their lives.
        <br/><br/>
By volunteering with us, you have the opportunity to be part of life-changing projects and initiatives that address the unique needs of children, women, and underserved communities. From providing educational support and mentorship to organizing empowerment workshops and advocating for equal opportunities, your involvement can make a significant difference.<br/><br/>
No matter your background or expertise, we welcome passionate individuals who are willing to lend a helping hand. As a volunteer, you&apos;ll be part of a supportive network, collaborating with like-minded individuals driven by a common purpose.
Join us in creating a brighter future for those who need it the most. Become a volunteer with us today and be a catalyst for positive change. Together, we can build thriving communities and empower individuals to overcome obstacles and achieve their full potential. <br/><br/>Apply now and embark on a meaningful journey that will touch hearts and inspire generations to come.
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
  
        {/* Country and State/City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
            >
              <option>Select Country</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>India</option>
              <option>China</option>
              <option>Germany</option>
              <option>France</option>
              <option>Japan</option>
              <option>Nigeria</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="stateCity" className="block text-sm font-medium text-gray-700">
              State/City
            </label>
            <select
              id="stateCity"
              name="stateCity"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option>Select state/city</option>
              {Object.keys(statesAndCities).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {selectedState && (
              <select
                id="city"
                name="city"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
              >
                <option>Select city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
  
        {/* Date of Birth and Occupation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-6 4h2m-4 4h6M3 7h18M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <input
                type="date"
                name="dob"
                id="dob"
                placeholder="Select D.O.B"
                className="block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
            </div>
          </div>
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              placeholder="State occupation"
              className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
        </div>
  
        {/* Why Volunteer */}
        <div>
          <label htmlFor="whyVolunteer" className="block text-sm font-medium text-gray-700">
            Why do you want to volunteer with us?
          </label>
          <textarea
            name="whyVolunteer"
            id="whyVolunteer"
            placeholder="Write your reason here"
            className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
            rows="3"
          ></textarea>
        </div>
  
        {/* Department and Upload Resume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-400 focus:outline-none focus:border-black sm:text-sm rounded-md"
            >
              <option>Choose Department</option>
              <option>Media</option>
              <option>Communication</option>
              <option>Health</option>
              <option>Education and Mentoring</option>
              <option>Publicity</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                name="resume"
                id="resume"
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="px-4 py-2 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
              >
                Browse
              </label>
              <span className="ml-2 text-sm text-gray-500">Upload</span>
            </div>
          </div>
        </div>
  
          {/* Submit Button */}
          <div className="flex justify-center sm:justify-center">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center py-2 px-4 sm:px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#097895] hover:bg-white hover:text-[#097895] hover:border-[#097895] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#097895]"
        >
          Submit
        </button>
      </div>
      </form>

      <div>
          <p className="text-[17px] md:text-[22px] mt-7  font-poppins">
          Thank you for applying. We will review your application and get back to you soon. To get in touch with us about your application, please send us an email at{" "}
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

        <Footer/>
    </div>
  )
}

export default VolunteeringHero