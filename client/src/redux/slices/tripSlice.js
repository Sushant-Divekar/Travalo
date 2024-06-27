import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching trips
export const fetchTrips = createAsyncThunk('trips/fetchTrips', async () => {
  const response = await axios.get('http://localhost:5000/gettrips');
  return response.data;
});

// export const fetchPlace = createAsyncThunk(
//   'trips/fetchPlace',
//   async (placename , { rejectWithValue }) => {
//     try {
//       console.log(placename);
//       const response = await axios.get(`http://localhost:5000/${placename}`); // Adjust the endpoint as needed
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.trips = action.payload;
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default tripSlice.reducer;
