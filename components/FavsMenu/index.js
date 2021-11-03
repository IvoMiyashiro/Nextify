import { useContext, useRef } from 'react';

import { FaTimes } from 'react-icons/fa';
import { CartAndFavsContext } from '../../context/CartAndFavsContext';


export const FavsMenu = ({ isFavsOpen, setFavsOpen }) => {

   const { favsState } = useContext(CartAndFavsContext);
   const favsModalRef = useRef(null);
   console.log(favsState);
   const handleCloseModalBackground = (e) => {
      if (e.target == favsModalRef.current) {
         setFavsOpen(false);
      }
   };

   const handleCloseModalButton = () => {
      setFavsOpen(false);
   };

   return (
      <div>
         <section
            className={`fixed top-0 w-full h-screen bg-black bg-opacity-50 overflow-hidden  z-40 ${isFavsOpen ? 'w-full' : 'w-0'}`}
            ref={favsModalRef}
            onClick={handleCloseModalBackground}
         ></section>
         <section
            className={`fixed z-40 top-0 right-0 bg-white h-screen flex flex-col justify-between overflow-hidden transition-width duration-200 ease-in-out ${isFavsOpen ? 'w-full md:w-96' : 'w-0'}`}
         >
            <button className="absolute right-6 top-5">
               <FaTimes className="w-5 h-5" onClick={handleCloseModalButton} />
            </button>
            <div className="flex flex-col gap-2">
               <section className="bg-gray-200 p-3 rounded-lg m-2">
                  <h1 className="text-center font-bold text-2xl md:text-2x1">
                     Favorites
                  </h1>
               </section>
            </div>
            {favsState.length !== 0
               ? <p>hola</p>
               : <div className="h-full flex items-center justify-center text-gray-500 text-lg italic">
                  <p>Your favorites section is empty</p>
               </div>
            }
         </section>
      </div>
   );
};
