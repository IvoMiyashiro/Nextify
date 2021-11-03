import { AiOutlineAppstore, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';


export const MobileDisplayButtons = ({ setProductDisplay, productDisplay, setMobileFilter }) => {

   const handleProductCardDisplay = () => {
      setProductDisplay('card');
   };

   const handleProductListDisplay = () => {
      setProductDisplay('list');
   };

   const handleMobileFilter = () => {
      setMobileFilter(prev => !prev);
   };

   return (
      <>
         <button
            className={`text-xl items-start text-gray-500 box-shadow p-1 rounded-md ${productDisplay === 'list' && 'text-purple-500'}`}
            onClick={handleProductListDisplay}
         >
            <AiOutlineUnorderedList />
         </button>
         <button
            className={`text-xl text-gray-500 box-shadow p-1 rounded-md ${productDisplay === 'card' && 'text-purple-500'}`}
            onClick={handleProductCardDisplay}
         >
            <AiOutlineAppstore />
         </button>
         <button
            className="text-xl text-gray-500 box-shadow p-1 rounded-md block md:hidden"
            onClick={handleMobileFilter}
         >
            <FiFilter />
         </button>
         <style jsx>{`
               .box-shadow {
                  box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.014),
                     0px 0px 2px rgba(0, 0, 0, 0.02),
                     0px 0px 3.8px rgba(0, 0, 0, 0.025),
                     0px 0px 6.7px rgba(0, 0, 0, 0.03),
                     0px 0px 12.5px rgba(0, 0, 0, 0.036),
                     0px 0px 30px rgba(0, 0, 0, 0.05);
                  transition: 0.2s ease-in-out;
               }
            `}
         </style>
      </>
   );
};
