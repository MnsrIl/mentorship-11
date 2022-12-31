import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import user from './user/slice'

export const store = configureStore({
    reducer: {
        user
    },
});


export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();