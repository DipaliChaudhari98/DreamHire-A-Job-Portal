import { Avatar, Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { useParams } from 'react-router-dom'
import { getProfile } from '../Services/ProfileService'
import { useMediaQuery } from '@mantine/hooks'

const Profile = (props: any) => {

  const { id } = useParams();
  const [profile, setProfile] = useState<any>();
      const matches=useMediaQuery('(max-width:475px)')

  const handleMsg = () => {
    if (profile?.email) {
      window.open(`mailto:${profile.email}`, '_blank');
    }
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile(id).then((res) => {
      setProfile(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [id])

  return (
    <div className='w-2/3 lg-mx:w-full'>
      <div className='relative'>
        <img src="/Icons/Banner.png" alt=""
          className='rounded-t-2xl xl-mx:h-40 xs-mx:h-32 w-full' />
        <div className='absolute -bottom-1/3 left-6 flex items-center justify-center md-mx:-bottom-10 sm-mx:-bottom-16'>

          <Avatar className='!w-48  !h-48 border-mine-shaft-950 rounded-full md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!w-32 xs-mx:!h-32' src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}` : "/Icons/avatar1.png"} alt='' />
        </div>
      </div>
      <div className='px-3 mt-20'>
        <div className='text-3xl font-semibold flex justify-between xs-mx:text-2xl'>{profile?.name} <Button color='bright-sun.4' variant='light' onClick={handleMsg} size={matches?"sm":"md"}>Message</Button></div>



        <div className='text-xl flex gap-1 items-center xs-mx:text-base'><IconBriefcase stroke={1.5} className='h-5 w-5' />{profile?.jobTitle} &bull; {profile?.company}</div>
        <div className='flex items-center gap-1 text-lg text-mine-shaft-300 xs-mx:text-base'>
          <IconMapPin stroke={1.5} className='h-5 w-5' />{profile?.location}
        </div>
        <div className='flex items-center gap-1 text-lg text-mine-shaft-300 xs-mx:text-base'>
          <IconBriefcase stroke={1.5} className='h-5 w-5' />Experience : {profile?.totalExp} Years
        </div>

      </div>
      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>About</div>
        <div className='text-md xs-mx:text-xs text-mine-shaft-300 text-justify'>
          {profile?.about}
        </div>
      </div>
      <Divider my='xl' mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Skills</div>
        <div className='flex flex-wrap gap-2'>

          {profile?.skills?.map((skill: any, index: any) =>
            <div key={index} className='bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium'>{skill}</div>
          )}

        </div>
      </div>
      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5'>Experience</div>
        <div className='flex flex-col gap-8'>
          {profile?.experiences?.map((exp: any, index: any) => <ExpCard {...exp} key={index} />)}
        </div>

      </div>
      <Divider my={'xl'} mx="xs" />
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-5'>Certifications</div>
        <div className='flex flex-col gap-8'>
          {profile?.certifications?.map((cert: any, index: any) =>
            <CertiCard {...cert} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile