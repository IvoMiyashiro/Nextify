import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '../../utils/shopify';

export const CategoriesMenu = () => {
   const [collectionArr, setCollectionsArr] = useState([]);

   useEffect(() => {
      client.collection.fetchAllWithProducts().then((collections) => {
         setCollectionsArr(collections);
      });
   }, []);

   return (
      <menu className="hidden group-hover:block absolute -left-10 -bottom-48 pt-7">
         <ul className="flex flex-col text-left p-4 py-4 w-44 py-2 gap-4 bg-white rounded-xl shadow-md">
            {collectionArr.map((collection) => {
               if (collection.image !== null) {
                  return (
                     <Link href={`/collections/${collection.id}`} key={collection.id}>
                        <li
                           className="text-md font-normal hover:text-purple-500"
                        >
                           {collection.title}
                        </li>
                     </Link>
                  );
               }

            })}
         </ul>
      </menu>
   );
};

{
   // Probar en producción
   /* <Link
href={`/collections/${collection.id}`}
as={`/collections/${collection.handle}`}
>

{collection.title}
</Link> */
}
