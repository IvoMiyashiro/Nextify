import Head from 'next/head';

export const HeadPages = ({
   title = '',
   description = '',
   keywords = [],
   brandFirst = false
}) => {
   return (
      <Head>
         {
            brandFirst
               ? <title>Nextify | {title}</title>
               : <title>{title} | Nextify</title>
         }
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords.join(', ')} />
      </Head>
   );
};
