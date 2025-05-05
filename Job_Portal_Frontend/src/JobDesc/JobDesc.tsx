import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconAdjustments, IconBookmark, IconBookmarkFilled, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { card } from '../Data/JobDescData'
import DOMPurify from "dompurify"
import { timeAgo } from '../Services/Utilities'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { postJob } from '../Services/JobService'
import { errorNotification, successNotification } from '../Services/NotificationService'


const JobDesc = (props:any) => {

  const profile=useSelector((state:any)=>state.profile);
  const user=useSelector((state:any)=>state.user);

const dispatch=useDispatch();
  const data = DOMPurify.sanitize(props.description); {/*DOMPurify takes raw HTML and cleans out any scripts, malicious attributes, or tags that could be used for XSS attacks, without affecting safe formatting. */ }
const [applied,setApplied]=useState(false);

  const handleSaveJob = () => {
      const savedJobs = profile.savedJobs?.includes(props.id)
        ? profile.savedJobs.filter((id: any) => id !== props.id)
        : [...(profile.savedJobs || []), props.id];
    
      const updatedProfile = { ...profile, savedJobs };
      dispatch(changeProfile(updatedProfile));
    };
    
useEffect(()=>{
if(props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
  setApplied(true);
}else{
  setApplied(false);
}
},[props])


const handleClose=()=>{
  postJob({...props,jobStatus:"CLOSED"}).then((res)=>{
    successNotification("Success","Job Closed Successfully");
  }).catch((err)=>{
    errorNotification("Error",err.response.data.errorMessage);
  })
}

  return (
    <div className='w-2/3 bs-mx:w-full'>
      <div className='flex justify-between flex-wrap'>
        <div className='flex gap-2 items-center'>
          <div className='p-3 bg-mine-shaft-800 rounded-xl flex shrink-0'>
            <img src={`/Icons/${props.company}.png`} alt="" className='h-14 rounded-md xs-mx:h-10 xs-mx:w-10' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-semibold text-2xl xs-mx:text-xl'>{props.jobTitle}</div>
            <div className='text-lg text-mine-shaft-300 flex flex-wrap xs-mx:text-base '><span>{props.company}</span> &bull; <span>{timeAgo(props.postTime)} </span>&bull; <span> {props.applicants?props.applicants.length:0} Applicants </span></div>
          </div>
        </div>
        <div className='flex sm:flex-col gap-2 items-center sm-mx:my-5 sm-mx:[&>button]:w-1/2 sm-mx:w-full'>
          {( props.edit || !applied) && <Link to={props.edit?`/post-job/${props.id}`:`/apply-jobs/${props.id}`}>
            <Button color='bright-sun.4' size='sm' variant='light'>{props.closed?"Reopen": props.edit?"Edit":"Apply"}</Button>
          </Link>}
          {
           !props.edit && applied && <Button color='green.8' size='sm' variant='light'>Applied</Button>
          }

          {props.edit && !props.closed? 
          <Button color='red.5' size='sm' variant='light'onClick={handleClose}>Close</Button>:profile.savedJobs?.includes(props.id)?
          <IconBookmarkFilled onClick={handleSaveJob} className='cursor-pointer text-bright-sun-400' stroke={1.5}/>
        :<IconBookmark onClick={handleSaveJob} className='text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400' stroke={1.5}/>}
        </div>

      </div>
      <Divider my="xl" />
      <div className='flex justify-between gap-4 sm-mx:flex-wrap'>
        {
          card.map((item: any, index: any) => <div key={index} className='flex flex-col items-center gap-1'>
            <ActionIcon color='bright-sun.4' className='!h-12 !w-12 xs-mx:!h-8 xs-mx:!w-8' variant='light' radius="xl" aria-label='Settings'>
              <item.icon className='h-4/5 w-4/5' stroke={1.5} />
            </ActionIcon>
            <div className='text-sm text-mine-shaft-300 xs-mx:text-sm'>{item.name}</div>
            <div className='font-semibold xs-mx:text-sm'>{props?props[item.id]:"NA"} {item.id=="packageOffered"&& <>LPA</>}</div>
          </div>)
        }

      </div>
      <Divider my="xl" />
      <div>
        <div className='text-xl font-semibold mb-5'>Required Skills</div>
        <div className='flex flex-wrap gap-2'>
          {
            props.skillsRequired?.map((skill:any, index:number) =>
              <ActionIcon color='bright-sun.4' className='!h-fit !w-fit font-medium !text-sm xs-mx:!text-xs' variant='light' radius="xl" p="xs" aria-label='Settings' key={index}>
                {skill}
              </ActionIcon>
            )
          }
        </div>
      </div>
      <Divider my="xl" />
      <div className='[&_*]:text-mine-shaft-300 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_p]:text-sm' dangerouslySetInnerHTML={{ __html: data }}>
        {/* Using dangerouslySetInnerHTML tells React: “I know this HTML came from somewhere else, but trust me, just render it.” And that’s risky. */}
      </div>
      <Divider my="xl" />
      <div>
        <div className='text-xl font-semibold mb-5'>About Company</div>
        <div>
          <div className='flex justify-between mb-3 xs-mx:flex-wrap xs-mx:gap-2'>
            <div className='flex gap-2 items-center'>
              <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                <img src={`/Icons/${props.company}.png`} alt="" className='h-8 rounded-md' />
              </div>
              <div className='flex flex-col'>
                <div className='font-medium text-lg'>{props.company}</div>
                <div className='text-mine-shaft-300'>10K+ Employees</div>
              </div>
            </div>
            <a href={`http://www.${props.company}.com`} target="_blank" rel="noopener noreferrer">

  <Button color='bright-sun.4' variant='light'>Company Page</Button>
</a>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default JobDesc