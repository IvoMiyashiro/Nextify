export const Checkbox = ({ brand, setBrandFilter }) => {

   const handleChange = (e) => {
      setBrandFilter(e.target.value);
   };

   return (
      <label htmlFor={brand} className="flex items-center gap-2 text-sm cursor-pointer">
         <input type="radio" name="out-of-stock" id={brand} onChange={handleChange} value={brand} />
         {brand}
      </label>
   );
};
