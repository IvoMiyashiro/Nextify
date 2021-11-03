import { FiMinus, FiPlus } from 'react-icons/fi';
import { updateQuantity } from '../../actions/cart';

export const Counter = ({ setTotalPrice, cartItem, dispatch }) => {
   const handlePlusValue = () => {
      setTotalPrice((prev) => prev + Number(cartItem.variants[0].price));
      dispatch(updateQuantity(cartItem, cartItem.quantity + 1));
   };

   const handleMinusValue = () => {
      if (cartItem.quantity === 1) return;
      setTotalPrice((prev) => prev - Number(cartItem.variants[0].price));
      dispatch(updateQuantity(cartItem, cartItem.quantity - 1));
   };

   return (
      <section className="flex items-center">
         <button
            className="p-0.5 bg-black text-white rounded-full"
            onClick={handleMinusValue}
         >
            <FiMinus className="w-4 h-4" />
         </button>
         <p className="w-8 text-center">{cartItem.quantity}</p>
         <button
            className="p-0.5 bg-black text-white rounded-full"
            onClick={handlePlusValue}
         >
            <FiPlus className="w-4 h-4" />
         </button>
      </section>
   );
};
