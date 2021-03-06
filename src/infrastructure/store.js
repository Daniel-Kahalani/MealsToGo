import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/account/slices/userSlice';
import restaurantsReducer from '../features/restaurants/slices/restaurantsSlice';
import locationReducer from '../slices/location/locationSlice';
import favoritesReducer from '../components/Favorites/favoritesSlice';
import cartReducer from '../features/checkout/slices/cartSlice';
import checkoutReducer from '../features/checkout/slices/checkoutSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    restaurants: restaurantsReducer,
    location: locationReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export default store;
