import React, { useState } from 'react'
import fields from '../Data/Profile'
import SelectInput from './SelectInput'
import { Button, Checkbox, Textarea, TextInput } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';
import { useMediaQuery } from '@mantine/hooks';

const CertiInput = (props:any) => {
const select=fields;
const profile=useSelector((state:any)=>state.profile);
const dispatch=useDispatch();

 const form = useForm({
      mode: 'controlled',
      validateInputOnChange:true,
      initialValues: { name: '', issuer: '',issueDate : '' ,certificateId:''},
      validate:{
        name:isNotEmpty("Name is Required"),
        issuer:isNotEmpty("Company or Issuer is Required"),
        issueDate:isNotEmpty("Date is Required"),
        certificateId:isNotEmpty("Location is Required"),
      }
    });

    const handleSave=()=>{
      const toISOStringNoon = (date: Date) => {  //We took this function because when we select FEB 2018 then it saves it as JAN 2018 because of ISO and UTC format 
        const d = new Date(date);
        d.setHours(12, 0, 0, 0); 
        return d.toISOString();
      };
    
      form.validate();
      if(!form.isValid())return;
      let certi=[...profile.certifications];
      certi.push(form.getValues());
      certi[certi.length-1].issueDate = toISOStringNoon(certi[certi.length-1].issueDate);
      let updatedProfile={...profile,certifications:certi};
  props.setEdit(false);
  dispatch(changeProfile(updatedProfile));
  successNotification("Success", "Certificate Added Successfully");

    }
  return (

    <div className='flex flex-col gap-3'>
        <div  className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex gap-10 [&>*]:w-1/2 md-mx:gap-5 xs-mx:[&>*]:w-full xs-mx:flex-wrap'>
         <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder='Enter Title'/>
        <SelectInput form={form} name="issuer" {...select[1]} />
        </div>
        <div className='flex gap-10 [&>*]:w-1/2 md-mx:gap-5 xs-mx:[&>*]:w-full xs-mx:flex-wrap'>

           <MonthPickerInput withAsterisk {...form.getInputProps("issueDate")}
           maxDate={new Date()}
           label="Issue Date"
           placeholder="Pick date"
         />
         <TextInput label="Certificate ID" withAsterisk placeholder='Enter ID' {...form.getInputProps("certificateId")} />

        </div>
        <div className='flex gap-5'>
            <Button onClick={handleSave} color='green.8' variant='light'>Save</Button>
            <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>

        </div>
    </div>
  )
}

export default CertiInput;