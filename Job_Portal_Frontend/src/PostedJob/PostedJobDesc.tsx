import { Badge, Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import JobDesc from '../JobDesc/JobDesc'
import { talents } from '../Data/Talentdata'
import TalentCard from '../FindTalent/TalentCard'


const PostedJobDesc = (props:any) => {
const [tab,setTab]=useState("overview");
const [arr,setArr]=useState<any>([]);
const handleTabChange=(value:any)=>{
  setTab(value);
if(value=="applicants"){
  setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED"));
}else if(value=="invited"){
  setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING"));
}else if(value=="offered"){
  setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="OFFERED"));
}else if(value=="rejected"){
  setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="REJECTED"));
}
}

useEffect(()=>{
  handleTabChange("overview");
},[props])

  return (
    <div className='mt-5 w-3/4 md-mx:w-full px-5 md-mx:p-0'>
       {props.jobTitle?<> <div className='text-2xl font-semibold flex items-center xs-mx:text-xl'>{props.jobTitle}<Badge variant='light' ml="sm" color='bright-sun.4' size='sm'>{props.jobStatus}</Badge></div>
        <div className='font-medium text-mine-shaft-300 mb-5 xs-mx:text-sm'>{props.location}</div>
        <div>
        <Tabs variant='outline' radius="lg" value={tab} onChange={handleTabChange}>
          <Tabs.List className='[&_button]:!text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400 sm-mx:[&_button]:!text-lg xs-mx:[&_button]:!py-2 xs-mx:font-medium'>
          <Tabs.Tab value='overview'>Overview</Tabs.Tab>
          <Tabs.Tab value='applicants'>Applicants</Tabs.Tab>
          <Tabs.Tab value='invited'>Invited</Tabs.Tab>
          <Tabs.Tab value='offered'>Offered</Tabs.Tab>
          <Tabs.Tab value='rejected'>Rejected</Tabs.Tab>

          </Tabs.List>
          <Tabs.Panel value='overview' className='[&>div]:w-full'>
       <JobDesc edit={true} {...props} closed={props.jobStatus=="CLOSED"} />
           
          </Tabs.Panel>
          <Tabs.Panel value='applicants'>
          <div className='mt-10 flex flex-wrap gap-5 justify-around'>
          {
       arr?.length?arr.map((talent:any,index:number)=> <TalentCard key={index} {...talent} posted={true}/>
        ): <div className='text-2xl font-semibold'>No Applicants</div>
      }
      </div>
            </Tabs.Panel>
          <Tabs.Panel value='invited'>
          <div className='mt-10 flex flex-wrap gap-5 justify-around'>
          {
       arr?.length?arr.map((talent:any,index:number)=> <TalentCard key={index} {...talent} invited={true}/>
        ): <div className='text-2xl font-semibold'>No Invited Candidates</div>
      }
      </div>
          </Tabs.Panel>
          <Tabs.Panel value='offered'>
          <div className='mt-10 flex flex-wrap gap-5 justify-around'>
          {
        arr?.length?arr.map((talent:any,index:number)=> <TalentCard key={index} {...talent} offered={true}/>
        ): <div className='text-2xl font-semibold'>No Offered Candidates</div>
      }
      </div>
            </Tabs.Panel>


            <Tabs.Panel value='rejected'>
          <div className='mt-10 flex flex-wrap gap-5 justify-around'>
          {
        arr?.length?arr.map((talent:any,index:number)=> <TalentCard key={index} {...talent} rejected={true}/>
        ): <div className='text-2xl font-semibold'>No Rejected Candidates</div>
      }
      </div>
            </Tabs.Panel>

        </Tabs>
        </div>
        </>: <div className='text-2xl font-semibold flex justify-center items-center min-h-[70vh] '>No Job Selected</div>}
    </div>
  )
}

export default PostedJobDesc