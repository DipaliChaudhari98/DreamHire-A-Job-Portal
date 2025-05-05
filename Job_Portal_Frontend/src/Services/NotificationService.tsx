import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

const successNotification=(title:string,message:string)=>{

    notifications.show({
        title:title,
        message:message,
        icon:<IconCheck style={{width:"90%" ,height:"90%"}} />,
        color:'teal',
        withBorder:true,
        withCloseButton:true,
        className:"!border-green-500",
    })
}
const errorNotification=(title:string,message:string)=>{
   
   notifications.show({
    title:title,
    message:message,
    icon:<IconX style={{width:"90%" ,height:"90%"}} />,
    color:'red',
    withBorder:true,
    withCloseButton:true,
    className:"!border-green-500",
   }) 
}
export {successNotification,errorNotification};