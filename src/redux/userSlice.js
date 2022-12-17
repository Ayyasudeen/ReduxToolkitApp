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
      });
      const data = await response.json();
      return data;
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
    },
    // reducers: {},
    // if we used one more api call then we have to create another extraReducers below and do the same for it 
    extraReducers: {
        [updateuser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
            state.success = false;
        },
        [updateuser2.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
            state.error = false;
            state.success = true;

        },
        [updateuser2.rejected]: (state) => {
            state.pending = false;
            state.error = true;
            state.success = false;

        }
    },
    
});

// export const {   } = userSlice.actions;
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
//             state.error = false;
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


