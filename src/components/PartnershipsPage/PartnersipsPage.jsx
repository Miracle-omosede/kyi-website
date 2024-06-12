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
  
const PartnershipsPage = () => {
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
          Join Us as a Valued Partner in Our Mission
          </h1>
        </div>

        <div>
        <p className="md:text-[20px] text-[17px] font-normal md:pt-[100px] pt-[50px]">We value collaboration and believe that together we can achieve more. Join us as a partner in making a sustainable positive impact at the grassroots through education innovations for equitable and transformative education. <br/><br/>

By filling out the form below, you can take the first step towards a meaningful partnership with our non-profit organization, an expression of interest to partner.<br/><br/>
As a partner, you will have the opportunity to contribute to our mission of empowering communities through education, mentorship, and advocacy, building their resilience for sustainable development. <br/><br/>
We will be in touch to discuss collaboration opportunities. We are excited to explore how we can work together to make a difference and create a brighter future for young people, women and children and persons with disabilities across African communities. <br/><br/> Thank you for considering a partnership with us.
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
  
  
        {/* Upload and Occupation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              placeholder="Tell us what you do"
              className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
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
        

        {/* aim of partnership */}
        <div>
        <label htmlFor="aim" className="block text-sm font-medium text-gray-700">
          Aim of the Partnership
        </label>
        <textarea
          id="aim"
          name="aim"
          rows="4"
          placeholder="In partnering with us, what do you hope to achieve"
          className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
        />
      </div>


         {/* Program */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
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
                <option></option>
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

            <div>
              <label
                htmlFor="other"
                className="block text-sm font-medium text-gray-700"
              >
                Other
              </label>
              <input
                type="text"
                name="other"
                id="other"
                placeholder='How would you like to partner with us?'
                className="mt-1 block w-full pl-3 pr-3 py-2 sm:text-sm border border-gray-400 rounded-md focus:outline-none focus:border-black"
              />
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
          Thank you for your consideration. To get in touch with us about further collaboration, please send us an email at {" "}
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

export default PartnershipsPage;