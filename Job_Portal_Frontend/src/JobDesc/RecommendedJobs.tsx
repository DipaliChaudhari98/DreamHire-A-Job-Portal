import React, { useEffect, useState } from 'react'

import JobCard from '../FindJobs/JobCard'
import { useParams } from 'react-router-dom'
import { getAllJobs } from '../Services/JobService';

const RecommendedJobs = () => {
  const [jobList,setJobList]=useState<any>(null);

  useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobList(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const {id}=useParams();
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Jobs</div>
        <div className='flex bs:flex-col gap-5 flex-wrap justify-between bs-mx:justify-start'>
            {
              jobList?.map((job:any,index:number)=>index< 3 && id!=job.id &&<JobCard key={index} {...job}/>)
            }
        </div>
    </div>
  )
}

export default RecommendedJobs