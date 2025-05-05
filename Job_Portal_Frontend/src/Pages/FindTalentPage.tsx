import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talents from '../FindTalent/Talents'


const FindTalentPage = () => {
  return (
     <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
           
            <SearchBar />
            <Divider mr="xs" size="md"/>
            <Talents />
            </div>
  )
}

export default FindTalentPage