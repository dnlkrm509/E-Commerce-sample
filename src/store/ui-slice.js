import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    addedToCartConfirmation: false,
    deleteWishlistModal: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        showWishlistModal(state, action) {
            state.isVisible = true
        },
        hideWishlistModal(state, action) {
            state.isVisible = false;
            state.addedToCartConfirmation = false;
            state.deleteWishlistModal = false;
        },
        addedConfirmation(state, action) {
            state.addedToCartConfirmation = true;
            state.deleteWishlistModal = false;
        },
        showDeleteWishlistModal(state, action) {
            state.deleteWishlistModal = true;
            state.addedToCartConfirmation = false;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;