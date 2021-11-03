import { useState } from 'react';
import Image from 'next/image';
import { SideImages } from './SideImages';

export const HoverImagesCarrousel = ({ imgs }) => {

   const [imageUrl, setImageUrl] = useState(false);
   const [imageActive, setImageActive] = useState(0);

   return (
      <div className="flex flex-col md:flex-row gap-12">
         <div className="flex justify-center md:flex-col gap-4 order-1 md:order-0">
            {
               imgs.map((img, i) => {
                  return (
                     <SideImages
                        key={img.id}
                        setImageUrl={setImageUrl}
                        imageSrc={img.src}
                        isActive={imageActive === i ? true : false}
                        setImageActive={setImageActive}
                        imageActive={imageActive}
                        index={i}
                     />
                  );
               })
            }
         </div>
         <div className="h-96 w-80 relative order-0 md:order-1">
            <Image
               src={imageUrl ? imageUrl : imgs[0].src}
               layout="fill"
               objectFit="contain"
            />
         </div>
      </div>
   );
};
