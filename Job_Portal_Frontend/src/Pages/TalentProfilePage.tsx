import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

import { Link, useNavigate } from 'react-router-dom'
import Profile from '../TalentProfile/Profile'
import { profile } from '../Data/Talentdata'
import RecommendedTalent from '../TalentProfile/RecommendedTalent'
import { useEffect, useState } from 'react'
import { getAllProfiles } from '../Services/ProfileService'


const TalentProfilePage = () => {
  const navigate=useNavigate();
const [talents,setTalents]=useState<any[]>([]);
useEffect(()=>{
  getAllProfiles().then((res)=>{
    setTalents(res);
  }).catch((err)=>{
    console.log(err);
  })
},[])

  return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
         
           
        <Button onClick={()=>navigate(-1)} my="sm" leftSection={<IconArrowLeft size={20}/>} color='bright-sun.4'  variant='light'>Back</Button>
        
<div className='flex gap-5 justify-around lg-mx:flex-wrap'>
<Profile {...profile}/>
<RecommendedTalent talents={talents} />
</div>
            </div>
  )
}

export default TalentProfilePage