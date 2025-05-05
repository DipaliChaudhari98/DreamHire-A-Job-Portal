import { ActionIcon, Textarea } from '@mantine/core'
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';

const About = () => {
        const matches=useMediaQuery('(max-width:475px)');
     const [edit, setEdit] = useState(false);
const profile=useSelector((state:any)=>state.profile);
const[about,setAbout]=useState("");
const dispatch=useDispatch();
     
  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    
    } else {
      setEdit(false);
      
    }
  };
  const handleSave=()=>{
    setEdit(false);
    let updatedProfile = { ...profile, about:about}; 
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "About Updated Successfully");
  }
  return (
    <div className='px-3'>
    <div className='text-2xl font-semibold mb-3 flex justify-between'>About 
    <div>{edit &&  <ActionIcon onClick={handleSave} variant="subtle" color="green.8" size={matches?"md":"lg"}>
          
          <IconCheck className="w-4/5 h-4/5" stroke={1.5} />
      </ActionIcon>} 
      <ActionIcon onClick={handleClick} variant="subtle" color={edit?"red.8":"bright-sun.4"} size={matches?"md":"lg"}>
        {edit ? (
          <IconX className="w-4/5 h-4/5" stroke={1.5} />
        ) : (
          <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
        )}
      </ActionIcon>
    </div></div>
    {

      edit ? <>   <Textarea autosize minRows={3} value={about} 
      onChange={(event) => setAbout(event.target.value)} /> </> : <>
        <div className='text-sm text-mine-shaft-300 text-justify'>
          {profile?.about}
        </div>
      </>

    }

  </div>
  )
}

export default About