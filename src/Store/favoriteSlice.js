import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    foodvalue: [1]
}
const FavoritesDataSlice = createSlice({
    name: "favoritesData",
    initialState,
    reducers: {
        addFavFood(state, action){
            return (state = {
                ...state,
                foodvalue: action.payload,
            })
        }
    }
});
export const { addFavFood } = FavoritesDataSlice.actions;
export default FavoritesDataSlice.reducer;