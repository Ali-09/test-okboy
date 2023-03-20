import { createSlice } from '@reduxjs/toolkit';

const initialState = {         
    data:[],
    error:'',
    status: 'idle' 
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers:{},
});

export default coinsSlice.reducer;