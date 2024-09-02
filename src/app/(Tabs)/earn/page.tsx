import Header from '@/components/header'
import { IconContainer, ItemContainer } from '@/components/ui/display-card'
import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineTimelapse } from 'react-icons/md'
import { RiCopperDiamondFill } from 'react-icons/ri'

const Earn = () => {

   const data = [
      {
         dailyLimit: 291.6,
         balance: 587.67,
         time: "7:57:03",
         level: 1,
         amountToClaim: 506.25,
      },
   ]

   return (
      <>
         <Header />

         <ItemContainer className='relative flex-col w-full h-auto max-[320px]:h-auto mt-5'>
            <div className='flex-row-between w-full'>
               <div className='flex-col space-y-2'>
                  <div className='flex-row-center gap-2'>
                     <p className='text-xs text-muted-foreground'>Daily Limit </p>
                     <IoIosArrowForward size="16" />
                  </div>
                  <div className='flex-row-center gap-2'>
                     <IconContainer className='h-8 rounded-xl'>
                        <AiFillThunderbolt size="19" className='text-purple-primary' />
                     </IconContainer>
                     <h4 className='pb-2'>{data[0].dailyLimit}k</h4>
                  </div>
               </div>

               <div className='flex-col-end space-y-2'>
                  <p className='text-xs text-muted-foreground'>Balance</p>
                  <div className='flex-row-center gap-2 text-gold-primary'>
                     <h4 className='pb-2'>{data[0].balance}k</h4>
                     <RiCopperDiamondFill size="23" className='mb-2' />

                  </div>
               </div>
            </div>
            <div className='relative flex-center w-full'>
               <svg width="140" height="140" viewBox="-24.25 -24.25 242.5 242.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute transform -rotate-90 translate-y-1/4 z-10">
                  <circle r="82" cx="97" cy="97" fill="#2b1a32"></circle>
                  <rect x="60" y="82" width="80" z-index="50" height="40" fill="#ae62d4" rx="20" ry="20" style={{ transform: "rotate(90deg) translateY(-115px)" }}></rect>
                  <text x="97" y="105" fill="#d9d9d9" font-size="25px" font-weight="bold" text-anchor="middle" style={{ transform: "rotate(90deg) translateY(-110px)" }}>{`${data[0].level}/3`}</text>
                  <text x="97" y="114px" fill="#ffffff" font-size="32px" font-weight="bold" text-anchor="middle" style={{ transform: "rotate(90deg) translateY(-230px)" }}>lvl</text>
                  <text x="97" y="114px" fill="#ffffff" font-size="42px" font-weight="bold" text-anchor="middle" style={{ transform: "rotate(90deg) translateY(-180px)" }}>{data[0].level}</text>
               </svg>
               <svg width="140" height="140" viewBox="-24.25 -24.25 242.5 242.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute transform -rotate-[83deg] translate-y-1/4">
                  <circle r="87" cx="97" cy="97" fill="transparent" stroke="#1d1d1f" stroke-width="10" stroke-dasharray="546.36px" stroke-dashoffset="0"></circle>
                  <circle r="87" cx="97" cy="97" stroke="#575757" stroke-width="11" stroke-linecap="butt" stroke-dashoffset="375px" fill="transparent" stroke-dasharray="537px"></circle>
               </svg>
               <svg width="140" height="140" viewBox="-24.25 -24.25 242.5 242.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute transform rotate-[37deg] translate-y-1/4">
                  <circle r="87" cx="97" cy="97" stroke="#575757" stroke-width="11" stroke-linecap="butt" stroke-dashoffset="375px" fill="transparent" stroke-dasharray="537px"></circle>
               </svg>
               <svg width="140" height="140" viewBox="-24.25 -24.25 242.5 242.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute transform rotate-[157deg] translate-y-1/4">
                  <circle r="87" cx="97" cy="97" stroke="#ae62d4" stroke-width="11" stroke-linecap="butt" stroke-dashoffset="375px" fill="transparent" stroke-dasharray="537px"></circle>
               </svg>
            </div>
         </ItemContainer>

         <div className={`flex-col-center h-60 max-[320px]:h-10 w-full
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-primary/30 via-purple-primary/10 to-background
            `}>

            <div className='h-40 w-40 border m-10 rounded-xl border-zinc-700'></div>

            <div className='relative w-full'>
               <button className='absolute main-button bg-gold-primary text-background w-full h-12 p-0 font-bold'>
                  {data[0].amountToClaim} <span className='text-gray-accent/50'>CLAIM</span>
               </button>
               <p className='absolute py-1 px-2 bg-gold-secondary rounded-tl-2xl rounded-bl-2xl flex-col-center text-2xs font-bold text-gray-secondary'>
                  <MdOutlineTimelapse size="20" />
                  {data[0].time}
               </p>
            </div>
         </div>

         <div className='flex-row-between rounded-2xl my-16 gap-3 p-4 text-white bg-purple-secondary'>
            <div className='flex-col-start space-y-5'>
               <h3 className='font-extrabold'>PIXELVERSE BOTS: <br />BLACK PUMA</h3>
               <p className=''>GET YOUR NFT</p>
            </div>
            <div className='h-20 w-20 border rounded-xl border-zinc-700'>
            </div>
         </div>

      </>
   )
}

export default Earn