import React from 'react'
import StarRate from './StarRate'
import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection";

export default function ShowRates({ data, isPending, limit }) {
  return (
    <div className="p-4">
      {isPending && <p>Loading...</p>}
      <div className="flex flex-wrap -mx-2 mb-25 mt-25">

        {
          !limit && data && data.map((el, i) => (
            <div key={i} className="w-full md:w-1/2 px-2 mb-4">
              <AnimatedOnScrollSection>
                <div className="text-black flex h-full flex-col items-start justify-center gap-3 rounded-xl bg-white p-5 shadow">
                  {el.user && (
                    <p><strong>{el.user.firstName} {el.user.lastName}</strong></p>
                  )}
                  <StarRate rateSetting={false} rating={el.rating} />

                  {el.content.length > 75
                    ? <p className="break-words cursor-pointer">{el.content.substring(0, 45) + "… kliknij aby zobaczyć więcej"}</p>
                    : <p>{el.content}</p>}

                </div>
              </AnimatedOnScrollSection>
            </div>
          ))
        }
        {
          limit && data && data.slice(0, 6).map((el, i) => (
            <div key={i} className="w-full md:w-1/2 px-2 mb-4">
              <AnimatedOnScrollSection>
                <div className="text-black flex h-full flex-col items-start justify-center gap-3 rounded-xl bg-white p-5 shadow">
                  {el.user && (
                    <p><strong>{el.user.firstName} {el.user.lastName}</strong></p>
                  )}
                  <StarRate rateSetting={false} rating={el.rating} />

                  {el.content.length > 75
                    ? <p className="break-words cursor-pointer">{el.content.substring(0, 45) + "… kliknij aby zobaczyć więcej"}</p>
                    : <p>{el.content}</p>}

                </div>
              </AnimatedOnScrollSection>
            </div>
          ))
        }
      </div>
    </div>
  )
}
