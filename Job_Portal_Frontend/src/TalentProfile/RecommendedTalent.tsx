import React from 'react'
import { talents } from '../Data/Talentdata'
import TalentCard from '../FindTalent/TalentCard'
import { useParams } from 'react-router-dom'

const RecommendedTalent = (props:any) => {

  const {id}=useParams();
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
        <div className='flex flex-col gap-5 flex-wrap'>
            {
                props?.talents?.map((talent:any,index:number)=>index <4 && id!=talent.id &&<TalentCard key={index} {...talent} />)
            }
        </div>
    </div>
  )
}

export default RecommendedTalent