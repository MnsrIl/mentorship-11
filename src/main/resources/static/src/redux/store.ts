import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import user from "./user/slice"
import auth from "./auth/slice";

export const store = configureStore({
    reducer: {
        user,
        auth
    },
});


export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();