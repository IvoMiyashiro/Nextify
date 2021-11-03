import { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';
import { MobileDisplayButtons } from './MobileDisplayButtons';
import { PriceFilter } from './PriceFilter';

export const FiltersCard = ({
   isMobile = false,
   products = null,
   setBrandFilter,
   setPriceFilter,
   setProductDisplay,
   setOutOfStockFilter,
   productDisplay,
   outOfStockFilter,
}) => {

   const [brandsArr, setTest] = useState([]);

   useEffect(() => {
      let brandsAuxArr = [];
      const newArr = products.map(product => {
         if (brandsAuxArr.includes(product.vendor)) return null;
         brandsAuxArr.push(product.vendor);
         return product.vendor;
      });
      setTest(['All Brands', ...newArr]);
   }, [products]);

   const handleCheckboxChange = () => {
      setOutOfStockFilter(prev => !prev);
   };

   return (
      <>
         <div className={`${isMobile ? 'flex' : 'hidden'} bg-white md:flex flex-col gap-4 flex-shrink-0 box-shadow p-4 rounded-2xl`}>
            <section className="gap-2 w-4 hidden md:flex">
               <MobileDisplayButtons setProductDisplay={setProductDisplay} productDisplay={productDisplay} />
            </section>
            <section className="flex flex-col gap-2">
               <h3 className="font-bold text-lg">Availability</h3>
               <label htmlFor="out-of-stock" className="flex items-center gap-2 text-sm">
                  <input
                     type="checkbox"
                     name="out-of-stock"
                     id="out-of-stock"
                     checked={outOfStockFilter}
                     onChange={handleCheckboxChange}
                  />
                  Exclude out of stock items
               </label>
            </section>
            <section className="flex flex-col gap-2">
               <h3 className="font-bold text-lg">Brand</h3>
               {
                  brandsArr.map((brand, i) => {
                     if (brand !== null) {
                        return (
                           <Checkbox
                              key={i}
                              brand={brand}
                              setBrandFilter={setBrandFilter}
                           />
                        );
                     }
                  })
               }
            </section>
            <section>
               <h3 className="font-bold text-lg">Price</h3>
               <PriceFilter setPriceFilter={setPriceFilter} products={products} />
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
               width: 225px;
            }
         `}
         </style>
      </>
   );
};
