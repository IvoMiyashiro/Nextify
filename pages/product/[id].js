import { useContext, useEffect, useState } from 'react';
import { MdOutlineReplay } from 'react-icons/md';
import { AiOutlineLock, AiOutlineTags } from 'react-icons/ai';
import { addToCart } from '../../actions/cart';
import { client } from '../../utils/shopify';

import { Footer } from '../../components/Footer';
import { CartContext } from '../../context/CartContext';
import { BestSellers } from '../../components/view/home/BestSellers';
import { HoverImagesCarrousel } from '../../components/Carrousel/HoverImagesCarrousel';
import { HeadPages } from '../../components/Heads/HeadPages';

export default function Products({ product, bestSellers }) {

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
   }, [cartState, product.id]);

   const handleSetItemToCart = () => {
      dispatch(addToCart(product));
      window.localStorage.setItem('cart', JSON.stringify(cartState));
   };

   return (
      <>
         <HeadPages
            title={product.title}
            description={product.description}
         />
         <div className="flex flex-col justify-between -mt-24">
            <div className="flex max-w-screen-lg w-11/12 md:w-4/5 mx-auto my-0 md:flex-row flex-col justify-around gap-6 md:pt-48 pt-32 relative">
               <div className="my-0 mx-auto md:h-productCarrousel md:w-productCarrousel rounded-xl md:sticky top-44">
                  <HoverImagesCarrousel
                     imgs={product.images.map(img => { return img; })}
                     title={product.title}
                  />
               </div>
               <div className="md:w-productInfo flex flex-col box-shadow p-6 rounded-xl">
                  <section>
                     <p className="text-sm text-gray-400">{product.vendor}</p>
                     <h3 className="md:text-3xl text-2xl h-12 leading-8 font-bold"> {product.title}</h3>
                  </section>
                  <section className="md:mt-12 mt-8">
                     <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-2">
                           <MdOutlineReplay className="text-xl text-indigo-600" />
                           <p className="text-gray-600">Free returns within 30 days.</p>
                        </li>
                        <li className="flex items-center gap-2">
                           <AiOutlineLock className="text-xl text-indigo-600" />
                           <p className="text-gray-600">Payments online 100% secure.</p>
                        </li>
                        <li className="flex items-center gap-2">
                           <AiOutlineTags className="text-xl text-indigo-600" />
                           <p className="text-gray-600">Best price guarantee.</p>
                        </li>
                     </ul>
                  </section>
                  <section className="mt-10">
                     <p className="line-through text-lg text-gray-500">$ {product.variants[0].compareAtPrice}</p>
                     <h3 className="text-3xl font-bold text-indigo-500">$ {product.variants[0].price}</h3>
                  </section>
                  <section className="flex md:flex-row flex-col md:gap-4 gap-2 mt-8">
                     <button
                        className="flex items-center md:mx-0 mx-auto my-0 justify-center h-12 md:w-44 w-full bg-black text-white font-bold text-lg"
                        disabled={!product.availableForSale || isInCart}
                        onClick={handleSetItemToCart}
                     >
                        {
                           product.availableForSale
                              ? isInCart
                                 ? 'Product in Cart'
                                 : 'Add to Cart'
                              : 'Out of stock'
                        }
                     </button>
                  </section>
                  <section className="mt-12">
                     <h3 className="font-bold text-xl">About this item</h3>
                     <div
                        className="mt-4 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                     >
                     </div>
                  </section>
               </div>
            </div>
         </div>
         <BestSellers products={bestSellers[0].products} />
         <Footer />
         <style jsx>
            {`
               .box-shadow {
                  box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.014),
                     0px 0px 2px rgba(0, 0, 0, 0.02),
                     0px 0px 3.8px rgba(0, 0, 0, 0.025),
                     0px 0px 6.7px rgba(0, 0, 0, 0.03),
                     0px 0px 12.5px rgba(0, 0, 0, 0.036),
                     0px 0px 30px rgba(0, 0, 0, 0.05);
                  transition: 0.2s ease-in-out;
               }
            `}
         </style>
      </>
   );
}

export async function getServerSideProps({ params }) {
   const { id } = params;
   const product = await client.product.fetchByHandle(id);
   const collections = await client.collection.fetchAllWithProducts();
   const bestSellers = collections.filter(collection => collection.handle === 'best-sellers');

   return {
      props: {
         product: JSON.parse(JSON.stringify(product)),
         bestSellers: JSON.parse(JSON.stringify(bestSellers))
      },
   };
}
