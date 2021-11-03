import { IoPaperPlaneOutline } from 'react-icons/io5';
import { MdOutlineReplay } from 'react-icons/md';
import { AiOutlineLock, AiOutlineTags } from 'react-icons/ai';
import { HeroCardChildren } from '../../Cards/HeroCardChildren';

export const HeroCard = () => {
   return (
      <div className="w-full md:-mt-10 -mt-20 p-4 md:block">
         <div className="flex flex-wrap gap-6 md:justify-around max-w-screen-lg md:w-4/5 mx-auto my-0 bg-white py-5 rounded-md shadow-md p-2">
            <HeroCardChildren
               icon={IoPaperPlaneOutline}
               title={'Free Shipping'}
               text={'Orders Over $200'}
            />
            <HeroCardChildren
               icon={MdOutlineReplay}
               title={'Free Returns'}
               text={'Within 30 days'}
            />
            <HeroCardChildren
               icon={AiOutlineLock}
               title={'100% Secure'}
               text={'Payments Online'}
            />
            <HeroCardChildren
               icon={AiOutlineTags}
               title={'Best Price'}
               text={'Guaranteed'}
            />
         </div>
      </div>
   );
};
