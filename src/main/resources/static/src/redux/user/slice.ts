import {createSlice} from "@reduxjs/toolkit";
import {userState} from "./types";
import {addUser, fetchUsers, removeUser, updateUser} from "./thunks";

const initialState:userState = {
    items:[],
    loading:false,
    error:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.error = false
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        });
        builder.addCase(fetchUsers.pending, (state) => {
            state.error = true
            state.loading = false;
        });
        builder.addCase(addUser.pending, (state) => {
            state.loading = true
            state.error = false
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false
            state.items.push(action.payload)
        });
        builder.addCase(addUser.pending, (state) => {
            state.error = true
            state.loading = false;
        });
        builder.addCase(removeUser.pending, (state) => {
            state.loading = true
            state.error = false
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.loading = false
            state.items = state.items.filter(item => item.id !== action.payload.id)
        });
        builder.addCase(removeUser.pending, (state) => {
            state.error = true
            state.loading = false;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true
            state.error = false
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            state.items.map(item => item.id === action.payload.id)
        });
        builder.addCase(updateUser.pending, (state) => {
            state.error = true
            state.loading = false;
        });
    })


})

export default userSlice.reducer;