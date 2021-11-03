import Image from 'next/image';

export const SideImages = ({
   setImageUrl,
   setImageActive,
   imageSrc,
   index,
   imageActive
}) => {

   const handleImageChange = (e, index) => {
      setImageUrl(e.target.src);
      setImageActive(Number(index));
   };

   return (
      <div
         className={`hover:border-indigo-600 p-1 border overflow-hidden cursor-pointer rounded-md ${imageActive === index ? 'border-indigo-600' : ''}`}
      >
         <div
            className="relative w-12 h-12 p-4"
         >
            <Image
               src={imageSrc}
               layout="fill"
               objectFit="contain"
               onMouseEnter={(e) => handleImageChange(e, index)}
            />
         </div>
      </div>
   );
};
