// import React, { useState , useEffect } from 'react';
// import './MostVisitedPlaces.scss'; // Import the SCSS file


// const MostVisitedPlaces = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [placesPerPage, setPlacesPerPage] = useState(4);

//   const places = [
//     // Add your place data here as objects with name, country, price, and image URL
//     { id: 1, name: 'Place Name 1', country: 'Country 1', price: 'Price 1', image: 'image-url' },
//     { id: 2, name: 'Place Name 2', country: 'Country 2', price: 'Price 2', image: 'image-url' },
//     { id: 3, name: 'Place Name 3', country: 'Country 3', price: 'Price 3', image: 'image-url' },
//     { id: 4, name: 'Place Name 4', country: 'Country 4', price: 'Price 4', image: 'image-url' },
//     { id: 5, name: 'Place Name 5', country: 'Country 5', price: 'Price 5', image: 'image-url' },
//     { id: 6, name: 'Place Name 6', country: 'Country 6', price: 'Price 6', image: 'image-url' },
//     { id: 7, name: 'Place Name 7', country: 'Country 7', price: 'Price 7', image: 'image-url' },
//     { id: 8, name: 'Place Name 8', country: 'Country 8', price: 'Price 8', image: 'image-url' },
//     { id: 9, name: 'Place Name 9', country: 'Country 9', price: 'Price 9', image: 'image-url' },
//     { id: 10, name: 'Place Name 10', country: 'Country 10', price: 'Price 10', image: 'image-url' },
//     { id: 11, name: 'Place Name 11', country: 'Country 11', price: 'Price 11', image: 'image-url' },
//     { id: 12, name: 'Place Name 12', country: 'Country 12', price: 'Price 12', image: 'image-url' },
    
//     // Add more places as needed...

    
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setPlacesPerPage(1);
//       } else if (window.innerWidth <= 1024) {
//         setPlacesPerPage(3);
//       } else {
//         setPlacesPerPage(4);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call once to set the initial value

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

// //   const placesPerPage = 4;
//   const totalPages = Math.ceil(places.length / placesPerPage);

//   const nextSlide = () => {
//     if (currentIndex < totalPages - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="most-visited-places-container">
//       <h1>Most Visited Places</h1>
//       <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>&#10094;</button>
//       <div className="places-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {places.map((place, index , trip) => (
//           <div key={index} className="place">
//             <img src={place.image} alt={place.name} />
//             <p className="place-name">{place.name}</p>
//             <p className="country-name">{place.country}</p>
//             <div className="place-info-container">
//               <p className="price-info">{place.price}</p>
//               <button className="detail-button">Details</button>
              
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <button className="arrow right" onClick={nextSlide} disabled={currentIndex >= totalPages - 1}>&#10095;</button>
//     </div>
//   );
// };

// export default MostVisitedPlaces;

//-------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import './MostVisitedPlaces.scss'; // Import the SCSS file
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrips } from '../redux/slices/tripSlice';
// import { Link } from 'react-router-dom';

// const MostVisitedPlaces = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [placesPerPage, setPlacesPerPage] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setPlacesPerPage(1);
//       } else if (window.innerWidth <= 1024) {
//         setPlacesPerPage(3);
//       } else {
//         setPlacesPerPage(4);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call once to set the initial value

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const dispatch = useDispatch();
//   const { trips, loading, error } = useSelector(state => state.trips);

//   useEffect(() => {
//     dispatch(fetchTrips());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const totalPages = Math.ceil(trips.length / placesPerPage);

//   const nextSlide = () => {
//     if (currentIndex < totalPages - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const startIndex = currentIndex * placesPerPage;
//   const endIndex = startIndex + placesPerPage;
//   const visibleTrips = trips.slice(startIndex, endIndex);

//   return (
//     <div className="most-visited-places-container">
//       <h1>Most Visited Places</h1>
//       <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>&#10094;</button>
//       <div className="places-slider">
//         {visibleTrips.map((trip, index) => (
//           <div key={trip._id} className="place">
//             <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
//             <p className="place-name">{trip.placename}</p>
//             <p className="country-name">{trip.countryname}</p>
//             <div className="place-info-container">
//               <p className="price-info">${trip.price}</p>
//               <Link to={`/place/${trip._id}`}>
//                 <button className="detail-button">Details</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="arrow right" onClick={nextSlide} disabled={currentIndex >= totalPages - 1}>&#10095;</button>
//     </div>
//   );
// };

// export default MostVisitedPlaces;

//-------------------------------------------------------------------------

