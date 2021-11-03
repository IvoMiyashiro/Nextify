import { useState } from 'react';

import { MobileFilterCard } from '../../Cards/MobileFilterCard';
import { FiltersCard } from '../../Cards/FiltersCard';
import { FilterError } from '../../Cards/FiltersCard/FilterError';
import { ProductsSection } from './ProductsSection';
import { ProductsSectionHeader } from './ProductsSectionHeader';


export const ProductsDisplay = ({
   products,
   collection = null,
   searches = null
}) => {

   const PRICE_FILTER_INIT_STATE = {
      ok: null,
      submited: false,
      min: '',
      max: '',
      filteredItems: []
   };

   const [mobileFilter, setMobileFilter] = useState(false);
   const [outOfStockFilter, setOutOfStockFilter] = useState(false);
   const [brandFilter, setBrandFilter] = useState('');
   const [priceFilter, setPriceFilter] = useState(PRICE_FILTER_INIT_STATE);
   const [productDisplay, setProductDisplay] = useState('card');

   return (
      <>
         <div className="flex items-start gap-6 max-w-screen-lg md:w-4/5 mx-auto my-0 md:py-24 py-12 px-4 md:px-0">
            {
               mobileFilter
               &&
               <MobileFilterCard
                  products={products}
                  setBrandFilter={setBrandFilter}
                  setPriceFilter={setPriceFilter}
                  setProductDisplay={setProductDisplay}
                  setOutOfStockFilter={setOutOfStockFilter}
                  setMobileFilter={setMobileFilter}
                  outOfStockFilter={outOfStockFilter}
                  productDisplay={productDisplay}
               />
            }
            <FiltersCard
               products={products}
               setBrandFilter={setBrandFilter}
               setPriceFilter={setPriceFilter}
               setProductDisplay={setProductDisplay}
               setOutOfStockFilter={setOutOfStockFilter}
               outOfStockFilter={outOfStockFilter}
               productDisplay={productDisplay}
            />
            <div className="flex flex-col flex-wrap gap-6">
               <div className="flex justify-between">
                  <ProductsSectionHeader
                     collection={collection}
                     searches={searches}
                     products={products}
                     setProductDisplay={setProductDisplay}
                     productDisplay={ProductsDisplay}
                     setMobileFilter={setMobileFilter}
                  />
               </div>
               {
                  priceFilter.ok === false && <FilterError />
               }
               <ProductsSection
                  products={products}
                  brandFilter={brandFilter}
                  priceFilter={priceFilter}
                  outOfStockFilter={outOfStockFilter}
                  productDisplay={productDisplay}
               />
            </div>
         </div>
      </>
   );
};
