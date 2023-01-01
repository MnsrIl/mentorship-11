import {createSlice} from "@reduxjs/toolkit";
import {AuthState} from "./types";
import {fetchLoggedInUser} from "./thunks";

const initialState: AuthState = {
    authUser: null,
    loading: false,
    authenticated: false,
    error: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        deleteAuthUser: (state) => {
            state.authUser = null;
            state.authenticated = false;
        },
        logoutAuthUser: (state) => {
            state.authUser = null;
            state.authenticated = false;
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchLoggedInUser.pending, (state, action) => {
            state.loading = true;
            state.error = false;
            state.authenticated = false;
        });
        builder.addCase(fetchLoggedInUser.rejected, (state, action) => {
            state.loading = false;
            // state.authenticated = false;
            state.error = true;
        });
        builder.addCase(fetchLoggedInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.authenticated = true;
            state.authUser = action.payload;
        })
    })
});

export const { updateAuthUser, deleteAuthUser, logoutAuthUser } = authSlice.actions;

export default authSlice.reducer;