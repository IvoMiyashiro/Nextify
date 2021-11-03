import Link from 'next/link';
import Image from 'next/image';

import { BsCart2 } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';


export const ProductListCard = ({ product, isInCart, handleSetItemToCart }) => {

   return (
      <>
         <div className="flex gap-4 w-full card-shadow rounded-md overflow-hidden relative">
            {
               !product.availableForSale
               &&
               <div className="absolute z-10 bottom-2 right-2 border-2 border-purple-500 px-1 bg-purple-200 bg-opacity-90 rounded">
                  <p className="text-sm text-purple-500 font-bold">Out of Stock</p>
               </div>
            }
            <section className="flex justify-center p-3 bg-custom w-32 h-full">
               <Link
                  href={`/product/${product.handle}`}
                  className="text-lg font-bold text-center cursor-pointer"
               >
                  <a className="relative w-32">
                     <Image
                        src={product.images[0].src}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                     />
                  </a>
               </Link>
            </section>
            <section className="flex flex-col justify-between py-4">
               <div>
                  <h3 className="text-sm text-gray-400">{product.vendor}</h3>
                  <Link
                     href={`/product/${product.handle}`}
                     className="font-bold text-center px-2 h-14 cursor-pointer"
                  >
                     <a className="font-bold leading-5">
                        <h3 className="text-xl"> {product.title}</h3>
                     </a>
                  </Link>
               </div>
               <div className="flex flex-col mt-4">
                  <p className="line-through text-gray-400 md:text-md text-sm">$ {product.variants[0].compareAtPrice}</p>
                  <p className="md:text-xl text-lg font-bold text-purple-500">$ {product.variants[0].price}</p>
               </div>
            </section>
            {
               product.availableForSale
               &&
               <button
                  className="shadow-md absolute bg-white bg-opacity-10 rounded-full p-2 top-2 right-2 hidden fav-icon-button"
                  onClick={handleSetItemToCart}
                  disabled={isInCart}>
                  {
                     isInCart
                        ? <AiOutlineCheckCircle className="text-2xl text-purple-500" />
                        : <BsCart2 className="text-2xl text-purple-500" />
                  }
               </button>
            }

         </div>
         <style jsx>{`
               .card-shadow {
                  box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.014),
                     0px 0px 2px rgba(0, 0, 0, 0.02),
                     0px 0px 3.8px rgba(0, 0, 0, 0.025),
                     0px 0px 6.7px rgba(0, 0, 0, 0.03),
                     0px 0px 12.5px rgba(0, 0, 0, 0.036),
                     0px 0px 30px rgba(0, 0, 0, 0.05);
                  transition: 0.2s ease-in-out;
                  height: 175px
               }

               .card-shadow:hover {
                  box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.028),
                     0px 0px 2px rgba(0, 0, 0, 0.04),
                     0px 0px 3.8px rgba(0, 0, 0, 0.05),
                     0px 0px 6.7px rgba(0, 0, 0, 0.06),
                     0px 0px 12.5px rgba(0, 0, 0, 0.072),
                     0px 0px 30px rgba(0, 0, 0, 0.1);
                  transition: 0.2s ease-in-out;
               }

               .card-shadow:hover .fav-icon-button {
                  display:block;
               }
            `}
         </style>
      </>
   );
};
