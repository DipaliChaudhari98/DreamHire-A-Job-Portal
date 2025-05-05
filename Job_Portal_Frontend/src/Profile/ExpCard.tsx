import { IconBookmark } from '@tabler/icons-react'
import React, { useState } from 'react'  // <-- import useState
import { formatDate } from '../Services/Utilities'
import { Button } from '@mantine/core'
import ExpInput from './ExpInput'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);  // <-- define state for editing
  const profile=useSelector((state:any)=>state.profile);
  const dispatch=useDispatch();
const handleDelete=()=>{
let exp=[...profile.experiences];
exp.splice(props.index,1);
let updatedProfile={...profile, experiences:exp};
dispatch(changeProfile(updatedProfile));
successNotification("Success","Experience Deleted Succesfully");
}

  return (
    !edit ? (
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between gap-2 flex-wrap'>
          <div className='flex gap-2 items-center'>
            <div className='p-2 bg-mine-shaft-800 rounded-md'>
              <img src={`/Icons/${props.company}.png`} alt="" className='h-7 rounded-md' />
            </div>
            <div className='flex flex-col'>
              <div className='font-semibold'>{props.title}</div>
              <div className='text-sm text-mine-shaft-300'>{props.company} &#x2022; {props.location}</div>
            </div>
          </div>
          <div className='text-sm text-mine-shaft-300'>
            {formatDate(props.startDate)} - {props.working?"Present": formatDate(props.endDate)}
          </div>
        </div>
        <div className='text-sm xs-mx:text-xs text-mine-shaft-300 text-justify'>
          {props.description}
        </div>
        {props.edit && (
          <div className='flex gap-5'>
            <Button color='bright-sun.4' variant='outline' onClick={() => setEdit(true)}>Edit</Button>
            <Button color='red.8' variant='light' onClick={handleDelete}>Delete</Button>
          </div>
        )}
      </div>
    ) : (
      <ExpInput {...props} setEdit={setEdit} />  // <-- This will render the ExpInput component when `edit` is true
    )
  );
}

export default ExpCard;
