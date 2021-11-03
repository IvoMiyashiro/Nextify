import Image from 'next/image';

export const SideImages = ({
   handleImageChange,
   imageSrc,
   index,
   imageActive,
   alt,
}) => {

   return (
      <div
         className={`hover:border-indigo-600 p-1 border overflow-hidden cursor-pointer rounded-md ${imageActive === index ? 'border-indigo-600' : ''}`}
      >
         <div
            className="relative w-12 h-12 p-4"
         >
            <Image
               src={imageSrc}
               alt={alt}
               layout="fill"
               objectFit="contain"
               onMouseEnter={() => handleImageChange(index)}
            />
         </div>
      </div>
   );
};
