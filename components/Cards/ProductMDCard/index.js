import Link from 'next/link';
import Image from 'next/image';

export const ProductMDCard = ({ product }) => {

   return (
      <>
         <div className="box-shadow flex items-center relative w-full h-40 bg-custom rounded-md overflow-hidden">
            <section className="px-2 w-40 h-32 relative">
               <Link href={`/product/${product && product.handle}`}>
                  <a className="cursor-pointer">
                     <Image
                        src={product && product.images[0].src}
                        alt={product && product.title}
                        layout="fill"
                        objectFit="contain"
                     />
                  </a>
               </Link>
            </section>
            <section className="flex flex-col w-full justify-center pl-4 bg-white h-full">
               <p className="text-gray-400 md:text-sm text-xs">{product && product.vendor}</p>
               <Link href={`/product/${product && product.handle}`}>
                  <a>
                     <p className="text-md font-bold h-12">{product && product.title}</p>
                  </a>
               </Link>
               <div className="flex items-center gap-2 mt-4">
                  <p className="text-gray-400 mb-px md:text-md text-sm">Only</p>
                  <p className="text-purple-500 font-bold text-lg md:text:xl">$ {product && product.variants[0].price}</p>
               </div>
            </section>
         </div>
         <style jsx>{`
            .box-shadow {
               box-shadow:
               0px 0px 0.6px rgba(0, 0, 0, 0.014),
               0px 0px 1.3px rgba(0, 0, 0, 0.02),
               0px 0px 2.5px rgba(0, 0, 0, 0.025),
               0px 0px 4.5px rgba(0, 0, 0, 0.03),
               0px 0px 8.4px rgba(0, 0, 0, 0.036),
               0px 0px 20px rgba(0, 0, 0, 0.05)
               ;
            }
         `}
         </style>
      </>
   );
};