/*
<div className='most-visited-places-container'>
            <div className='most-visited-places1'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places2'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places3'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places4'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places5'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places6'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places7'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places8'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places9'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places10'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places11'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>
            <div className='most-visited-places12'>
                <img/>
                <p className='place-name'>Place Name</p>
                <p className='country-name'>Country</p>
                <div className='place-info-container'>
                    <p className='price-info'>Price</p>
                    <button className='detail-button'>Details</button>
                </div>
                
            </div>

        </div>
*/


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrips } from '../redux/slices/tripSlice';
// import './AllTrips.scss';
// import { Link } from 'react-router-dom';

// const MostVisitedPlaces = () => {
//   const dispatch = useDispatch();
//   const { trips, loading, error } = useSelector(state => state.trips);

//   useEffect(() => {
//     dispatch(fetchTrips());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="all-trips">
//       <h2>All Trips</h2>
//       <div className="trips-list">
//         {trips.map(trip => (
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
//             <Link to={`/places/${trip.countryname}/${trip._id}`}>
//               <button className="detail-button">Details</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MostVisitedPlaces;




// import React, { useState, useEffect } from 'react';
// import './MostVisitedPlaces.scss'; // Import the SCSS file
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrips } from '../redux/slices/tripSlice';
// import { Link } from 'react-router-dom';

// const MostVisitedPlaces = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [placesPerPage, setPlacesPerPage] = useState(4);

//   const dispatch = useDispatch();
//   const { trips, loading, error } = useSelector(state => state.trips);

//   useEffect(() => {
//     dispatch(fetchTrips());
//   }, [dispatch]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setPlacesPerPage(1);
//       } else if (window.innerWidth <= 1024) {
//         setPlacesPerPage(3);
//       } else {
//         setPlacesPerPage(4);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call once to set the initial value

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const totalPages = Math.ceil(trips.length / placesPerPage);

//   const nextSlide = () => {
//     if (currentIndex < totalPages - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const startIndex = currentIndex * placesPerPage;
//   const endIndex = startIndex + placesPerPage;
//   const visibleTrips = trips.slice(startIndex, endIndex);

//   return (
//     <div className="most-visited-places-container">
//       <h1>Most Visited Places</h1>
//       <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>&#10094;</button>
//       <div className="places-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {visibleTrips.map((trip, index) => (
//           <div key={trip._id} className="place">
//             <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
//             <p className="place-name">{trip.placename}</p>
//             <p className="country-name">{trip.countryname}</p>
//             <div className="place-info-container">
//               <p className="price-info">${trip.price}</p>
//               <Link to={`/places/${trip.countryname}/${trip._id}`}>
//                 <button className="detail-button">Details</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="arrow right" onClick={nextSlide} disabled={currentIndex >= totalPages - 1}>&#10095;</button>
//     </div>
//   );
// };

// export default MostVisitedPlaces;


import React, { useState, useEffect } from 'react';
import './MostVisitedPlaces.scss'; // Import the SCSS file
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../redux/slices/tripSlice';
import { Link } from 'react-router-dom';

const MostVisitedPlaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placesPerPage, setPlacesPerPage] = useState(4);

  const dispatch = useDispatch();
  const { trips, loading, error } = useSelector(state => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPlacesPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setPlacesPerPage(3);
      } else {
        setPlacesPerPage(4);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set the initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(trips.length / placesPerPage);

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const startIndex = currentIndex * placesPerPage;
  const endIndex = startIndex + placesPerPage;
  const visibleTrips = trips.slice(startIndex, endIndex);

  return (
    <div className="most-visited-places-container">
      <h1>Most Visited Places</h1>
      <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>&#10094;</button>
      <div className="places-slider-container">
        <div
          className="places-slider"
          style={{ transform: `translateX(-${currentIndex * (200 / totalPages)}%)` }}
        >
          {trips.map((trip, index) => (
            <div key={trip._id} className="place" style={{ width: `${100 / placesPerPage}%` }}>
              <img src={`http://localhost:5000/${trip.placeimg[0]}`} alt={trip.placename} />
              <p className="place-name">{trip.placename}</p>
              <p className="country-name">{trip.countryname}</p>
              <div className="place-info-container">
                <p className="price-info">${trip.price}</p>
                <Link to={`/places/${trip.countryname}/${trip.placename}`}>
                  <button className="detail-button">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide} disabled={currentIndex >= totalPages - 1}>&#10095;</button>
    </div>
  );
};

export default MostVisitedPlaces;

