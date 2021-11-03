import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

export const SocialMediaBar = () => {
   return (
      <div className="py-1 px-4 md:px-0 md:my-0 bg-black z-30 relative top-0">
         <div className="md:w-4/5 md:mx-auto max-w-screen-lg flex justify-between items-center">
            <p className="text-white text-sm"> <span className="font-bold"> FREE SHIPPING </span> for all order over $200</p>
            <div className="flex gap-3">
               <AiOutlineWhatsApp className="text-white text-xl" />
               <AiOutlineInstagram className="text-white text-xl" />
               <AiOutlineFacebook className="text-white text-xl" />
            </div>
         </div>

      </div>
   );
};
