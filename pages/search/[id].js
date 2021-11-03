import algoliasearch from 'algoliasearch';

import { HeadPages } from '../../components/Heads/HeadPages';
import { ProductsDisplay } from '../../components/view/ProductsDisplay';
import { Footer } from '../../components/Footer';


export default function Search({ searches }) {

   return (
      <>
         <HeadPages
            title={searches.query.charAt(0).toUpperCase() + searches.query.slice(1)}
         />
         <ProductsDisplay
            products={searches.hits}
            searches={searches}
         />
         <Footer alternative={true} />
      </>
   );
}

export const getServerSideProps = async ({ params }) => {
   const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);
   const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

   const hits = await index.search(params.id);

   return {
      props: {
         searches: JSON.parse(JSON.stringify(hits))
      }
   };
};