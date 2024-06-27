import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlace = createAsyncThunk(
    'places/fetchPlace',
    async (placename, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/${placename}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const placeSlice = createSlice({
    name: 'places',
    initialState: {
        tripDetails: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlace.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPlace.fulfilled, (state, action) => {
                state.loading = false;
                state.tripDetails = action.payload;
                state.error = null; // Clear error on successful fetch
            })
            .addCase(fetchPlace.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Failed to fetch place details.';
            });
    }
});

export default placeSlice.reducer;
