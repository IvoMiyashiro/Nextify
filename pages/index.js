import { client } from '../utils/shopify';

import { HeadPages } from '../components/Heads/HeadPages';
import { Hero } from '../components/view/home/Hero';
import { HeroCard } from '../components/view/home/HeroCard';
import { BestSellers } from '../components/view/home/BestSellers';
import { NewArrivals } from '../components/view/home/NewArrivals';
import { BestCategories } from '../components/view/home/BestCategories';
import { Footer } from '../components/Footer';

export default function Home({ bestSellers, newArrivals, categories }) {

   return (
      <>
         <HeadPages
            brandFirst={true}
            title={'A Next.js and Shopify Buy SDK app'}
         />
         <Hero />
         <HeroCard />
         <BestSellers products={bestSellers[0].products} />
         <NewArrivals products={newArrivals[0].products} />
         <BestCategories categories={categories} />
         <Footer />
      </>
   );
}

export async function getServerSideProps() {
   const collections = await client.collection.fetchAllWithProducts();
   const bestSellers = collections.filter(collection => collection.handle === 'best-sellers');
   const newArrivals = collections.filter(collection => collection.handle === 'new-arrivals');

   const categories = collections.map(collection => {
      if (collection.image !== null) {
         return collection;
      }
   });

   return {
      props: {
         bestSellers: JSON.parse(JSON.stringify(bestSellers)),
         newArrivals: JSON.parse(JSON.stringify(newArrivals)),
         categories: JSON.parse(JSON.stringify(categories))
      },
   };
}
