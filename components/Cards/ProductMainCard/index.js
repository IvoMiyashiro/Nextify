import { useContext, useEffect, useState } from 'react';

import { addToCart } from '../../../actions/cart';
import { CartContext } from '../../../context/CartContext';
import { ProductCard } from './ProductCard';
import { ProductListCard } from './ProductListCard';

export const ProductMainCard = ({ product, productDisplay = 'card' }) => {
   const { cartState, dispatch } = useContext(CartContext);
   const [isInCart, setIsInCart] = useState(false);

   useEffect(() => {
      if (cartState.length === 0) {
         setIsInCart(false);
      }

      cartState.map((cartItem) => {
         if (cartItem.id === product.id) {
            setIsInCart(true);
         }
      });

   }, [cartState, product]);

   const handleSetItemToCart = () => {
      dispatch(addToCart(product));
      window.localStorage.setItem('cart', JSON.stringify(cartState));
   };


   return (
      <>
         {
            productDisplay === 'card'
               ? (
                  <ProductCard
                     product={product}
                     isInCart={isInCart}
                     handleSetItemToCart={handleSetItemToCart}
                  />
               )
               : (
                  <ProductListCard
                     product={product}
                     isInCart={isInCart}
                     handleSetItemToCart={handleSetItemToCart}
                  />
               )
         }
      </>
   );
};
