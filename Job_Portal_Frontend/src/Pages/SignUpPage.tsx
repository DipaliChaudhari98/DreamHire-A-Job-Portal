import { Button, Divider } from "@mantine/core";
import { IconArrowLeft, IconBell, IconBriefcase, IconSettings } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (

    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden sm-mx:overflow-y-auto  relative">
      <Button className="!absolute left-5 z-10"
        my="md"
        onClick={() => navigate(-1)}
        leftSection={<IconArrowLeft size={20} />}
        color="bright-sun.4"
        variant="light"
      >
        Back
      </Button>

      <div className={`w-[100vw] h-[100vh]  transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 
      ${location.pathname == '/signup' ? '-translate-x-1/2 sm-mx:-translate-x-full' : 'translet-x-0'}`}>
        <Login />
        <div className={`w-1/2 h-full sm-mx:hidden sm-mx:min-h-full transition-all duration-1000 ease-in-out ${location.pathname === "/signup" ?
          '!rounded-r-[200px]' : '!rounded-l-[200px]'} bg-mine-shaft-900 flex 
          items-center gap-5 justify-center flex-col`}>

          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconBriefcase className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl ">DreamHire</div>
          </div>
          <div className="text-2xl text-shaft-200 bs-mx:text-xl md-mx:text-lg">Find the made for you</div>
        </div>
        <SignUp />
      </div>

    </div>
  )
}

export default SignUpPage;