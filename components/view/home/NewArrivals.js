import { ProductLGCard } from '../../Cards/ProductLGCard';
import { ProductMDCard } from '../../Cards/ProductMDCard';
import { RadiosCarrousel } from '../../Carrousel/RadiosCarrousel';


export const NewArrivals = ({ products }) => {

   return (
      <>
         <div className="p-4 max-w-screen-lg md:w-4/5 mx-auto my-0">
            <section className="text-center">
               <p className="font-bold text-gray-500">This is</p>
               <h1 className="text-title text-center text-black font-bold text-3xl">Our New Arrivals</h1>
            </section >
            <section className="flex  gap-4 justify-between mt-12">
               <div className="hidden md:block">
                  <RadiosCarrousel products={products} />
               </div>
               <div className="flex w-full flex-col gap-10">
                  {
                     products.slice(4, 6).map(product => {
                        return (
                           <ProductMDCard key={product.id} product={product} />
                        );
                     })
                  }
               </div>
            </section>
            <section className="mt-10 md:mt-2">
               <ProductLGCard products={products} />
            </section>
         </div>
      </>
   );
};
