import { useRef, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';

import { CartContext } from '../../context/CartContext';
import { CartItems } from './CartItems';

export const CartMenu = ({ isCartOpen, setCartOpen }) => {
   const { cartState } = useContext(CartContext);
   const cartModalRef = useRef(null);

   const handleCloseModalBackground = (e) => {
      if (e.target == cartModalRef.current) {
         setCartOpen(false);
      }
   };

   const handleCloseModalButton = () => {
      setCartOpen(false);
   };

   return (
      <div>
         <section
            className={`fixed top-0 w-full h-screen bg-black bg-opacity-50 overflow-hidden  z-40 ${isCartOpen ? 'w-full' : 'w-0'}`}
            ref={cartModalRef}
            onClick={handleCloseModalBackground}
         ></section>
         <section
            className={`fixed z-40 top-0 right-0 bg-white h-screen flex flex-col justify-between overflow-hidden transition-width duration-200 ease-in-out ${isCartOpen ? 'w-full md:w-96' : 'w-0'}`}
         >
            <button className="absolute right-6 top-5">
               <FaTimes className="w-5 h-5" onClick={handleCloseModalButton} />
            </button>
            <div className="flex flex-col gap-2">
               <section className="bg-gray-200 p-3 rounded-lg m-2">
                  <h1 className="text-center font-bold text-xl tracking-wider md:text-2x1">
                     MY CART
                  </h1>
               </section>
            </div>
            {cartState.length ? (
               <CartItems cartState={cartState} />
            ) : (
               <div className="h-full flex items-center justify-center text-gray-500 text-lg italic">
                  <p>Your cart is empty</p>
               </div>
            )}
         </section>
      </div>
   );
};
