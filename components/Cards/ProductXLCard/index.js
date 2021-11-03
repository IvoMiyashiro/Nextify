import Link from 'next/link';
import Image from 'next/image';

export const ProductXLCard = ({ product }) => {

   return (
      <>
         <div className="box-shadow xl-card flex justify-between items-center p-4 pl-8 relative max-w-xl w-full bg-custom rounded-md">
            <section className="flex flex-col max-w-xs">
               <h3 className="text-sm text-gray-400">{product.vendor}</h3>
               <Link href={`/product/${product.handle}`}>
                  <a>
                     <h1 className="text-3xl font-bold w-72">{product.title}</h1>
                  </a>
               </Link>
               <section>
                  <p className="md:text-2xl text-lg font-bold text-purple-500 mt-4">$ {product.variants[0].price}</p>
               </section>
               <Link href={`/product/${product.handle}`}>
                  <a>
                     <button className="w-40 h-10 font-bold mt-8 bg-black text-white"> Buy Now </button>
                  </a>
               </Link>
            </section>
            <section className="relative w-48 h-72">
               <Image
                  src={product.images[0].src}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
               />
            </section>
         </div>
         <style jsx>{`
            .xl-card {
               max-width: 550px;
               width: 100%;
               height: 360px;
            }

            .box-shadow {
               box-shadow:
               0px 0px 0.6px rgba(0, 0, 0, 0.014),
               0px 0px 1.3px rgba(0, 0, 0, 0.02),
               0px 0px 2.5px rgba(0, 0, 0, 0.025),
               0px 0px 4.5px rgba(0, 0, 0, 0.03),
               0px 0px 8.4px rgba(0, 0, 0, 0.036),
               0px 0px 20px rgba(0, 0, 0, 0.05)
               ;
               transition: .2s ease-in-out;
            }
         `}
         </style>
      </>
   );
};
