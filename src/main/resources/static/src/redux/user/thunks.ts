import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserDetails} from "../../types";
import {SERVER_API} from "../../utils";
import {RootState} from "../store";
import {deleteAuthUser, updateAuthUser} from "../auth/slice";

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
    const response = await fetch("http://localhost:8080/api/admin");
    const data = await response.json();

    return data;
});

export const addUser = createAsyncThunk('add/user', async (params: any) => {
    const response = await fetch(`${SERVER_API}/admin/create`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();

    return data;
})

export const removeUser = createAsyncThunk<number, number, { state: RootState }>('remove/user', async (id, {
    getState,
    dispatch
}) => {
    const response = await fetch(`${SERVER_API}/admin/delete/${id}`, {
        method: "DELETE"
    });

    const state = getState();

    if (response.ok && state.auth.authUser?.id === id) {
        dispatch(deleteAuthUser());
    }

    return id;
});

export const updateUser = createAsyncThunk<UserDetails, UserDetails, { state: RootState }>(
    'update/user', async (params: UserDetails, {getState, dispatch}
    ) => {
        const response = await fetch(`${SERVER_API}/admin/edit`, {
            method: "PUT",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        const state = getState();

        if (response.ok && state.auth.authUser?.id === params.id) {
            dispatch(updateAuthUser(data));
        }

        return data;
    })
