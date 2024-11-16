import React from 'react'
import Profile_card from '../components/profile/Profile_card'
import Visitors_card from '../components/profile/Visitors_card'
import Profile_data_section from '../components/profile/Profile_data_section'
import SkillsAndEndorsements from '../components/profile/SkillsAndEndorsements'
import ExperienceSection from '../components/profile/ExperienceSection'
import EducationSection from '../components/profile/EducationSection'
import CourseRecommendations from '../components/profile/CourseRecommendations'
import AboutSection from '../components/profile/AboutSection'
import Projects_card from '../components/profile/Projects_card'

export default function Profile_page() {
  return (
    <div className="w-[80vw] mx-auto">
      <Profile_card />
      <div className="w-full flex my-4 gap-6">
        <div className="w-[75%]">
          <Profile_data_section />
          <AboutSection />
          <Projects_card />
          <SkillsAndEndorsements />
          <ExperienceSection />
          <EducationSection />
          {/* <Profile_data_buttons />
          <About_us_card /> */}
        </div>

        <div className="w-[25%]">
          <Visitors_card />
          <CourseRecommendations />
        </div>

      </div>
    </div> 
  )
}
