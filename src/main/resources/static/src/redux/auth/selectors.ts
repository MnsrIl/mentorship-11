import {RootState} from "../store";

export const selectAuthUser = (state: RootState) => state.auth.authUser;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectLogIn = (state: RootState) => state.auth.authenticated;