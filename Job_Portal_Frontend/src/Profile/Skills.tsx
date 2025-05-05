import { ActionIcon, TagsInput } from '@mantine/core'
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';

const Skills = () => {
      const matches=useMediaQuery('(max-width:475px)')

    const [edit, setEdit] = useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const[skills,setSkills]=useState<string[]>([]);
    const dispatch=useDispatch();
         
      const handleClick = () => {
        if (!edit) {
          setEdit(true);
          setSkills(profile.skills);
        
        } else {
          setEdit(false);
          
        }
      };

      const handleSave=()=>{
        setEdit(false);
        let updatedProfile = { ...profile, skills:skills}; 
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "Skills Updated Successfully");

      }
  return (
    <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills<div>{edit &&  <ActionIcon onClick={handleSave} variant="subtle" color="green.8" size={matches?"md":"lg"}>
          
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
          edit ? <> <TagsInput value={skills} onChange={setSkills} placeholder='Add Skill' splitChars={[',', ' ', ' |']} /></> : <>
            <div className='flex flex-wrap gap-2'>

              {
              profile?.skills?.map((skill: any, index: number) =>
                <div key={index} className='bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium'>{skill}</div>
              )}

            </div></>
        }


      </div>
  )
}

export default Skills