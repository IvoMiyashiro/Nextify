import { useEffect, useState } from 'react';
import { ProductMainCard } from '../../Cards/ProductMainCard';
import { ArrowsCarrousel } from '../../Carrousel/ArrowsCarrousel';

export const BestSellers = ({ products }) => {
   const [carrouselArr, setCarrouselArr] = useState([]);

   useEffect(() => {
      const firstSlide = products.slice(0, 4).map(product => {
         return product;
      });
      setCarrouselArr(prev => [...prev, firstSlide]);
      const secondSlide = products.slice(4, 8).map(product => {
         return product;
      });
      setCarrouselArr(prev => [...prev, secondSlide]);
      const thirdSlide = products.slice(8, 12).map(product => {
         return product;
      });
      setCarrouselArr(prev => [...prev, thirdSlide]);
   }, []);

   return (
      <div className="p-4 max-w-screen-lg md:w-4/5 mx-auto my-0 py-20">
         <section className="text-center">
            <p className="font-bold text-gray-500">This is</p>
            <h1 className="text-title text-center text-black font-bold text-3xl">Our Best Sellers</h1>
         </section >
         <section className="mt-8">
            <ArrowsCarrousel>
               {
                  carrouselArr.map((collectionArr, i) => {
                     return (
                        <div key={i} className="min-w-full py-4 flex justify-center gap-6 overflow-hidden slide-transition">
                           {
                              collectionArr.map(product => {
                                 return <ProductMainCard key={product.id} product={product} />;
                              })
                           }
                        </div>
                     );
                  })
               }
            </ArrowsCarrousel>
         </section>
      </div >
   );
};
