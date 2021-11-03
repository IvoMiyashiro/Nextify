import { useRef, useState } from 'react';
import Image from 'next/image';
import { SideImages } from './SideImages';

export const HoverImagesCarrousel = ({ imgs, title }) => {

   const [imageActive, setImageActive] = useState(0);
   const imageContainerRef = useRef(null);

   const handleImageChange = (index) => {
      setImageActive(Number(index));
      const imgWidth = imageContainerRef.current.children[0].offsetWidth;
      imageContainerRef.current.style.transform = `translateX(-${imgWidth * index}px)`;
   };

   return (
      <div className="flex flex-col md:flex-row gap-12">
         <div className="flex justify-center md:flex-col gap-4 order-1 md:order-0">
            {
               imgs.map((img, i) => {
                  return (
                     <SideImages
                        key={img.id}
                        imageSrc={img.src}
                        imageActive={imageActive}
                        index={i}
                        alt={title}
                        handleImageChange={handleImageChange}
                     />
                  );
               })
            }
         </div>
         <div className="flex overflow-hidden order-0 md:order-1">
            <div className="flex w-80 h-96" ref={imageContainerRef}>
               {
                  imgs.map(img => {
                     return (
                        <div className="h-96 min-w-full relative" key={img.id}>
                           <Image
                              src={img.src}
                              alt={img.title}
                              layout="fill"
                              objectFit="contain"
                           />
                        </div>
                     );
                  })
               }
            </div>
         </div>
      </div>
   );
};
