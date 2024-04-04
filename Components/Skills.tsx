import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
      items-center'>
        <div>
            <SkillsItem></SkillsItem>
            <SkillsItem></SkillsItem>
            <SkillsLanguage></SkillsLanguage>
        </div>
        <div>
            <SkillsItem></SkillsItem>
            <SkillsItem></SkillsItem>
            <SkillsLanguage></SkillsLanguage>
        </div>
      </div>
    </div>
  )
}

export default Skills
