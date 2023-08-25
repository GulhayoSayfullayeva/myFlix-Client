import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userObject: "",
        token: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.userObject = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
});

export const {setUser, setToken} = userSlice.actions;
export default userSlice.reducer;

