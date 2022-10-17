import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    addedToCartConfirmation: false,
    deleteWishlistModal: false,
    deleteConfirmation: false,
    isShippingModal: false,
    isDiscountComponent: false,
    isDiscountModal: false,
    isDisabledPaymentMethodButton: true,
    itemCount: 0,
    isPaymentMethodComponent: false
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
            state.isShippingModal = false;
            state.isDiscountModal = false;
        },
        addedConfirmation(state, action) {
            state.addedToCartConfirmation = true;
            state.deleteWishlistModal = false;
        },
        showDeleteWishlistModal(state, action) {
            state.deleteWishlistModal = true;
            state.addedToCartConfirmation = false;
        },
        showDeleteConfirmation(state, action) {
            state.deleteConfirmation = true;
        },
        hideDeleteConfirmation(state, action) {
            state.deleteConfirmation = false;
        },
        showShippingModal(state, action) {
            state.isShippingModal = true;
        },
        showDiscountComponent(state, action) {
            state.isDiscountComponent = true;
        },
        hideDiscountComponent(state, action) {
            state.isDiscountComponent = false;
        },
        showDiscountModal(state, action) {
            state.isDiscountModal = true;
        },
        disablePaymentMethodButton(state, action) {
            state.isDisabledPaymentMethodButton = true;
        },
        enablePaymentMethodButton(state, action) {
            state.isDisabledPaymentMethodButton = false;
        },
        incrementItemCount(state, action) {
            state.itemCount++;
        },
        resetItemCount(state, action) {
            state.itemCount = 0;
        },
        showPaymentMethodComponent(state, action) {
            state.isPaymentMethodComponent = true;
        },
        hidePaymentMethodComponent(state, action) {
            state.isPaymentMethodComponent = false;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;