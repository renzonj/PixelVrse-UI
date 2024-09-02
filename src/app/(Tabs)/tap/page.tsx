import { DisplayTable, IconContainer } from '@/components/ui/display-card'
import { BsFillQuestionCircleFill } from 'react-icons/bs'

const Top = () => {

   const users = [
      { name: 'andly89898', level: 2, refs: 1927 },
      { name: 'maizisol', level: 1, refs: 11396 },
      { name: 'menman', level: 6, refs: 1353 },
      { name: 'alenadetkina', level: 1, refs: 1005 },
      { name: 'Destin6267', level: 2, refs: 752 },
      { name: 'jamesteve1221', level: 3, refs: 702 },
      { name: 'meganuniverse', level: 1, refs: 689 },
      { name: 'annesmith01', level: 3, refs: 612 },
      { name: 'henrypark99', level: 3, refs: 600 },
      { name: 'edgray44', level: 1, refs: 480, user: true },
      { name: 'crlof001', level: 2, refs: 472 },
      { name: 'johndoe2024', level: 4, refs: 240 },
      { name: 'janedoe99', level: 5, refs: 200 },
      { name: 'superuser1', level: 7, refs: 120 },
      { name: 'alexsmith87', level: 3, refs: 50 },
      { name: 'laurengray', level: 2, refs: 0 },
   ];

   return (
      <>
         <header className='border-0 border-b border-gray-accent'>
            <div className='flex-row-between'>
               <h2>
                  Leaderboard
               </h2>
               <IconContainer>
                  <BsFillQuestionCircleFill size="20" />
               </IconContainer>
            </div>

            <h4 className='text-purple-primary uppercase mt-4 mb-3'>
               Weekly Referrer
            </h4>
         </header>

         <div className='mt-3 mb-20 space-y-3'>

            <div className='flex-col-center bg-purple-primary p-5 rounded-3xl gap-1'>
               <p className='rounded-full py-2 px-3 border border-white'>Available now</p>
               <h1> Trade Pixfi </h1>
            </div>

            <DisplayTable rowData={users} />

         </div>
      </>
   )
}

export default Top