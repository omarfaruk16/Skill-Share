import React, { use } from 'react'
import SingleSkill from './SingleSkill'

const SkillPromise = fetch("/Skills.json").then(res=> res.json())
const AllSkills = () => {
    const skills = use(SkillPromise)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>
        {
            skills.map((skill)=> (<SingleSkill skill={skill}></SingleSkill>))
        }
    </div>
  )
}

export default AllSkills