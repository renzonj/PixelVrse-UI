import { Inter } from 'next/font/google'
import React from 'react'
interface CardProps {
   children: React.ReactNode
   className?: string
}

const DisplayCard1 = ({ children, className }: CardProps) => {
   return (
      <div className={`border rounded-xl p-3 w-full bg-gradient-to-br from-background to-primary-shade ${className}`}>
         {children}
      </div>
   )
}

const DisplayCard2 = ({ children, className }: CardProps) => {
   return (
      <div className={`flex flex-col rounded-2xl p-4 text-left w-full bg-primary-shade ${className}`}>
         {children}
      </div>
   )
}

const DisplayCard3 = ({ children, className }: CardProps) => {
   return (
      <div className={`flex flex-col border overflow-hidden rounded-2xl p-4 text-left w-full bg-primary-shade ${className}`}>
         {children}
      </div>
   )
}

const TaskCard = ({ children, className }: CardProps) => {
   return (
      <div className={`flex flex-col h-36 border overflow-hidden rounded-2xl px-4 py-3 text-left w-full
      bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/50 via-primary-shade to-primary-shade
      ${className}`}>

         {children}
      </div>
   )
}

interface DisplayTableProps {
   rowData: User[];
   className?: string;
}

interface User {
   name: string;
   level: number;
   refs: number;
   user?: boolean;
}

const DisplayTable = ({ rowData, className }: DisplayTableProps) => {
   const colors = ['gold', 'salmon', 'orange', 'gray']; // Muted color for the rest

   return (
      <div className={`flex flex-col relative border p-0 max-h-[50vh] overflow-scroll no-scrollbar rounded-2xl text-left w-full bg-primary-shade ${className}`}>
         {rowData.map((user, index) => (
            <div key={index} className={`w-full border-0 border-b py-3 ${user.user ? 'bg-primary-contrast sticky bottom-0 top-0' : ''}`}>
               <div className='flex flex-start items-center gap-6 px-5'>
                  <h4 style={{ color: colors[Math.min(index, colors.length - 1)] }}>{index + 1}</h4>
                  <div className='flex-row-between w-full'>
                     <div className='flex-col-start'>
                        <h4>{user.name}</h4>
                        <p className='text-foreground text-xs'>{user.level} lvl</p>
                     </div>
                     <p className='text-foreground'>{user.refs} refs</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

const IconContainer = ({ children, className }: CardProps) => {
   return (
      <div className={`flex-center h-12 max-[320px]:h-10 w-fit border rounded-2xl p-1 max-[320px]:p-0 text-left bg-gradient-to-br from-background to-primary-shade aspect-square cursor-pointer hover:bg-primary-contrast ${className}`}>
         {children}
      </div>
   )
}

const SmIconContainer = ({ children, className }: CardProps) => {
   return (
      <div className={`flex-center h-9 max-[320px]:h-8 w-fit border rounded-lg p-1 max-[320px]:p-0 text-left bg-gradient-to-br from-background to-primary-shade aspect-square cursor-pointer hover:bg-primary-contrast ${className}`}>
         {children}
      </div>
   )
}

const ItemContainer = ({ children, className }: CardProps) => {
   return (
      <div className={`flex-center h-12 max-[320px]:h-10 w-fit border rounded-2xl p-3 max-[320px]:p-2 text-left bg-gradient-to-br from-background to-primary-shade cursor-pointer hover:bg-neutral ${className}`}>
         {children}
      </div>
   )
}

const GameObjContainer = ({ children, className }: CardProps) => {
   return (
      <div className='flex-row-start -ml-16 gap-3'>
         {React.Children.map(children, (child, index) => (
               <div key={index} className={`flex-row-center h-14 aspect-square max-[320px]:h-12 w-fit border border-b-neutral/50 border-r-neutral/50 rounded-2xl p-3 max-[320px]:p-2 text-left bg-primary-shade cursor-pointer hover:bg-primary-shade${className} `}>
                  {child}
               </div>
         ))}
      </div>
   )
}

export {
   DisplayCard1,
   DisplayCard2,
   DisplayCard3,
   DisplayTable,
   TaskCard,
   IconContainer,
   GameObjContainer,
   ItemContainer,
   SmIconContainer
}