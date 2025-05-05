import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import { content, fields } from '../Data/PostJob'
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core';
import RichText from './RichText';
import { IconArrowLeft } from '@tabler/icons-react';
import { isNotEmpty, useForm } from '@mantine/form';
import { getJob, postJob } from '../Services/JobService';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

const PostJob = () => {
  const {id}=useParams();
  const [editorData,setEditorData]=useState(content);
  const user=useSelector((state:any)=>state.user);
const navigate=useNavigate();
  const select=fields;
  // const matches=useMediaQuery('(min-width:350px)');

useEffect(()=>{
window.scrollTo(0,0);
if(id !=="0"){
  getJob(id).then((res)=>{
form.setValues(res);
setEditorData(res.description);
  }).catch((err)=>{
    console.log(err);
  })
}
else {
  form.reset();
setEditorData(content);

}

},[id])

 const form = useForm({
       mode: 'controlled',
       validateInputOnChange:true,
       initialValues: { 
        jobTitle: '',
         company: '',
         experience:'',
         jobType:'',
         location: '' ,
         packageOffered:'',
         skillsRequired:[],
         about:'',
         description:content,

        },
       validate:{
        jobTitle:isNotEmpty("Title is required"),
        company:isNotEmpty("Company is required"),
        experience:isNotEmpty("Company is required"),
        jobType:isNotEmpty("Job type is required"),
        location:isNotEmpty("Location is required"),
        packageOffered:isNotEmpty("package is required"),
        skillsRequired:isNotEmpty("Skills are required"),
        about:isNotEmpty("About is required"),
        description:isNotEmpty("Description is required"),
       }
     });

const handlePost=()=>{
form.validate();
if(!form.isValid())return;
postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"ACTIVE"}).then((res)=>{
successNotification("Success","Job Posted Successfully");
navigate(`/posted-jobs/${res.id}`);
}).catch((err)=>{
  console.log(err);
  errorNotification("Error","Something Went Wrong");
});
}

const handleDraft=()=>{

  postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"DRAFT"}).then((res)=>{
  successNotification("Success","Job Drafted Successfully");
  navigate(`/posted-jobs/${res.id}`);
  }).catch((err)=>{
    console.log(err);
    errorNotification("Error","Something Went Wrong");
  });
  }

  return (
    <div className='w-4/5 bs-mx:px-10 md-mx:px-5 mx-auto'>
      <div className='text-2xl font-semibold mb-5'>Post a Job</div>
      <div className='flex flex-col gap-5'>
<div className='flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap'>
  <SelectInput form={form} name="jobTitle"{...select[0]}/>
  <SelectInput form={form} name="company"{...select[1]}/>
</div>
<div className='flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap'>
  <SelectInput form={form} name="experience" {...select[2]}/>
  <SelectInput form={form} name="jobType" {...select[3]}/>
</div>
<div className='flex gap-10 md-mx:gap-5 [&>*]:w-1/2 sm-mx:[&>*]:w-full sm-mx:flex-wrap'>
  <SelectInput form={form} name="location"{...select[4]}/>
<NumberInput {...form.getInputProps("packageOffered")} label="Salary" placeholder='Enter Salary' clampBehavior='strict' withAsterisk min={1} max={300} hideControls /> {/*clampBehavior means it restrict us from entering number greater than 300*/}
</div>
<TagsInput {...form.getInputProps("skillsRequired")} 
withAsterisk
      label="Skills"
      placeholder="Enter skills" clearable acceptValueOnBlur
      splitChars={[',',' ','|']}
    />

<Textarea {...form.getInputProps('about')} withAsterisk label="About Job" placeholder='Enter About Job'  className='my-3' autosize minRows={3} />

    <div className='[&_button[data-active="true"]]:!text-bright-sun-400 [&_button[data-active="true"]]:!bg-bright-sun-400/20'>
      <div className='text-sm font-medium'>Job Description <span className='text-red-500'>*</span></div>
      <RichText form={form} data={editorData}/>
    </div>
    <div className='flex gap-4'>
    <Button color='bright-sun.4' variant='light'onClick={handlePost}>Publish Job</Button>
    <Button color='bright-sun.4' variant='outline' onClick={handleDraft}>Save as Draft</Button>
    </div>
      </div>
    </div>
  )
}

export default PostJob