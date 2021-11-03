import { CategoryCard } from '../../Cards/CategoryCard';

export const BestCategories = ({ categories }) => {

   return (
      <div className="p-4 max-w-screen-lg mt-14 md:w-4/5 mx-auto my-0">
         <section className="text-center">
            <p className="font-bold text-gray-500">This is</p>
            <h1 className="text-title text-center text-black font-bold text-3xl">Our Categories</h1>
         </section >
         <section className="flex md:justify-around justify-center md:gap-10 gap-8  flex-wrap mt-14">
            {
               categories.map(category => {
                  if (category !== null) {
                     return (
                        <CategoryCard category={category} key={category.id} />
                     );
                  }
               })
            }
         </section>
      </div>
   );
};
