import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './slices/tripSlice';
import userReducer from './slices/userSlice';
import placeReducer from './slices/placeSlice'
import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    trips: tripReducer,
    user: userReducer,
    places : placeReducer,
    featured : categoryReducer,

  }
});

export default store;
