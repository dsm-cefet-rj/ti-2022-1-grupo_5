import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEsfihas = createAsyncThunk('esfihas/getEsfihas', async() => 
    (await axios.get('http://localhost:3004/esfihas')).data
);

export const esfihasSlice = createSlice({
    name: "esfihas",
    initialState: { salgadas: [], doce: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getEsfihas.fulfilled, (state, action) => {
            const esfihas = action.payload;
            state.salgadas = esfihas.filter((esfiha) => esfiha.tipo === 'Salgada');
            state.doce = esfihas.filter((esfiha) => esfiha.tipo === 'Doce');
            return state;
        })
    }
    
});

// export const { teste } = esfihasSlice.actions;
export default esfihasSlice.reducer;