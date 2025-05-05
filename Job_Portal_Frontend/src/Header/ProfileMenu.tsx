import { Menu, Button, Text, Avatar } from '@mantine/core';
import { Switch } from '@mantine/core';


import { IconSun, IconMoon, IconLogout2 } from '@tabler/icons-react';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  
  IconMoonStars,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';


const  ProfileMenu=()=> {
  const dispatch=useDispatch();
  const user=useSelector((state:any)=>state.user);
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const profile=useSelector((state:any)=>state.profile);
  const handleLogout=()=>
  {
    dispatch(removeUser());
  }
  return (
    
    
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className="flex items-center cursor-pointer gap-2">
                    <div className='xs-mx:hidden'>
                        {user.name}
                    </div>
                    <Avatar src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/Icons/avatar1.png"}/>
                </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to={"/profile"}>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        </Link>
             <Menu.Divider />
        <Menu.Item onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;