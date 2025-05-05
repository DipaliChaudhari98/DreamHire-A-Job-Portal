import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData } from '../Data/JobsData'
import { Button, Collapse, Divider, RangeSlider } from '@mantine/core'
import { useDispatch } from 'react-redux'
import { updateFilter } from '../Slices/FilterSlice'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

const SearchBar = () => {
const matches=useMediaQuery('(max-width:475px)');
  const dispatch = useDispatch();
  const [value, setvalue] = useState<[number, number]>([0, 300]);
const [opened ,{toggle}]=useDisclosure(false);

  const handleChange = (event: any) => {
    dispatch(updateFilter({ salary: event }));
  }

  return (
    <div>
      <div className='flex justify-end'>
     {matches && <Button onClick={toggle}variant='outline' m="sm" radius="lg" color='bright-sun.4' autoContrast>{opened ?"Close":"Filters"}</Button>}
      </div>
    <Collapse in={(opened || !matches)}>
    <div className='flex lg-mx:flex-wrap px-5 py-8 items-center !text-mine-shaft-100'>
      {
        dropdownData.map((item, index) => <React.Fragment key={index}><div className='w-1/5 hover:[&_.mantine-PillGroup-group]:cursor-pointer lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full  xs-mx:mb-1'>
          <MultiInput {...item} />
        </div>
          <Divider className='sm-mx:hidden' mr="xs" size="xs" orientation='vertical' />
        </React.Fragment>)
      }
      <div className='w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%] sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1'>   {/*[&_.mantine-Slider-label]:!translate-y-10 */}
        <div className='flex justify-between text-sm'>
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider min={1} max={300} minRange={1} onChangeEnd={(e) => handleChange(e)} size='xs' value={value} onChange={setvalue} color='bright-sun.4' labelTransitionProps={{ transition: 'skew-down', duration: 150, timingFunction: 'linear' }} />
      </div>
    </div>
    </Collapse>
    </div>
  )
}

export default SearchBar