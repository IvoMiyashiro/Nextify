module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
      extend: {
         transitionProperty: {
            width: 'width',
            height: 'height',
            top: 'top',
         },
         maxHeight: {
            custom: '34rem',
            section: '600px',
         },
         width: {
            hero: '27rem',
            productCarrousel: '25rem',
            productInfo: '28rem'
         },
         height: {
            productCarrousel: '27rem'
         },
         zIndex: {
            '-10': '-10',
         },
         colors: {
            custom: '#F0F4F7',
         },
         borderRadius: {
            custom: '100px'
         }
      },
      fontFamily: {
         body: ['DM Sans', 'sans-serif'],
         title: ['Inter', 'sans-serif'],
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};

