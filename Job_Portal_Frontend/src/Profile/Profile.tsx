import { ActionIcon, Avatar, Button, Divider, FileInput, Indicator, Overlay, TagsInput, Textarea } from '@mantine/core'
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconEdit, IconMapPin, IconPencil, IconPlug, IconPlus } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import SelectInput from './SelectInput'
import fields from '../Data/Profile'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../Services/ProfileService'
import Info from './Info'
import { changeProfile, setProfile } from '../Slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Certificate from './Certificate'
import { useHover } from '@mantine/hooks'
import { resolve } from 'path'
import { rejects } from 'assert'
import { error } from 'console'
import { successNotification } from '../Services/NotificationService'
import { getBase64 } from '../Services/Utilities'

const Profile = (props: any) => {
const dispatch=useDispatch();
  
const profile=useSelector((state:any)=>state.profile);
 const {hovered,ref}=useHover();
  const [edit, setEdit] = useState([false, false, false, false, false]);
  
 

  const handleFileChange=async (image:any)=>{
let picture:any=await getBase64(image);
let updatedProfile={...profile,picture:picture.split(',')[1]};
dispatch(changeProfile(updatedProfile));
successNotification("Success", 'Profile Photo Updated Successfully');
  }

  

  return (
    <div className='w-4/5 lg-mx:w-full mx-auto'>
      <div className=''>
      <div className='relative px-5'>
        <img src="/Icons/Banner.png" alt=""
          className='w-full h-64 object-cover rounded-t-2xl xs-mx:h-32' />
       <div ref={ref} className='absolute -bottom-1/3 left-6 flex items-center justify-center md-mx:-bottom-10 sm-mx:-bottom-16'>
       
       <Avatar className='!w-48 !h-48 border-mine-shaft-950 rounded-full md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!w-32 xs-mx:!h-32' src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/Icons/avatar1.png"} alt=''/>
       {hovered && <Overlay color='' backgroundOpacity={0.75} className='!rounded-full'/>}
       {hovered && <IconEdit className='absolute z-[300] !w-16 !h-16'/>}
       {hovered && <FileInput className='absolute w-full z-[301] [&_*]:!h-full [&_*]:rounded-full' variant='transparent' accept='image/png,image/jpeg' onChange={handleFileChange}/>}
       
       </div>

      </div>
</div>

      <div className='px-3 mt-20'>
       <Info/>
</div>

     


      <Divider my={'xl'} mx="xs" />

     <About />

      <Divider my='xl' mx="xs" />

      <Skills />

      <Divider my={'xl'} mx="xs" />

    <Experience />
      
      <Divider my={'xl'} mx="xs" />
      
      <Certificate />
    </div>
  )
}

export default Profile
