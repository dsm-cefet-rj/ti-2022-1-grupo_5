import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEsfihas = createAsyncThunk('esfihas/getEsfihas', async() => 
    (await axios.get('localhost:3004/esfihas')).data
);

export const esfihasSlice = createSlice({
    name: "esfihas",
    initialState: 0,
    reducers: {
        teste: (state, action) => {
            console.log('---------------------');
            state.value = action.payload;
        }
    },
    extraReducers: {
        [getEsfihas.fulfilled]: (state, action) => {
            console.log('oi2');
            state = action.payload;
        }
    }
    
});

export const { teste } = esfihasSlice.actions;
export default esfihasSlice.reducer;