import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { CategoriesMenu } from './CategoriesMenu';

export const BottomNav = ({ isScrolling }) => {
   const menuRef = useRef(null);

   useEffect(() => {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
         let currentScrollPos = window.pageYOffset;
         if (prevScrollpos > currentScrollPos) {
            menuRef.current.style.top = '85px';
         } else {
            menuRef.current.style.top = '-80px';
         }
         prevScrollpos = currentScrollPos;
      };
   }, []);

   return (
      <section
         ref={menuRef}
         className={`absolute md:w-full pt-3 mx-auto my-0 z-0 transition-top duration-200 ease-in-out ${isScrolling ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
         <ul className="flex gap-10 hidden md:flex md:w-4/5 mx-auto my-0 max-w-screen-lg">
            <Link href="/all-products" passHref>
               <li className="border-b-2 border-transparent hover:border-purple-600 pb-1 cursor-pointer font-bold">
                  All products
               </li>
            </Link>
            <li className="font-body border-b-2 border-transparent hover:border-purple-600 pb-1 group">
               <button className="flex items-center gap-2 font-bold text-normal relative">
                  Categories
                  <BiChevronDown className="h-4 w-4" />
                  <CategoriesMenu />
               </button>
            </li>
            <Link href="/about" passHref>
               <li className="border-b-2 border-transparent hover:border-purple-600 pb-2 cursor-pointer font-bold">
                  About
               </li>
            </Link>
            <Link href="/contact" passHref>
               <li className="border-b-2 border-transparent hover:border-purple-600 pb-2 cursor-pointer font-bold">
                  Contact
               </li>
            </Link>
         </ul>
      </section>
   );
};
