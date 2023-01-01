import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchLoggedInUser = createAsyncThunk("auth/fetchLoggedInUser", async () => {
    const response = await fetch("http://localhost:8080/api/admin/15");
    const data = await response.json();

    return data;
});