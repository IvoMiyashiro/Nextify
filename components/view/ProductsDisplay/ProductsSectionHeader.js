import { MobileDisplayButtons } from '../../Cards/FiltersCard/MobileDisplayButtons';

export const ProductsSectionHeader = ({
   collection,
   searches,
   products,
   setProductDisplay,
   productDisplay,
   setMobileFilter
}) => {
   return (
      <>
         <section>
            {
               collection !== null
                  ? <h1 className="font-bold text-2xl">Our {collection.title}.</h1>
                  : searches !== null
                     ? products.length > 0
                        ? <h1 className="font-bold text-2xl">Results for &quot;{searches.query}&quot;.</h1>
                        : <h1 className="font-bold text-2xl">Opss! We didn&apos;t find anything for &quot;{searches.query}&quot;.</h1>
                     : <h1 className="font-bold text-2xl">Our Products.</h1>
            }
         </section>
         <section className="flex gap-2 flex md:hidden">
            {
               products.length > 0
               &&
               <MobileDisplayButtons
                  setProductDisplay={setProductDisplay}
                  productDisplay={productDisplay}
                  setMobileFilter={setMobileFilter}
               />
            }
         </section>
      </>
   );
};
