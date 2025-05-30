import React from 'react'
import AnimatedOnScrollSection from "../../animations/AnimatedOnScrollSection"

export default function SingleMedia({ el, i }) {
    return (
        <AnimatedOnScrollSection className="flex w-full flex-col gap-5 sm:w-[48%] md:w-[30%] lg:w-[23%]">
            <div className="relative flex h-fit cursor-pointer flex-col rounded-xl bg-white p-8 shadow-md">
                <h1 className='text-slate-700 text-xl font-bold'>{el.fileName}</h1>
                <button
                    className=" mt-10 mb-10 rounded border-3 border-slate-700 bg-white p-5 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-110"
                    onClick={() => navigator.clipboard.writeText(`http://localhost:5000/${el.path}`)}
                >Copy</button>
            </div>
        </AnimatedOnScrollSection>
    )
}
