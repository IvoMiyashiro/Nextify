import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import algoliasearch from 'algoliasearch';

import { client } from '../../utils/shopify';
import { BiSearch } from 'react-icons/bi';

export const Searchbar = () => {

   const PRODUCT_LIMIT = 4;
   const router = useRouter();
   const [productsArr, setProductsArr] = useState([]);
   const [hits, setHits] = useState([]);
   const [isHitsOpen, setHitsOpen] = useState(false);
   const [inputValue, setInputValue] = useState('');
   const hitsRef = useRef(null);

   useEffect(() => {
      client.product.fetchAll().then(product => {
         setProductsArr(product);
      });
   }, []);

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (e.target !== hitsRef.current) {
            setHitsOpen(false);
         } else {
            setHitsOpen(true);
         }
      });
   }, []);

   useEffect(() => {
      const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
      const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

      const products = productsArr.map(product => ({ ...product, objectID: product.id }));
      index.saveObjects(products)
         .then()
         .catch(error => {
            console.log(error);
         });
   }, [productsArr]);

   const handleInputSearch = (e) => {

      setInputValue(e.target.value);

      const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
      const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

      if (e.target.value !== '') {
         index.search(e.target.value)
            .then(({ hits }) => {
               setHitsOpen(true);
               setHits(hits);
            })
            .catch(error => {
               console.log(error);
            });
      } else {
         setHits([]);
      }
   };

   const handleFormSubmit = (e) => {
      e.preventDefault();
      router.push(`/search/${inputValue}`);
   };

   return (
      <form
         className="flex align-center bg-gray-300 bg-opacity-60 p-2 rounded-xl relative"
         onSubmit={handleFormSubmit}
      >
         <button type="submit">
            <BiSearch className="h-5 w-5" />
         </button>
         <input
            type="text"
            name="search"
            className="outline-none bg-transparent w-full ml-2"
            placeholder="Search..."
            autoComplete="off"
            onChange={handleInputSearch}
            value={inputValue}
         />
         {
            (hits.length !== 0 && isHitsOpen)
            &&
            <div className="absolute md:w-full w-60 bg-white border top-14 rounded-lg -ml-2 p-2 pb-0 flex flex-col" ref={hitsRef}>
               {
                  hits.map((hit, i) => {
                     if (i < PRODUCT_LIMIT) {
                        return (
                           <Link
                              key={hit.id}
                              href={`/product/${hit.handle}`}
                           >
                              <a className="cursor-pointer">
                                 <div className="flex gap-2 hover:bg-custom py-2 rounded-md">
                                    <div className="relative h-16 w-16">
                                       <Image
                                          alt={hit.title}
                                          src={hit.images[0]}
                                          layout="fill"
                                          objectFit="contain"
                                       />
                                    </div>
                                    <div className="flex flex-col -gap-2">
                                       <p className="text-gray-500 text-xs">{hit.vendor}</p>
                                       <h1 className="font-bold md:text-lg">{hit.title}</h1>
                                    </div>
                                 </div>
                              </a>
                           </Link>
                        );
                     }
                  })
               }
               <div className="border-t mt-2">
                  <button className="w-full" type="submit">
                     <p className="text-center text-sm font-bold py-1">More</p>
                  </button>
               </div>
            </div>
         }
      </form>
   );
};
