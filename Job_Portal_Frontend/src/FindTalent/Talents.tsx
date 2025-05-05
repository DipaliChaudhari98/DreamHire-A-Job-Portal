import React, { useEffect, useState } from 'react'

import { jobList } from '../Data/JobsData'
import Sort from '../FindJobs/Sort'
import JobCard from '../FindJobs/JobCard'
import TalentCard from './TalentCard'
import { talents } from '../Data/Talentdata'
import { getAllProfiles } from '../Services/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilter } from '../Slices/FilterSlice'

const Talents = () => {
const dispatch=useDispatch();
  const [talents,setTalents]=useState<any>([]);
  const filter=useSelector((state:any)=>state.filter);
  const [filteredTalent,setFilteredTalents]=useState<any>([]);
    const sort=useSelector((state:any)=>state.sort);
  

useEffect(()=>{
  dispatch(resetFilter());
  getAllProfiles().then((res)=>{
    setTalents(res);
  }).catch((err)=>{
    console.log(err);
  })
},[])

 useEffect(()=>{
    if(sort=="Experience (Low to High)"){
      setTalents([...talents].sort((a:any,b:any)=>a.totalExp-b.totalExp));
    }else if(sort=="Experience (High to Low)"){
      setTalents([...talents].sort((a:any,b:any)=>b.totalExp-a.totalExp));
    }
  },[sort])

useEffect(()=>{
  let filterTalent=talents;
  if(filter.name){
    filterTalent=filterTalent.filter((talent:any)=>talent?.name?.toLowerCase().includes(filter.name?.toLowerCase()));
  }
  if(filter["Job Title"] && filter["Job Title"].length>0){
    filterTalent=filterTalent.filter((talent:any)=>filter["Job Title"]?.some((title:any)=>talent?.jobTitle?.toLowerCase().includes(title?.toLowerCase())));

  }

  if(filter.Location && filter.Location.length>0){
    filterTalent=filterTalent.filter((talent:any)=>filter.Location?.some((location:any)=>talent?.location?.toLowerCase().includes(location?.toLowerCase())));
  }

  if(filter.Skills && filter.Skills.length>0){
    filterTalent=filterTalent.filter((talent:any)=>filter.Skills?.some((skill:any)=>talent.skills?.some((talentSkill:any)=>talentSkill.toLowerCase().includes(skill.toLowerCase()))));
  }

  if(filter.exp && filter.exp.length >0){
    filterTalent=filterTalent.filter((talent:any)=>filter.exp[0]<=talent.totalExp && talent.totalExp<=filter.exp[1]);
  }
  setFilteredTalents(filterTalent);
},[filter,talents])

  return (
    <div className='p-5'>
        <div className='flex justify-between'>
            <div className='text-2xl font-semibold'>Talents</div>
                <Sort />
        </div>
        <div className='mt-10 flex flex-wrap gap-5 justify-around'>
      {
        filteredTalent.length?filteredTalent.map((talent:any,index:number)=>
           <TalentCard key={index} {...talent} />
        ): <div className='text-xl font-semibold'>No Talent Found</div>
      }
        </div>
      
    </div>
  )
}

export default Talents