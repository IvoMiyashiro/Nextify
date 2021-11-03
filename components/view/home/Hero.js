import Link from 'next/link';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';

export const Hero = () => {
   return (
      <div className="bg-custom h-screen max-h-section -mt-16 pt-28">
         <div className="max-w-screen-lg md:w-4/5 mx-auto my-0 md:mt-0 px-4 flex justify-center md:justify-between items-center">
            <section className="max-w-md text-center md:text-left">
               <h3 className="font-titletext-md font-extrabold text-2xl">
                  We are
               </h3>
               <h1 className="font-title font-extrabold text-7xl">
                  Nextify
               </h1>
               <p className="text-lg mt-6 text-gray-500">
                  An Online Shop created with Next.js, Shopify SDK and Tailwind
                  CSS.
               </p>
               <Link href="/all-products" passHref>
                  <a>
                     <button className="flex items-center md:mx-0 mx-auto my-0 justify-center gap-1 h-12 w-44 bg-black text-white font-bold text-lg mt-14 ">
                        Shop now
                        <BiChevronRight className="w-6 h-6 mt-0.5 left-to-right" />
                     </button>
                  </a>
               </Link>
            </section>
            <section className="relative justify-center items-center relative hidden md:flex w-hero h-hero">
               <Image
                  src="/hero.png"
                  alt="nextify"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
               />
            </section>
         </div>
      </div>
   );
};
