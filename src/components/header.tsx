import React from 'react'
import { IconContainer, ItemContainer } from './ui/display-card'
import { Avatar, AvatarImage } from './ui/avatar'
import { RiCopperDiamondFill, RiWallet3Fill } from 'react-icons/ri'
import { TbDiamondFilled } from 'react-icons/tb'
import { BsFillQuestionCircleFill } from 'react-icons/bs'

const Header = () => {
   return (
      <header className='flex-row-between'>
         <ItemContainer className='gap-2'>
            <Avatar>
               <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h4>Always...</h4>
            <div className='flex-col pl-2 h-fit -space-y-1'>
               <p className='flex-row-center gap-1 font-semibold text-c1-secondary-base text-xs'>
                  <RiCopperDiamondFill /> 0
               </p>
               <p className='flex-row-center gap-1 font-semibold text-c1-primary-base text-xs'>
                  <TbDiamondFilled /> 0
               </p>
            </div>
         </ItemContainer>

         <div className='flex-row-center gap-1'>
            <IconContainer>
               <BsFillQuestionCircleFill size="20" />
            </IconContainer>

            <IconContainer>
               <RiWallet3Fill size="20" />
            </IconContainer>

            <IconContainer>
               <h4 className='-mt-2'>en</h4>
            </IconContainer>

         </div>
      </header>
   )
}

export default Header