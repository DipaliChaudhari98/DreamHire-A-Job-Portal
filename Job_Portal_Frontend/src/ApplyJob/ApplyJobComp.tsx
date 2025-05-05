import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconBookmark, IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApplicationForm from './ApplicationForm'
import { timeAgo } from '../Services/Utilities'


const ApplyJobComp = (props:any) => {
 
  
 
  const navigate = useNavigate();

  
  return (
    
      <div className='w-2/3 bs-mx:w-4/5 sm-mx:w-full mx-auto'>
       

        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <div className='p-3 bg-mine-shaft-800 rounded-xl flex shrink-0'>
              <img src={`/Icons/${props.company}.png`} alt="" className='h-14 rounded-md xs-mx:h-10 xs-mx:w-10' />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-semibold text-2xl xs-mx:text-xl'>{props.jobTitle}</div>
              <div className='text-lg text-mine-shaft-300 flex-wrap xs-mx:text-base'><span>{props.company} </span>&bull; <span>{timeAgo(props.postTime)} </span>&bull; <span>{props.applicants?props.applicants.length:0} Applicants</span></div>
            </div>
          </div>
        </div>
        <Divider my="xl" />
       

<ApplicationForm />

      </div>
   
  )
}

export default ApplyJobComp