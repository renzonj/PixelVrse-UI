"use client"

import { GameObjContainer, TaskCard } from '@/components/ui/display-card'
import React, { useState } from 'react'
import { FaRegCircleCheck, FaRegCircleQuestion } from 'react-icons/fa6'
import Header from '@/components/header'

interface TaskCardProps {
   title: string;
   availability: string;
   buttonText: string;
   buttonClickHandler: () => void;
}

export const Tasks = ({ title, availability, buttonText, buttonClickHandler }: TaskCardProps) => (
   <TaskCard className='mt-3 uppercase flex-row-between'>
      <header className='flex-row-between w-full'>
         <h3>{title}</h3>
         <div className='flex-row-center gap-3'>
            <div className='flex-col text-right -space-y-1.5'>
               <p className='text-c1-neutral-base text-2xs font-bold'>Available in</p>
               <p className='text-c1-accent2-base text-2xs font-bold'>{availability}</p>
            </div>
            <FaRegCircleCheck size="18" className='text-c1-accent2-base' />
         </div>
      </header>
      <div className='flex-row-between w-full mt-5'>
            <div className='h-20 w-40 border rounded-xl border-c1-neutral-light'></div>
         <button
            className='main-button bg-c1-accent1-base text-c1-background w-28 h-12 p-0'
            onClick={buttonClickHandler}
         >
            {buttonText}
         </button>
      </div>
   </TaskCard>
);


export const Rewards = () => {
   const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

   const handleSpin = () => {
      setSelectedItemIndex(1)
   };

   return (
      <>
         <div className='border-0 border-b border-gray-accent mb-5'>
            <Header />
            <div className='flex-row flex gap-5 h-full '>
               <h4 className='h-full text-c1-primary-base pb-3 uppercase mt-4 border-0 border-b border-b-c1-primary-base'>
                  Rewards
               </h4>
               <h4 className='flex-row-center gap-2 text-c1-neutral-base pb-3  uppercase mt-4'>
                  Tasks
                  <span className='flex-center rounded-xl bg-c1-neutral-base p-1 text-c1-neutral-dark font-semibold text-xs h-5 w-7'>13</span>
               </h4>
            </div>
         </div>

         <h4 className='font-bold'>Your Tasks</h4>

         <TaskCard className='mt-3 uppercase flex-row-between'>
            <header className='flex-row-between w-full'>
               <h3>Wheel</h3>
               <div className='flex-row-center gap-3'>
                  <div className='flex-col text-right -space-y-1.5'>
                     <p className='text-c1-neutral-base text-2xs font-bold'>Available in</p>
                     <p className='text-c1-accent2-base text-2xs font-bold'>Now</p>
                  </div>
                  <FaRegCircleCheck size="18" className='text-c1-accent2-base' />
               </div>
            </header>

            <div className='relative w-full'>
               <div className='absolute left-6 -bottom-4 border-solid border-t-c1-primary-base border-t-8 border-x-transparent border-x-8 border-b-0'></div>
            </div>

            <div className='flex-row-between w-full'>
               <GameObjContainer>
                  {[...Array(4)].map((_, index) => (
                     <FaRegCircleQuestion
                        key={index}
                        size="23"
                        className={`${selectedItemIndex === index
                           ? 'text-c1-accent2-base' // Add glowing effect if selected
                           : ''
                           }`}
                     />
                  ))}
               </GameObjContainer>
               <button
                  className='main-button w-28 h-12 p-0 ml-3'
                  onClick={handleSpin}
               >
                  Spin
               </button>
            </div>
         </TaskCard>

         <Tasks
            title="Daily Combo"
            availability="Now"
            buttonText="Play"
            buttonClickHandler={handleSpin}
         />

         <Tasks
            title="Daily Reward"
            availability="Now"
            buttonText="Play"
            buttonClickHandler={handleSpin}
         />
      </>
   )
}

export default Rewards;