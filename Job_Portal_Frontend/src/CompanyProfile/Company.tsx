import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import AboutComp from './AboutComp'
import CompanyJobs from './CompanyJobs'
import CompanyEmployees from './CompanyEmployees'

const Company = () => {
  return (
    <div className='w-3/4'>
       <div className='relative'>
        <img src="/Icons/Banner.png" alt=""
          className='rounded-t-2xl' />
        <img src="/Icons/Google.png" alt="" className='rounded-3xl w-36 h-36 -bottom-1/4 absolute left-5 p-2 border-mine-shaft-950  bg-mine-shaft-950 border-8' />

      </div>
      <div className='px-3 mt-16'>
        <div className='text-3xl font-semibold flex justify-between'>Google 

          <Avatar.Group>
            <Avatar src="/Icons/avatar.png"/>
            <Avatar src="/Icons/avatar1.png"/>
            <Avatar src="/Icons/avatar2.png"/>
            <Avatar>+10K</Avatar>
          </Avatar.Group>
        </div>
        <div className='flex items-center gap-1 text-lg text-mine-shaft-300 '>
          <IconMapPin stroke={1.5} className='h-5 w-5' />New York, United States
        </div>

      </div>
      <Divider my={'xl'}/>
      <div>
        <Tabs variant='outline' radius="lg" defaultValue="about">
          <Tabs.List className='[&_button]:!text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
          <Tabs.Tab value='about'>About</Tabs.Tab>
          <Tabs.Tab value='jobs'>Jobs</Tabs.Tab>
          <Tabs.Tab value='employees'>Employees</Tabs.Tab>

          </Tabs.List>
          <Tabs.Panel value='about'><AboutComp /></Tabs.Panel>
          <Tabs.Panel value='jobs'><CompanyJobs /></Tabs.Panel>
          <Tabs.Panel value='employees'><CompanyEmployees/></Tabs.Panel>


        </Tabs>
      </div>
    </div>
  )
}

export default Company