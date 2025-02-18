import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import AboutMe from './component/AboutMe'
import Stripe from './component/Stripe'
import MyExperties from './component/MyExperties'
import WorkExperience from './component/WorkExperience'
import Project from './component/Project'
import Contact from './component/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Banner />
      <AboutMe />
      <Stripe />
      <MyExperties />
      <WorkExperience />
      <Project />
      <Contact />
    </div>
  )
}

export default App