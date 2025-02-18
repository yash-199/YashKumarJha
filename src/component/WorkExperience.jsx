import React from 'react'

const experience = [
  {
    year: "Aug 2024 - Present",
    title: "Full Stack Developer",
    company: "Asian Institute of Medical Sciences, Faridabad",
    description1: "Managed and maintained websites for four branches of Asian Hospital",
    description2: "Engineered a secure patient-doctor listing feature with real-time updates using MongoDB and Node.js",
    description3: "Streamlined appointment scheduling by integrating an automated booking system,reducing manual efforts by 40%",
    description4: "Designed a PHP-based event registration platform with a secure payment gateway.",
  },
  {
    year: "Aug 2022 - Aug 2024",
    title: "Full Stack Developer",
    company: "All Friend Studio",
    description1: "Created Onwork.ai dashboard using Node.js, Google Charts, and Leaflet.js, improving real-time data visualization & traffic tracking by 20%.",
    description2: "Spearheaded the creation of Ludo Junction Game with OTP authentication, user-management, and secure transactions, increasing engagement by 35%.",
    description3: "Revamped the DWFritz website with custom landing pages and Pardot lead forms,boosting conversion rates.",
    description4: "Created the Sarvodaya TexStyle website with a responsive UI and form validation for a seamless user experience.",
  },
  {
    year: "June 2022 - Aug 2022",
    title: "Frontend Developer (Intern)",
    company: "All Friend Studio",
    description1: "WordPress-based dynamic furniture website for Encore Prime Furniture, enhancing the user experience.",
    description2: "Customized websites for Australian agricultural businesses, focusing on product sales and customer engagement.",
    description3: "Built service websites for Windsor Valet, SSB Academy, Soundwork India, and T27 Architecture, customizing Divi themes to meet client requirements.",
  },
]

const WorkExperience = () => {
  return (
    <div className='bg-black py-28' id='Experience'>
      <p className='text-center text-base font-bold text-slate-500 py-4'>What I have done so far</p>
      <h2 className="text-5xl font-bold mb-8 text-center text-white">My Experience</h2>
      <div className='relative w-full max-w-3xl mx-auto'>
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* TimeLine Item */}
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col items-center sm:flex-row w-full my-6 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
          >
            {/* Timeline Dot (Only on Large Screens) */}
            <div className="hidden sm:block w-8 h-8 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

            {/* Card */}
            <div className="w-full sm:w-5/12 bg-white/5 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-white">{exp.company}</p>
              <span className="text-white block mt-2">{exp.year}</span>
              <ul className='list-disc'>
                <li className=" twxt-justify text-sm mt-2 text-white">{exp.description1}</li>
                <li className=" twxt-justify text-sm mt-2 text-white">{exp.description2}</li>
                <li className=" twxt-justify text-sm mt-2 text-white">{exp.description3}</li>
                <li className=" twxt-justify text-sm mt-2 text-white">{exp.description4}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience