import { configureStore } from "@reduxjs/toolkit";
import FavoritesDataSlice from "./favoriteSlice"
const store=configureStore({
    devTools:true,
    reducer:{
        favpProduct:FavoritesDataSlice,
    }
});
export default store;