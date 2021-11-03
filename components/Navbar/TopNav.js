import { useContext } from 'react';
import Link from 'next/link';
import { BsCart2 } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { Searchbar } from '../Searchbar';

export const TopNav = ({ setCartOpen, setMenuOpen }) => {
   const { cartState } = useContext(CartContext);

   const handleOpenModal = () => {
      setCartOpen(true);
   };

   const handleOpenMenu = () => {
      setMenuOpen(prev => !prev);
   };

   return (
      <section className=" relative top-0 z-20 flex justify-between items-center h-14">
         <section>
            <Link href="/">
               <a className="cursor-pointer">
                  <h3 className="text-title font-extrabold text-2xl">
                     Nextify
                  </h3>
               </a>
            </Link>
         </section>
         <section className="w-3/5 mx-3 md:mx-0">
            <Searchbar />
         </section>
         <section>
            <ul className="flex items-center gap-4 md:gap-8">
               <li className="relative">
                  <button onClick={handleOpenModal}>
                     <BsCart2 className="h-6 w-6" />
                  </button>
                  {cartState.length !== 0 && (
                     <div className="bg-purple-500 w-4 h-4 font-bold text-sm text-white absolute flex items-center justify-center -top-1 -right-2 rounded-full">
                        {cartState.length}
                     </div>
                  )}
               </li>
               <li className="md:hidden">
                  <button onClick={handleOpenMenu}>
                     <FaBars className="h-6 w-6 mt-1" />
                  </button>
               </li>
            </ul>
         </section>
      </section>
   );
};
