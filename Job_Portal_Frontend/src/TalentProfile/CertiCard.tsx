import { IconBookmark } from '@tabler/icons-react'
import React from 'react'
import { formatDate } from '../Services/Utilities'

const CertiCard = (props:any) => {
  return (
        <div className='flex justify-between sm-mx:flex-wrap'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md shrink-0'>
            <img src={`/Icons/${props.issuer}.png`} alt="" className='h-7 rounded-md' />
          </div>
          <div className='flex flex-col'>
            <div className='font-semibold xs-mx:text-xs'>{props.name}</div>
            <div className='text-sm text-mine-shaft-300 xs-mx:text-xs'>{props.issuer}</div>
          </div>
        </div>
       <div className='flex flex-col items-end sm-mx:flex-row sm-mx:gap-2'>
        <div className='text-sm text-mine-shaft-300 xs-mx:text-xs'> {formatDate(props.issueDate)}</div>
        <div className='text-sm text-mine-shaft-300 xs-mx:text-xs'>ID : {props.certificateId}</div>
       </div>
    </div>
    
  )
}

export default CertiCard