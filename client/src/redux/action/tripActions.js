import axios from 'axios';

export const fetchTrips = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TRIPS_REQUEST' });
  try {
    const response = await axios.get('http://localhost:5000/gettrips');
    dispatch({ type: 'FETCH_TRIPS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRIPS_FAILURE', error: error.message });
  }
};
