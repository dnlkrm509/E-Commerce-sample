import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        showWishlistModal(state, action) {
            state.isVisible = true
        },
        hideWishlistModal(state, action) {
            state.isVisible = false
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;