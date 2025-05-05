import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

import { Link, useParams } from 'react-router-dom'
import Profile from '../TalentProfile/Profile'
import { profile } from '../Data/Talentdata'
import RecommendedTalent from '../TalentProfile/RecommendedTalent'
import JobDesc from '../JobDesc/JobDesc'
import RecommendedJobs from '../JobDesc/RecommendedJobs'
import { useEffect, useState } from 'react'
import { getJob } from '../Services/JobService'


const JobDescPage = () => {
    
    const {id}=useParams();
    const [job,setJob]=useState<any>(null);
useEffect(()=>{
    window.scrollTo(0,0);
    getJob(id).then((res)=>{
        setJob(res);
    }).catch((err)=>{
        console.log(err);
    })
},[id])


    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">

            <Link to="/find-jobs" className='my-4 inline-block'>
                <Button leftSection={<IconArrowLeft size={20} />} color='bright-sun.4' variant='light'>Back</Button>
            </Link>
            <div className='flex gap-5 justify-around bs-mx:flex-wrap'>
<JobDesc {...job}/>
<RecommendedJobs />
            </div>
        </div>
    )
}

export default JobDescPage