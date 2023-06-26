import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 'temaki'
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
        state.activeCategory = action.payload
    }
  },
});

export const {setActiveCategory} = menuSlice.actions;
export default menuSlice.reducer;
