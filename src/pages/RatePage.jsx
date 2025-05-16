import React from 'react'
import RateFormContainer from './ratePageConteners/RateFormContainer'
import ShowRates from './ratePageConteners/showRates'

export default function RatePage() {
  return (
    <div className='text-white'>
      <RateFormContainer/>
      <ShowRates/>
    </div>
  )
}
