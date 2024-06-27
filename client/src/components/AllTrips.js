// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AllTrips.scss';

// const AllTrips = () => {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/gettrips'); // Replace with your API endpoint
//         setTrips(response.data);
//       } catch (error) {
//         console.error('Error fetching trips:', error);
//       }
//     };

//     fetchTrips();
//   }, []);

//   return (
//     <div className="all-trips">
//       <h2>All Trips</h2>
//       <div className="trips-list">
//         {trips.map(trip => (
//           <div key={trip._id} className="trip-card">
//             {trip.placeimg.length > 0 && (
                
//                 <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
//             )}
//             <h3>{trip.placename}</h3>
//             <p>{trip.description}</p>
//             <p>Rating: {trip.rating}</p>
//             <p>Price: ${trip.price}</p>
//             <p>Categories: {trip.categories.join(', ')}</p>
//             <p>Country : {trip.countryname}</p>
//             {/* Displaying the first image from placeimg array */}
//             {/* Add additional logic if you want to display multiple images */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTrips;

// /* <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} /> */


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../redux/slices/tripSlice';
import './AllTrips.scss';
import { Link } from 'react-router-dom';

const AllTrips = () => {
  const dispatch = useDispatch();
  const { trips, loading, error } = useSelector(state => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="all-trips">
      <h2>All Trips</h2>
      <div className="trips-list">
        {trips.map(trip => (
          <div key={trip._id} className="trip-card">
            <h3>{trip.placename}</h3>
            <p>{trip.description}</p>
            <p>Rating: {trip.rating}</p>
            <p>Price: ${trip.price}</p>
            <p>Categories: {trip.categories.join(', ')}</p>
            <p>Country: {trip.countryname}</p>
            {trip.placeimg.length > 0 && (
              <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
            )}
            <Link to={`/places/${trip.countryname}/${trip._id}`}>
              <button className="detail-button">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrips;
