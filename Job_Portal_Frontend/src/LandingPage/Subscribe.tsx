import { Button, TextInput } from '@mantine/core'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around'>
     <div className="text-4xl w-2/5  font-semibold text-mine-shaft-100 text-center">
   Never Wants to Miss Any <span className="text-bright-sun-400">Job News ?</span> 
</div>
<div className='flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-xl'>
    <TextInput variant="unstyled" placeholder='Your@gmail.com' className="[&_input]:text-mine-shaft-100  font-semibold" size='xl'/>
    <Button color='bright-sun.4' variant='filled' size='lg' className='rounded-lg'>Subscribe</Button>
</div>
    </div>
  )
}

export default Subscribe