import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId: ""
}

export const userSlice = createSlice({

    name: "user",
    initialState,

    reducers:{
        setUser(state,action){
            console.log(action.payload);
            state.userId = action.payload;
        },
        unSetUser(state,action){
            state.userId = ""
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;