import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuth: false
}

const authSlices = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        },
    }
});

export const authActions = authSlices.actions; 


export default authSlices.reducer;