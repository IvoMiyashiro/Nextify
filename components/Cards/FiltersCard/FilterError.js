import { IoWarningOutline } from 'react-icons/io5';

export const FilterError = () => {
   return (
      <div className="p-1 px-3 border border-red-500 w-full rounded-md bg-red-100 bg-opacity-80">
         <p className="text-red-500 flex items-center gap-1">
            <IoWarningOutline />
            We didn&apos;t find any products that matched your filters.
         </p>
      </div>
   );
};
