import { useState } from 'react';

export const PriceFilter = ({ setPriceFilter, collection = null, products = null }) => {

   const [minInput, setMinInput] = useState('');
   const [maxInput, setMaxInput] = useState('');

   const setFilter = (filteredArr) => {
      if (filteredArr.length !== 0) {
         setPriceFilter(prev => {
            return {
               ...prev,
               ok: true,
               submited: true,
               min: minInput,
               max: maxInput,
               filteredItems: [...filteredArr]
            };
         });
      } else {
         setPriceFilter(prev => {
            return {
               ...prev,
               min: minInput,
               max: maxInput,
               ok: false,
               submited: true,
               filteredItems: []
            };
         });
      }
   };

   const handleMinInput = (e) => {
      setMinInput(e.target.value);
   };

   const handleMaxInput = (e) => {
      setMaxInput(e.target.value);
   };

   const handleResetFilter = () => {
      setMinInput('');
      setMaxInput('');
      setPriceFilter({
         ok: null,
         submited: false,
         min: minInput,
         max: maxInput,
         filteredItems: []
      });
   };

   const handlePriceFilterSubmit = (e) => {
      e.preventDefault();
      if (collection) {
         const filteredArr = collection.products.filter((product) => {
            if (Number(minInput) < Number(product.variants[0].price) && Number(product.variants[0].price) < Number(maxInput)) {
               return product;
            }
         });
         setFilter(filteredArr);
      } else {
         const filteredArr = products.filter((product) => {
            if (Number(minInput) < Number(product.variants[0].price) && Number(product.variants[0].price) < Number(maxInput)) {
               return product;
            }
         });
         setFilter(filteredArr);
      }
   };

   return (
      <form onSubmit={handlePriceFilterSubmit} className="mt-2">
         <div className="flex gap-2 ">
            <input
               type="number"
               className="border w-20 rounded-md px-1 text-sm"
               placeholder="Min."
               value={minInput}
               onChange={handleMinInput}
            />
            <p> to </p>
            <input
               type="number"
               className="border w-20 rounded-md px-1 py-0.5 text-sm"
               placeholder="Max."
               value={maxInput}
               onChange={handleMaxInput}
            />
         </div>
         <div className="flex gap-3">
            <button
               type="submit"
               className="w-16 h-6 text-white bg-black text-sm mt-4 font-bold"
            >
               Apply
            </button>
            <button
               type="button"
               className="w-16 h-6 text-white bg-black text-sm mt-4 font-bold"
               onClick={handleResetFilter}
            >
               Reset
            </button>
         </div>
      </form>
   );
};
