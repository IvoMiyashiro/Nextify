import { useRef } from 'react';


export const Modal = ({ children, setMobileFilter }) => {

   const modalRef = useRef(null);

   const handleCloseModal = (e) => {
      if (e.target === modalRef.current) {
         setMobileFilter(false);
      }
   };

   return (
      <div
         className="fixed flex md:hidden justify-center items-center left-0 z-50 top-0 w-full h-screen bg-black bg-opacity-30"
         ref={modalRef}
         onClick={handleCloseModal}
      >
         {children}
      </div>
   );
};
