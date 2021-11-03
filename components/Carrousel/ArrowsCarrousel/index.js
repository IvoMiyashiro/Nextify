import { useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const ArrowsCarrousel = ({ children }) => {

   const slideShowRef = useRef(null);

   const prevSlide = () => {
      if (slideShowRef.current.children.length > 0) {
         const index = slideShowRef.current.children.length - 1;
         const lastElement = slideShowRef.current.children[index];
         slideShowRef.current.insertBefore(lastElement, slideShowRef.current.firstChild);

         slideShowRef.current.style.transition = 'none';
         const slideWidth = slideShowRef.current.children[0].offsetWidth;
         slideShowRef.current.style.transform = `translateX(-${slideWidth}px)`;

         setTimeout(() => {
            slideShowRef.current.style.transition = '250ms ease-out all';
            slideShowRef.current.style.transform = 'translateX(0)';
         }, 30);
      }
   };

   const nextSlide = () => {
      if (slideShowRef.current.children.length > 0) {
         const firstElement = slideShowRef.current.children[0];
         slideShowRef.current.style.transition = '250ms ease-out all';

         const slideWidth = slideShowRef.current.children[0].offsetWidth;
         slideShowRef.current.style.transform = `translateX(-${slideWidth}px)`;

         const transition = () => {
            slideShowRef.current.style.transition = 'none';
            slideShowRef.current.style.transform = 'translateX(0)';
            slideShowRef.current.appendChild(firstElement);

            slideShowRef.current.removeEventListener('transitionend', transition);
         };

         slideShowRef.current.addEventListener('transitionend', transition);
      }
   };

   return (
      <div className="group relative overflow-hidden">
         <div className="flex" ref={slideShowRef}>
            {children}
         </div>
         <div className="group-hover:flex hidden w-full z-0 absolute top-0 flex justify-between">
            <div className="h-full flex items-center">
               <button
                  className="text-5xl absolute top-40 left-0 bg-black bg-opacity-40 rounded-full text-white"
                  onClick={prevSlide}
               >
                  <BiChevronLeft />
               </button>
            </div>
            <div className="h-full flex items-center">
               <button
                  className="text-5xl absolute top-40 right-0 bg-black bg-opacity-40 rounded-full text-white"
                  onClick={nextSlide}
               >
                  <BiChevronRight />
               </button>
            </div>
         </div>
      </div>
   );
};

