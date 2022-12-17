// with Thunk 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
 
//  users/update is the action name, we can use any name we want 
export const updateuser2 = createAsyncThunk("users/update", async (user) => {
    const response = await fetch("http://localhost:8800/api/users/1/update", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      return response.data;
})



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
    reducers: {}
});

export const {  } = userSlice.actions;
export default userSlice.reducer;








// // without Thunk 

// import { createSlice } from '@reduxjs/toolkit';


// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         userInfo: {
//             name: "Ayyas", 
//             email: "ayyas@email.com"
//         },
//         pending: false,
//         error: false,
//         success: false,
//         closeSuccess: true
//     },
//     reducers: {
//         updateStart: (state) => {
//             state.pending = true;
//             state.closeSuccess = false;
//         },
//         updateSuccess: (state, action) => {
//             state.pending = false;
//             state.userInfo = action.payload;
//             state.error = false;
//             state.success = true;
            
//         },
//         updateSuccessClose: (state) => {
//             state.pending = false;
//             state.closeSuccess = true;
//             state.success = false;
//         },
//         updateFailure: (state) => {
//             state.pending = false;
//             state.error = true;
//             state.success = false;
//         }
//     }
// });

// export const { updateStart, updateSuccess, updateFailure, updateSuccessClose } = userSlice.actions;
// export default userSlice.reducer;


