import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { data } from "react-router-dom";
import { changePass, sendOtp, verifyOtp } from "../Services/UserService";
import React from "react";
import { signUpValidation } from "../Services/fromValidation";
import { errorNotification, successNotification } from "../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword=(props:any)=>{
    
    const[otpSent,setOtpSent]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passErr,setPassErr]=useState("");
    const[verified,setVerified]=useState(false);
    const [resendLoader,setResendLoader]=useState(false);

    const [seconds, setSeconds] = useState(60);
//    const interval=useInterval(()=>{
//     if(seconds===0)
//         {
//             setResendLoader(false);
//             setSeconds(60);
//             interval.stop();
//         }else{
//             setSeconds((s) => s - 1)
//         }
  
        const interval = useInterval(() => {
            if (seconds === 0) {
              setResendLoader(false);
              setSeconds(60);
              interval.stop(); // Assuming useInterval returns an object with a `stop` method
            } else {
              setSeconds((s) => s - 1);
            }
          }, 1000);
   
   
const[otpSending,setOtpSending]=useState(false);  

   const handleSendOtp=()=>{
    setOtpSending(true);

    sendOtp(email).then((res)=>{
        console.log(res);
        successNotification("OTP sent Successfully","Enter OTP to reset.")
        setOtpSent(true);
        setOtpSending(false);
        setResendLoader(true);
        interval.start();
    }).catch((err)=>{
        console.log(err);
        // errorNotification("OTP Sending Failed",err.response.data.errorMessage);
        errorNotification("OTP Sending Failed","Something went wrong Please Try again after some time.");

        setOtpSending(false);
    })
   }

   
   const handleverifyOtp = (otp: string) => {
    console.log(otp);
    verifyOtp(email, otp)
        .then((res) => {
            console.log(res);
            successNotification("OTP Verified","Enter new password.")
            setVerified(true);
        })
        .catch((err) => {
            console.log(err);
            errorNotification("OTP Verification Failed",err.response.data.errorMessage);
        });
    // setOtpSent(false);
};

const changeEmail=()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
}
const resendOtp=()=>{
    if(resendLoader)return;
handleSendOtp();
}
const handleResetPassword = () => {
    changePass(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password changed", "Login with new password.");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Password Reset Failed", err.response?.data?.errorMessage || "Something went wrong.");
      });
  }
  

    // function changeEmail(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error("Function not implemented.");
    // }

    return <Modal centered opened={props.opened} onClose={props.close} title="Reset Password">
 <div className="flex flex-col gap-6">
     <TextInput value={email} name='email'  onChange={(e)=>setEmail(e.target.value)}
      withAsterisk leftSection={<IconAt size={16} />} label="Email"   placeholder="Your email" 

        rightSection={<Button loading={otpSending && !otpSent} size="xs" className="mr-1" onClick={handleSendOtp}autoContrast disabled={email==="" || otpSent} variant="filled">
            Send OTP</Button>} rightSectionWidth="xl"/>
        {otpSent&& <PinInput onComplete={handleverifyOtp} length={6} className="mx-auto" size="md" gap="lg" type="number" /> }
       
        {otpSent&& !verified &&
         
         <div className="flex gap-2">
           <Button fullWidth loading={otpSending} color="bright-sun.4" size="xs" className="mr-1"
            onClick={resendOtp}autoContrast  variant="light">
           {resendLoader?seconds:"Resend"}</Button>

           <Button fullWidth  onClick={changeEmail}autoContrast 
          variant="filled">
            Change Email</Button>
         </div>
         }
         {verified && <PasswordInput value={password} error={passErr} name='password'onChange={(e)=>{setPassword(e.target.value); setPassErr(signUpValidation("password",e.target.value))}} leftSection={<IconLock size={16} />} 
                         label="Password" withAsterisk placeholder='Password'/>}
                         { verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>

                         }
 </div>
  </Modal>
}
export default ResetPassword;

// function sendOtpSent(arg0: boolean) {
//     throw new Error("Function not implemented.");
// }
