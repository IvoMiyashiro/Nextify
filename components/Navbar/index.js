import { useEffect, useRef, useState } from 'react';

import { CartMenu } from '../CartMenu';
import { BottomNav } from './BottomNav';
import { TopNav } from './TopNav';
import { MobileMenu } from './MobileMenu';
import { SocialMediaBar } from './SocialMediaBar';

export const Navbar = () => {
   const [isCartOpen, setCartOpen] = useState(false);
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [isScrolling, setIsScrolling] = useState(false);

   const navRef = useRef(null);

   useEffect(() => {

      const handleScroll = () => {
         setIsScrolling(true);
         if (navRef.current.offsetTop === 0) {
            setIsScrolling(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <header className={`w-full sticky top-0 z-50 ${isScrolling ? 'bg-white shadow-md' : 'bg-transparent'}`} ref={navRef}>
         <SocialMediaBar />
         <nav className={`relative z-20 flex flex-col justify-center py-1 md:px-0  md:gap-3 ${isScrolling ? 'bg-white' : 'bg-transparent'}`}>
            <div className="px-4 md:px-0 md:w-4/5 md:mx-auto md:my-0 max-w-screen-lg">
               <TopNav
                  setCartOpen={setCartOpen}
                  setMenuOpen={setMenuOpen}
               />
            </div>
         </nav>
         <BottomNav isScrolling={isScrolling} />
         <CartMenu isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
         <MobileMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </header>
   );
};
