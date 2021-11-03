import { types } from '../types';

export const addToFavs = (product) => {
   return {
      type: types.addFavs,
      payload: { ...product },
   };
};

export const removeFromFavs = (id) => {
   return {
      type: types.removeFavs,
      payload: id,
   };
};

export const loadFavsFromStorage = (products) => {
   return {
      type: types.loadFavs,
      payload: products,
   };
};
