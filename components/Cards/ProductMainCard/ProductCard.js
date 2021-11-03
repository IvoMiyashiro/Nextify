import Link from 'next/link';
import Image from 'next/image';

import { BsCart2 } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const ProductCard = ({
   product,
   isInCart,
   handleSetItemToCart,
}) => {

   return (
      <>
         <div className="flex-shrink-0 group relative md:w-56 w-44 md:height card-shadow rounded-md overflow-hidden h-88">
            {
               !product.availableForSale
               &&
               <div className="absolute z-10 top-2 left-2 border-2 border-purple-500 px-1 bg-purple-200 bg-opacity-90 rounded">
                  <p className="text-sm text-purple-500 font-bold">Out of Stock</p>
               </div>
            }
            <div className="flex justify-center p-3 bg-custom">
               <Link
                  href={`/product/${product.handle}`}
               >
                  <a className="cursor-pointer relative h-44 w-44">
                     <Image
                        src={product.images[0].src}
                        layout="fill"
                        objectFit="contain"
                        alt={product.title}
                     />
                  </a>
               </Link>
            </div>
            <div className="flex flex-col m-2 pb-2">
               <section>
                  <p className="text-sm text-gray-400">{product.vendor}</p>
                  <Link
                     href={`/product/${product.handle}`}
                     className="font-bold text-center px-2 h-14 cursor-pointer"
                  >
                     <a className="font-bold ">
                        <h1 className="md:text-lg h-12 leading-6"> {product.title}</h1>
                     </a>
                  </Link>
               </section>
               <section className="flex flex-col mt-4">
                  <p className="line-through text-gray-400 md:text-md text-sm">$ {product.variants[0].compareAtPrice}</p>
                  <p className="md:text-xl text-lg font-bold text-purple-500">$ {product.variants[0].price}</p>
               </section>
            </div>
            {
               product.availableForSale
               &&
               <button
                  className="absolute card-shadow rounded-full p-1 top-1 right-1 md:top-2 md:right-2 block md:hidden fav-icon-button p-2"
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
               }

               .height {
                  height: 356px;
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
