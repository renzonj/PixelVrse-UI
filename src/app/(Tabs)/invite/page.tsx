import { DisplayCard2 } from '@/components/ui/display-card'
import { GrDiamond } from 'react-icons/gr'

interface CardProps {
   title: string;
   points: number;
}

const Invite = () => {

   const cards: CardProps[] = [
      { title: 'Invite friends', points: 2000 },
      { title: 'Invite friends with premium', points: 10000 },
   ];

   return (
      <div className='flex flex-col justify-center text-center pt-10 text-muted-foreground'>
         <p className='text-muted-foreground uppercase'>Referral</p>
         <h2>INVITE FRIENDS</h2>

         <div className='grid grid-cols-2 gap-3 mt-6 mb-4 text-left'>
            {cards.map((card) => (
               <DisplayCard2 className='justify-between' key={card.title}>
                  <p>{card.title}</p>
                  <div className='flex items-center mt-5 mb-2 gap-2 text-gold-primary'>
                     <span className='rounded-full bg-gold-primary p-1 text-gray-secondary'>
                        <GrDiamond size="20"/>
                     </span>
                     <h3 className='font-bold'>+{card.points.toLocaleString()}</h3>
                  </div>
               </DisplayCard2>
            ))}
         </div>

         <h4>
            Score 5% of your buddies<br /> + an extra 1% from their referrals
         </h4>

         <DisplayCard2 className='my-10 gap-3 pb-5 text-white'>
            <p>MY REFERRALS <span className='text-purple-primary'> 0</span></p>
            <p className='text-muted-foreground'>
               {"You Don't Have Referrals Yet"}
            </p>
         </DisplayCard2>

         <button className='main-button'>
            Invite Friends
         </button>

      </div >
   )
}

export default Invite