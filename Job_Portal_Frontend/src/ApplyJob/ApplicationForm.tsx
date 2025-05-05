import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form';
import { IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getBase64 } from '../Services/Utilities';
import { applyJob } from '../Services/JobService';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useSelector } from 'react-redux';

const ApplicationForm = () => {

    const user=useSelector((state:any)=>state.user);
    const {id}=useParams();
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
   
    const navigate = useNavigate();

    const handlePreview = () => {
      form.validate();
        window.scrollTo({ top: 0, behavior: "smooth" })
if(!form.isValid())return;
        setPreview(!preview);
      
    }
  
     const form = useForm({
          mode: 'controlled',
          validateInputOnChange:true,
          initialValues: { name: '',
             email: '',
             phone : '' ,
             website:'',
            resume:null,
            coverLetter:''
            },
          validate:{
            name:isNotEmpty("Name is Required"),
            email:isNotEmpty("Email is Required"),
            phone:isNotEmpty("Phone is Required"),
            resume:isNotEmpty("Resume is Required"),
          }
        });

    const handleSubmit =async () => {
      setSubmit(true);
      let resume:any=await getBase64(form.getValues().resume);

      let applicant={...form.getValues(),applicantId:user.id ,resume:resume.split(',')[1]};
      applyJob(id,applicant).then((res)=>{
        setSubmit(false);
        successNotification("Success","Application Submitted Successfully");
        navigate('/job-history');
      }).catch((err)=>{
        setSubmit(false);
        errorNotification("Error",err.response.data.errorMessage);
      })
  
    }
  return (
    <div>
    <LoadingOverlay
    className='!fixed'
    visible={submit}
    zIndex={1000}
    overlayProps={{ radius: 'sm', blur: '2' }}
    loaderProps={{ color: "bright-sun.4", type: "bars" }}
  />

     <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
    <div className='flex flex-col gap-5'>
      <div className='flex gap-10 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap md-mx:gap-5'>


        <TextInput {...form.getInputProps("name")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Full Name" placeholder="Enter Full Name" withAsterisk />


        <TextInput {...form.getInputProps("email")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Email" placeholder="Enter Email" withAsterisk />

      </div>
      <div className='flex gap-10 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap md-mx:gap-5'>

        <NumberInput {...form.getInputProps("phone")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Phone Number" placeholder="Enter Phone Number" withAsterisk hideControls min={0} max={9999999999} clampBehavior='strict' />
        {/*clampBehavior restricts user to enter only 10 digits */}


        <TextInput {...form.getInputProps("website")} readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} label="Personal Website" placeholder="Enter URL"  />

      </div>
      <FileInput accept='application/pdf' {...form.getInputProps("resume")}readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach your CV" placeholder="Upload File here" leftSectionPointerEvents='none' />


      <Textarea {...form.getInputProps("coverLetter")}readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} placeholder='Type Something about yourself...' label="Cover Letter" autosize minRows={4} />
      {!preview ? <Button color='bright-sun.4' variant='light' onClick={handlePreview}>Preview</Button> :
        <div className='flex gap-10 [&>*]:w-1/2'>
          <Button fullWidth color='bright-sun.4' variant='outline' onClick={handlePreview}>Edit</Button>
          <Button fullWidth color='bright-sun.4' variant='light' onClick={handleSubmit}>Submit</Button>
        </div>
      }
    </div></div>
  )
}

export default ApplicationForm