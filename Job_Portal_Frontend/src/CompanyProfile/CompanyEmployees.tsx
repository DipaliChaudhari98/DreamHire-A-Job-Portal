import React from 'react'
import { talents } from '../Data/Talentdata'
import TalentCard from '../FindTalent/TalentCard'

const CompanyEmployees = () => {
  return (
    
    <div className='mt-10 flex flex-wrap gap-10'>
      {
        talents.map((talent,index)=> index<6 &&
           <TalentCard key={index} {...talent} />
        )
      }
        </div>

  )
}

export default CompanyEmployees