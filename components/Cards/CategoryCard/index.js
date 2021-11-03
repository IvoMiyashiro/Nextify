
import Link from 'next/link';
import Image from 'next/image';

export const CategoryCard = ({ category }) => {

   return (
      <>
         <Link href={`/collections/${category && category.id}`}>
            <a>
               <div className="box-shadow md:w-40 md:h-48 w-36 rounded-md overflow-hidden cursor-pointer">
                  <section className="flex justify-center relative w-40 h-32 category-card">
                     <Image
                        src={category && category.image.src}
                        alt={category && category.title}
                        layout="fill"
                        objectFit="cover"
                     />
                  </section>
                  <section className="flex h-16 justify-center items-center px-2">
                     <h1 className="text-center font-bold md:text-xl text-lg">{category && category.title}</h1>
                  </section>
               </div>
            </a>
         </Link>
         <style jsx>{`
               .box-shadow {
                  box-shadow:
                  0px 0px 0.6px rgba(0, 0, 0, 0.014),
                  0px 0px 1.3px rgba(0, 0, 0, 0.02),
                  0px 0px 2.5px rgba(0, 0, 0, 0.025),
                  0px 0px 4.5px rgba(0, 0, 0, 0.03),
                  0px 0px 8.4px rgba(0, 0, 0, 0.036),
                  0px 0px 20px rgba(0, 0, 0, 0.05)
                  ;
               }

               .category-card {
                  transition: .2s ease-in-out;
               }

               .category-card:hover .category-img {
                  transition: .2s ease-in-out;
                  transform: scale(1.05);
               }
            `}
         </style>
      </>
   );
};
