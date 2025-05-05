
import { Avatar, Burger, Button, Drawer, Indicator } from "@mantine/core";
import { IconBell, IconBriefcase, IconSettings, IconX } from "@tabler/icons-react";
import Navlinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../Services/ProfileService";
import { setProfile } from "../Slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../Slices/UserSlice";
import { setupResponseInterceptor } from "../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";



const Header = () => {
  const [opened,{open,close}]=useDisclosure(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const token=useSelector((state:any)=>state.jwt);
  const user = useSelector((state: any) => state.user);
  const links = [
    { name: "Find Job", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job/0" },
    { name: "Posted Jobs", url: "/posted-jobs/0" },
    { name: "Job History", url: "/job-history" },
    ...(!user ? [{ name: "SignUp", url: "/signup" }] : []),
];

useEffect(()=>{
  setupResponseInterceptor(navigate);
 
},[navigate])

  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/login") return;
    if(token!=""){
   const decoded=jwtDecode(localStorage.getItem("token")||"");
            dispatch(setUser({...decoded,email:decoded.sub}));
    }
    getProfile(user?.profileId).then((data: any) => {
      
      dispatch(setProfile(data));
    }).catch((error: any) => {
      console.log(error);
    });
  }, [token,navigate])

  return location.pathname != "/signup" && location.pathname != "/login" ? <div className="w-full bg-mine-shaft-950 
    px-6 text-white h-20 
    flex justify-between items-center font-['poppins']">


    <div className="flex gap-1 items-center text-bright-sun-400">
      <IconBriefcase className="h-8 w-8" stroke={2.5} />
      <div className="text-3xl font-semibold xs-mx:hidden">DreamHire</div>
    </div>
    {<Navlinks />}
    <div className="flex items-center gap-3">

      {user ? <ProfileMenu /> : <Link to="/login">
        <Button variant="subtle" color="bright-sun.4" >Login</Button></Link>}
      {user ? <NotiMenu /> : <></>}
      {

      }
      <Burger className="bs:hidden" opened={opened}onClick={open} aria-label="Toggle Navigation"/>
      <Drawer size="xs" overlayProps={{backgroundOpacity:0.5,blur:4}} position="right" opened={opened} onClose={close} closeButtonProps={{icon:<IconX size={30}/>}}>
      <div className="flex flex-col gap-6 items-center">
      {links.map((link, index) => (
                <div
                    key={index}
                    className="h-full flex items-center"
                >
                    <Link className="hover:text-bright-sun-400 text-xl" to={link.url}>{link.name}</Link>
                </div>
            ))}
            </div>
      </Drawer>



      {/* <ProfileMenu/>

            
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
                </div> */}

    </div>
  </div> : <></>


}
export default Header;