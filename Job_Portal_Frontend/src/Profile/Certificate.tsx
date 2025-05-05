import { ActionIcon } from '@mantine/core'
import { IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import CertiCard from './CertiCard'
import CertiInput from './CertiInput'
import { useSelector } from 'react-redux'
import { useMediaQuery } from '@mantine/hooks'

const Certificate = () => {
  const matches=useMediaQuery('(max-width:475px)')

const [addCert,setAddCert]=useState(false);
const [edit,setEdit]=useState(false);
const profile=useSelector((state:any)=>state.profile);

const handleClick=()=>{
  setEdit(!edit);
}

  return (
    <div className='px-3'>
        <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications<div className='flex gap-2'>
          <ActionIcon onClick={() =>setAddCert(true)} variant='subtle' size={matches?"md":"lg"} color='bright-sun.4'>
            <IconPlus className='h-4/5 w-4/5 ' />
          </ActionIcon>
          <ActionIcon variant='subtle' size={matches?"md":"lg"} color={edit?"red.8":"bright-sun.4"} onClick={handleClick}>
            {edit ? <IconX className='h-4/5 w-4/5 ' /> : <IconPencil className='h-4/5 w-4/5 ' />}
          </ActionIcon></div></div>
        <div className='flex flex-col gap-8'>
          {profile?.certifications?.map((cert: any, index: number) =>
            <CertiCard {...cert} edit={edit} key={index} index={index}/>
          )}
          {
            addCert && <CertiInput setEdit={setAddCert}/>
          }
        </div>
      </div>
  )
}

export default Certificate