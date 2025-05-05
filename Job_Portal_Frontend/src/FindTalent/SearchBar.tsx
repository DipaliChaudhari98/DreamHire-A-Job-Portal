import React, { useState } from 'react'

import { dropdownData } from '../Data/JobsData'
import { Button, Collapse, Divider, Input, RangeSlider } from '@mantine/core'
import MultiInput from '../FindJobs/MultiInput';
import { searchFields } from '../Data/Talentdata';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../Slices/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const SearchBar = () => {
  const matches = useMediaQuery('(max-width:475px)');
  const [opened, { toggle }] = useDisclosure(false);

  const dispatch = useDispatch();
  const [value, setvalue] = useState<[number, number]>([0, 50]);
  const [name, setName] = useState('');

  const handleChange = (name: any, event: any) => {
    if (name == "exp") dispatch(updateFilter({ exp: event }));
    else {
      setName(event.currentTarget.value);
      dispatch(updateFilter({ name: event.target.value }));
    }
  }
  return (
    <div>
      <div className='flex justify-end'>
        {matches && <Button onClick={toggle} variant='outline' m="sm" radius="lg" color='bright-sun.4' autoContrast>{opened ? "Close" : "Filters"}</Button>}
      </div>
      <Collapse in={(opened || !matches)}>
        <div className='flex px-5 py-8 lg-mx:flex-wrap items-center !text-mine-shaft-100 '>
          <div className='flex items-center  lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%]  xs-mx:w-full xs-mx:mb-1'>
            <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2'><IconUserCircle size={20} /></div>
            <Input defaultValue={name} onChange={(e) => handleChange("name", e)} variant='unstyled' placeholder='Talent Name' className='[&_input]:!placeholder-mine-shaft-200' />
          </div>
          {
            searchFields.map((item, index) => <React.Fragment key={index}><div key={index} className='w-1/5 hover:[&_.mantine-PillGroup-group]:cursor-pointer lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full  xs-mx:mb-1'>
              <MultiInput {...item} />
            </div>
              <Divider className='sm-mx:hidden' mr="xs" size="xs" orientation='vertical' />
            </React.Fragment>)
          }
          <div className='w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%] sm-mx:w-[48%]  xs-mx:w-full  xs-mx:mb-1'>   {/*[&_.mantine-Slider-label]:!translate-y-10 */}
            <div className='flex justify-between text-sm'>
              <div>Experience(Year)</div>
              <div> {value[0]} - {value[1]}</div>
            </div>
            <RangeSlider onChangeEnd={(e) => handleChange("exp", e)} min={1} max={50} size='xs' minRange={1} value={value} onChange={setvalue} color='bright-sun.4' labelTransitionProps={{ transition: 'skew-down', duration: 150, timingFunction: 'linear' }} />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default SearchBar