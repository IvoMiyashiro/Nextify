import { useContext, useEffect } from 'react';
import Image from 'next/image';

import { removeFromCart } from '../../../actions/cart';
import { CartContext } from '../../../context/CartContext';
import { Counter } from '../../Counter';
import { BsTrash } from 'react-icons/bs';

export const ProductCartCard = ({ cartItem, setTotalPrice }) => {
   const { dispatch } = useContext(CartContext);

   useEffect(() => {
      setTotalPrice((prev) => prev + Number(cartItem.variants[0].price));
   }, [cartItem.variants, setTotalPrice]);

   const handleRemoveItem = () => {
      dispatch(removeFromCart(cartItem.id));
      setTotalPrice(
         (prev) => prev - Number(cartItem.variants[0].price) * cartItem.quantity
      );
   };

   return (
      <div className="relative flex gap-4 h-32 hover:b py-4 px-2 group">
         <button
            className="w-6 h-6 absolute right-0 top-0 z-10 md:hidden group-hover:block"
            onClick={handleRemoveItem}
         >
            <BsTrash className="w-5 h-5" />
         </button>
         <section className="relative w-24 h-24">
            <Image
               src={cartItem.images[0].src}
               alt={cartItem.title}
               layout="fill"
               objectFit="contain"
            />
         </section>
         <section className="flex w-full flex-col justify-between">
            <h3 className="text-md md:text-lg font-bold">{cartItem.title}</h3>
            <div className="flex justify-between">
               <Counter
                  setTotalPrice={setTotalPrice}
                  cartItem={cartItem}
                  dispatch={dispatch}
               />
               <section className="text-right">
                  <p className="text-sm line-through text-gray-400">
                     ${cartItem.variants[0].compareAtPrice}
                  </p>
                  <p className="text-lg font-bold text-purple-500">
                     $
                     {(cartItem.variants[0].price * cartItem.quantity).toFixed(
                        2
                     )}
                  </p>
               </section>
            </div>
         </section>
      </div>
   );
};
