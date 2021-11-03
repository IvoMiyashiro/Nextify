import { ProductMDCard } from '../ProductMDCard';

export const ProductLGCard = ({ products }) => {
   return (
      <>
         <div className="flex gap-8 md:gap-4 justify-between md:flex-row flex-col items-center w-full box-shadow rounded-md overflow-hidden">
            <section className="order-2 md:order-1 flex flex-col md:flex-row gap-4 w-full p-4 md:p-0 md:pl-4 pt-0">
               {
                  products.slice(6, 8).map(product => {
                     return (
                        <ProductMDCard key={product.id} product={product} />
                     );
                  })
               }
            </section>
            <section className="order-1 md:order-2 text-center p-4 backgroundimg w-full h-48 md:w-96">
               <h1 className="text-center text-2xl font-bold w-60 mx-auto my-0 text-white">Discover the latest products</h1>
               <button className="w-32 md:w-40 md:h-10 h-8 mt-8 font-bold bg-black text-white"> See more </button>
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

            .backgroundimg {
               background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) ), url("assets/heroimgs/newarrivals-2.jpg");
               background-size: cover;
               background-repeat: no-repeat;
            }

         `}
         </style>
      </>
   );
};
