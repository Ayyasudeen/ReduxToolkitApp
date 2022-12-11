import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Ayyas", 
        email: "ayyas@email.com"
    },
    reducers: {
        // update action 
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email; //payload coming from update.js 

        },
        remove: (state) => {
            state.name = "";
            state.email = "";
            
        },
        addHello: (state, action) => {
            state.name = "Hello " + action.payload.name;
        }
        // cmt#1d Add hello action 

    }
});

export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;


