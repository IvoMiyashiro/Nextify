import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { ProductCartCard } from '../Cards/ProductCartCard';
import { Loader } from '../Loader';
import { client } from '../../utils/shopify';

export const CartItems = ({ cartState }) => {
   const [totalPrice, setTotalPrice] = useState(0);
   const [isLoading, setLoading] = useState(false);

   const handleCreateCheckout = async () => {
      try {
         setLoading(true);
         const { id } = await client.checkout.create();

         const lineItemsToAdd = cartState.map((item) => {
            return {
               variantId: item.variants[0].id,
               quantity: Number(item.quantity),
            };
         });

         const checkoutData = await client.checkout.addLineItems(
            id,
            lineItemsToAdd
         );

         window.open(checkoutData.webUrl, '_blank');
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   return (
      <div className="flex flex-col justify-between h-full gap-4 m-2">
         <section>
            <ul className="flex flex-col gap-2 m-2 h-72 md:max-h-custom md:h-auto overflow-auto">
               {cartState.map((cartItem) => {
                  return (
                     <li key={cartItem.id}>
                        <ProductCartCard
                           cartItem={cartItem}
                           setTotalPrice={setTotalPrice}
                        />
                     </li>
                  );
               })}
            </ul>
         </section>
         <section className="flex flex-col gap-4">
            <section className="flex justify-between">
               <h3 className="font-bold text-xl">Total:</h3>
               <p className="font-bold text-xl">${totalPrice.toFixed(2)}</p>
            </section>
            <button
               className="hover:bg-purple-500 flex items-center justify-center bg-purple-600 text-white h-14 rounded-lg text-center font-bold text-lg w-full tracking-wider"
               onClick={handleCreateCheckout}
            >
               {isLoading ? (
                  <Loader />
               ) : (
                  <p className="flex justify-center gap-2">
                     Buy now
                     <BiChevronRight className="w-4 h-4 mt-1" />
                  </p>
               )}
            </button>
         </section>
      </div>
   );
};
