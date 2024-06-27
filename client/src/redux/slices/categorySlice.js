import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch featured destinations
export const fetchFeaturedDestinations = createAsyncThunk(
  'trips/fetchFeaturedDestinations',
  async () => {
    const response = await fetch('http://localhost:5000/featured-destinations');
    const data = await response.json();
    return data;
  }
);

// Thunk to fetch destinations by category
export const fetchDestinationsByCategory = createAsyncThunk(
  'trips/fetchDestinationsByCategory',
  async (category) => {
    const response = await fetch(`http://localhost:5000/destinations/${category}`);
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: 'trips',
  initialState: {
    featuredDestinations: [],
    categoryDestinations: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeaturedDestinations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.featuredDestinations = action.payload;
      })
      .addCase(fetchFeaturedDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDestinationsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinationsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categoryDestinations[action.meta.arg] = action.payload;
      })
      .addCase(fetchDestinationsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
