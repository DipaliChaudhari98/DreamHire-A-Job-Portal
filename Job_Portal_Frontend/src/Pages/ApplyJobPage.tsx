import React, { useEffect, useState } from 'react'
import PostJob from '../PostJob/PostJob'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import ApplyJobComp from '../ApplyJob/ApplyJobComp'
import { getJob } from '../Services/JobService'

const ApplyJobPage = () => {


    const navigate=useNavigate();
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
            
           
                <Button my="md" leftSection={<IconArrowLeft size={20} />} color='bright-sun.4' variant='light' onClick={()=>navigate(-1)}>Back</Button>
            
            <ApplyJobComp {...job}/>
        </div>
    )
}

export default ApplyJobPage