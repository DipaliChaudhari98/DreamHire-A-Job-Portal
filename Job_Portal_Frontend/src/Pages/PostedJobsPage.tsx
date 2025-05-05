import { Button, Divider, Drawer } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Company from '../CompanyProfile/Company'
import SimilarCompanies from '../CompanyProfile/SimilarCompanies'
import PostedJobDesc from '../PostedJob/PostedJobDesc'
import PostedJob from '../PostedJob/PostedJob'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getJobPostedBy } from '../Services/JobService'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const PostedJobPage = () => {
    const {id}=useParams();
  const user=useSelector((state:any)=>state.user);
const [jobList,setJobList]=useState<any[]>([]);
const [job,setJob]=useState<any>({});
const [opened,{open,close}]=useDisclosure(false);
const navigate=useNavigate();
        const matches=useMediaQuery('(max-width:767px)');

useEffect(()=>{
window.scrollTo(0,0);
getJobPostedBy(user.id).then((res)=>{
    setJobList(res);
    if(res && res.length>0 && Number(id)==0)navigate(`/posted-jobs/${res[0].id}`)
    setJob(res.find((item:any)=>item.id==id));
}).catch((err)=>{
    console.log(err);
})
},[id])
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-5">
           {matches && <Button my='xs' size='sm' autoContrast onClick={open}>All Jobs</Button>}
            <Drawer size={250} overlayProps={{backgroundOpacity:0.5,blur:4}}  opened={opened} onClose={close} title="All Jobs">

            <PostedJob job={job} jobList={jobList}/>
            </Drawer>
            <div className='flex gap-5 '>
            {!matches &&<PostedJob job={job} jobList={jobList}/>}
<PostedJobDesc {...job}/>
            </div>
        </div>
    )
}

export default PostedJobPage