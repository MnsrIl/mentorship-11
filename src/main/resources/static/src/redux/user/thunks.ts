import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Role, UserDetails} from "../../types";

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
    const {data} = await axios.get("http://localhost:8080/api/admin");
    return data;
});

export const addUser = createAsyncThunk('add/user', async (params:any) => {
    const {data} = await  axios.post('http://localhost:8080/api/admin/create', params);
    return data;
})

export const removeUser = createAsyncThunk('remove/user', async (id:number) => {
    const {data} = await axios.delete(`http://localhost:8080/api/admin/delete/${id}`);
    return data;
})

export const updateUser = createAsyncThunk('update/user', async (params:UserDetails) => {
    const {data} = await axios.put('http://localhost:8080/api/admin/edit', params);
    return data;
})
