import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cadastrarUsuario = createAsyncThunk('esfihas/cadastrarUsuario', async(state) => 
    (await axios.post('http://localhost:3004/usuarios', state)).data
);

export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: {},
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(cadastrarUsuario.fulfilled, state => {
            return state;
        })
    }
});

export default usuarioSlice.reducer;