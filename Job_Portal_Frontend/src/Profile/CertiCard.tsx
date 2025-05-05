import { IconBookmark, IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import { formatDate } from '../Services/Utilities'
import { ActionIcon } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { changeProfile } from '../Slices/ProfileSlice'
import { successNotification } from '../Services/NotificationService'
import { useMediaQuery } from '@mantine/hooks'

const CertiCard = (props: any) => {

  const [edit, setEdit] = useState(false);  // <-- define state for editing
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();
          const matches=useMediaQuery('(max-width:475px)');
  
  const handleDelete = () => {
    let certi = [...profile.certifications];
    certi.splice(props.index, 1);
    let updatedProfile = { ...profile, certifications: certi };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Certificate Deleted Succesfully");
  }
  return (<div>
    <div className='flex justify-between items-start sm-mx:flex-wrap'>
      <div className='flex gap-2 items-center '>
        <div className='p-2 bg-mine-shaft-800 rounded-md shrink-0'>
          <img src={`/Icons/${props.issuer}.png`} alt="" className='h-7 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <div className='font-semibold xs-mx:text-sm'>{props.name}</div>
          <div className='text-sm text-mine-shaft-300'>{props.issuer}</div>
        </div>
      </div>

      <div className='flex items-start gap-3'>
        <div className='flex flex-col items-end sm-mx:flex-row sm-mx:gap-2'>
          <div className='text-sm text-mine-shaft-300 xs-mx:text-xs'>{formatDate(props.issueDate)}</div>
          <div className='text-sm text-mine-shaft-300 xs-mx:text-xs'>ID : {props.certificateId}</div>
        </div>

        {props.edit && (
          <ActionIcon onClick={handleDelete} variant='subtle' color='red.8' size={matches?"md":"lg"}>
            <IconTrash className='w-4/5 h-4/5' stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>

  </div>
  )
}

export default CertiCard