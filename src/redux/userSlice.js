import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Ayyas", 
            email: "ayyas@email.com"
        },
        pending: false,
        error: false,
        success: false,
        closeSuccess: true
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
            state.closeSuccess = false;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
            state.error = false;
            state.success = true;
            
        },
        updateSuccessClose: (state) => {
            state.pending = false;
            state.closeSuccess = true;
            state.success = false;
        },
        updateFailure: (state) => {
            state.pending = false;
            state.error = true;
            state.success = false;
        }
    }
});

export const { updateStart, updateSuccess, updateFailure, updateSuccessClose } = userSlice.actions;
export default userSlice.reducer;


