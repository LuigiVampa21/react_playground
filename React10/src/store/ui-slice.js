import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false, notification: null},
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
            // console.log(state.cartIsVisible);
        },
        showNotification(state, action) {
            console.log(action.payload);
            state.notification = {
                status: action.payload.code,
                title: action.payload.name,
                message: action.payload.message
            }
            console.log(state.notification);
        },
        removeNotification(state){
            state.notification = null;
            console.log(state.notification);
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;