import React, { useEffect, useState } from 'react'
import RateFormContainer from './ratePageConteners/RateFormContainer'
import ShowRates from './ratePageConteners/ShowRates'
import { useFetch } from '../hooks/useFetch'

export default function RatePage() {
  const { data, isPending, doFetch } = useFetch()
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  useEffect(() => {
    doFetch("/review", {
      method: "GET"
    })
  }, [refreshTrigger])

  const refreshData = () => setRefreshTrigger(prev => prev + 1)

  const sortedData = data ? [...data].sort((a, b) => b.rating - a.rating) : []

  return (
    <div className='text-white'>
      <RateFormContainer onReviewAdded={refreshData} />
      <ShowRates data={sortedData} isPending={isPending} />
    </div>
  )
}
