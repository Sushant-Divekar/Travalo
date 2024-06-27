// // src/components/FilteredPlaces.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import './FilteredPlaces.scss';

// const FilteredPlaces = () => {
//   const { country } = useParams();
//   const trips = useSelector(state => state.trips.trips);
//   const filteredTrips = trips.filter(trip => trip.countryname === country);

//   return (
//     <div className="filtered-places">
//       <h2>Places in {country}</h2>
//       <div className="trips-list">
//         {filteredTrips.map(trip => (
//           <div key={trip._id} className="trip-card">
//             <h3>{trip.placename}</h3>
//             <p>{trip.description}</p>
//             <p>Rating: {trip.rating}</p>
//             <p>Price: ${trip.price}</p>
//             <p>Categories: {trip.categories.join(', ')}</p>
//             <p>Country: {trip.countryname}</p>
//             {trip.placeimg.length > 0 && (
//               <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
//             )}

//             <button className="explore-place-button">Details</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilteredPlaces;

// src/components/FilteredPlaces.js
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useParams, Link} from 'react-router-dom';
import './FilteredPlaces.scss';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { fetchTrips } from '../redux/slices/tripSlice';

const FilteredPlaces = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { trips, loading, error } = useSelector(state => state.trips);

  useEffect(() => {
    if (trips.length === 0) {
      dispatch(fetchTrips());
    }
  }, [dispatch, trips.length]);

  const filteredTrips = trips.filter(trip => trip.countryname === country);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="filtered-places">
      <h2 style={{textAlign : "center"}}>Places in {country}</h2>
      <div className="trips-list">
        {filteredTrips.map(trip => (
          <div key={trip._id} className="trip-card">
            {trip.placeimg.length > 0 && (
                <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
              )}
            <h3>{trip.placename}</h3>
            <p>Country: {trip.countryname}</p>
            <p>Rating: {trip.rating}</p>
            <p>Price: ${trip.price}</p>
            <p>Categories: {trip.categories.join(', ')}</p>
            

            {/* Navigate to PlaceInfo component on Details button click */}
            <Link to={`/places/${country}/${trip.placename}`}>
              <Button className="explore-place-button" variant="contained">Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredPlaces;

