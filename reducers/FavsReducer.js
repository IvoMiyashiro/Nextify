import { types } from '../types';

export const FavsReducer = (state = [], action) => {
   switch (action.type) {
      case types.addFavs:
         return [...state, action.payload];

      case types.removeFavs:
         return state.filter((item) => item.id !== action.payload);

      case types.loadFavs:
         return action.payload;

      default:
         return state;
   }
};