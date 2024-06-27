// import React, { useState } from 'react';
// import './PlaceInfo.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import img2 from '../images/img2c.jpg';
// import kashmir from '../images/kashmir1.jpeg'

// const PlaceInfo = () => {
//     const samplePlace = {
//         name: 'Paris',
//         country: 'France',
//         address: 'Champs-Élysées, Paris, France',
//         rating: 5,
//         price: 300,
//         image: img2,
//         description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.'
//     };

//     const [reviews, setReviews] = useState([]);
//     const [reviewInput, setReviewInput] = useState('');

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (reviewInput.trim()) {
//             setReviews([...reviews, reviewInput]);
//             setReviewInput('');
//         }
//     };

//     return (
//         <div style={{
//             backgroundImage: `url(${kashmir})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             //height: '100vh', // Full viewport height
//             display: 'flex',
//             width:'100%',
//             flexDirection:'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             //textAlign: 'center',
//             color: '#fff', // Text color for contrast
//             opacity: 1,
//         }}>
//             <div className="place-info-container">
//                 <div className="place-details">
//                     <img src={samplePlace.image} alt={samplePlace.name} className="place-image" />
//                     <div className="place-info">
//                         <h2>{samplePlace.name}</h2>
//                         <p><strong>Country:</strong> {samplePlace.country}</p>
//                         <p><strong>Address:</strong> {samplePlace.address}</p>
//                         <div className="rating">
//                             {[...Array(samplePlace.rating)].map((_, i) => (
//                                 <FontAwesomeIcon key={i} icon={faStar} />
//                             ))}
//                         </div>
//                         <p className="price"><strong>Price:</strong> ${samplePlace.price}</p>
//                         <p className="description">{samplePlace.description}</p>
//                         <button className="book-now">Book Now</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="reviews-section">
//                 <h3>Reviews</h3>
//                 <form onSubmit={handleReviewSubmit}>
//                     <textarea
//                         value={reviewInput}
//                         onChange={(e) => setReviewInput(e.target.value)}
//                         placeholder="Add your review"
//                     ></textarea>
//                     <button type="submit">Submit Review</button>
//                 </form>
//                 <div className="reviews-list">
//                     {reviews.map((review, index) => (
//                         <div key={index} className="review">
//                             {review}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlaceInfo;


// // src/components/PlaceInfo.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchTrips } from '../redux/slices/tripSlice'; 
// import './PlaceInfo.scss'; 

// const PlaceInfo = () => {
// //   const { placeId } = useParams(); 
// //   const dispatch = useDispatch();
// //   const { tripDetails, loading, error } = useSelector(state => state.trips); // Assuming trips slice state structure

// //   useEffect(() => {
// //     // Fetch trip details when component mounts
// //     dispatch(fetchTrips(placeId));
// //   }, [dispatch, placeId]);

// //   if (loading) {
// //     return <div className="place-info">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="place-info">Error: {error.message}</div>;
// //   }

// //   if (!tripDetails) {
// //     return null;
// //   }

// const { country, placeId } = useParams(); // Destructure country and placeId from useParams()
// const trips = useSelector(state => state.trips.trips);
// const filteredTrips = trips.filter(trip => trip.countryname === country && trip._id === placeId);



//   const handleBookNow = () => {
//     // Handle booking logic, e.g., navigate to booking page
//     //console.log(`Booking ${tripDetails.placename}`);
//   };

//   return (
//     <div className="place-info">
//       <h2>{filteredTrips.placename}</h2>
//       <img src={`http://localhost:5000/${filteredTrips.placeimg[0]}`} alt={filteredTrips.placename} />
//       <p>{filteredTrips.description}</p>
//       <p>Rating: {filteredTrips.rating}</p>
//       <p>Price: ${filteredTrips.price}</p>
//       <p>Categories: {filteredTrips.categories.join(', ')}</p>
//       <p>Country: {filteredTrips.countryname}</p>
//       <button className="book-button" onClick={handleBookNow}>Book Now</button>
//     </div>
//   );
// };

// export default PlaceInfo;


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchPlace} from '../redux/slices/placeSlice';
// import './PlaceInfo.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// const PlaceInfo = () => {

//     const [reviews, setReviews] = useState([]);
//     const [reviewInput, setReviewInput] = useState('');

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (reviewInput.trim()) {
//             setReviews([...reviews, reviewInput]);
//             setReviewInput('');
//         }
//     };

//   const { placename } = useParams(); // Destructure placeId from useParams()
//   console.log("placeinfo", placename);
//   const dispatch = useDispatch();
//   const { tripDetails, loading, error } = useSelector(state => state.places); // Access trips, loading, and error from the Redux store
//   console.log("PlaceInfo" , tripDetails);

//   useEffect(() => {
//     dispatch(fetchPlace(placename)); // Fetch all trips when component mounts
//     console.log("useffect" , placename)
//   }, [dispatch , placename]);

// //   const tripDetails = trips.filter(trip => trip.placename === placename); // Find the trip with the matching placeId

//   if (loading) {
//     return <div className="place-info">Loading...</div>;
//   }

//   if (error) {
//     return <div className="place-info">Error: {error}</div>;
//   }

//   if (!tripDetails) {
//     return <div className="place-info">No trip found with the given ID.</div>;
//   }

//   const handleBookNow = () => {
//     // Handle booking logic, e.g., navigate to booking page
//     console.log(`Booking ${tripDetails.placename}`);
//   };

    

//   return (
//     // <div className="place-info">
//     //   <h2>{tripDetails.placename}</h2>
//     //   <img src={`http://localhost:5000/${tripDetails.placeimg[0]}`} alt={tripDetails.placename} />
//     //   <p>{tripDetails.description}</p>
//     //   <p>Rating: {tripDetails.rating}</p>
//     //   <p>Price: ${tripDetails.price}</p>
//     //   <p>Categories: {tripDetails.categories.join(', ')}</p>
//     //   <p>Country: {tripDetails.countryname}</p>
//     //   <button className="book-button" onClick={handleBookNow}>Book Now</button>
//     // </div>

//     <div style={{
//         backgroundImage: `url(http://localhost:5000/${tripDetails.placeimg[0]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//         //height: '100vh', // Full viewport height
//         display: 'flex',
//         width:'100%',
//         flexDirection:'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         //textAlign: 'center',
//         color: '#fff', // Text color for contrast
//         opacity: 1,
//     }}>
//         <div className="place-info-container">
//             <div className="place-details">
//                   <img src={`http://localhost:5000/${tripDetails.placeimg[0]}`} 
//                        alt={tripDetails.placename} 
//                        className="place-image"/>
//                 <div className="place-info">
//                     <h2>{tripDetails.placename}</h2>
//                     <p><strong>Country:</strong> {tripDetails.countryname}</p>
//                     <p><strong>Address:</strong> {tripDetails.address}</p>
//                     <div className="rating">
//                         {[...Array(5)].map((_, i) => (
//                             <FontAwesomeIcon key={i} icon={faStar} />
//                         ))}
//                     </div>
//                     <p className="price"><strong>Price:</strong> ${tripDetails.price}</p>
//                     <p className="description">{tripDetails.description}</p>
//                     <button className="book-now">Book Now</button>
//                 </div>
//             </div>
//         </div>

//         <div className="reviews-section">
//             <h3>Reviews</h3>
//             <form onSubmit={handleReviewSubmit}>
//                 <textarea
//                     value={reviewInput}
//                     onChange={(e) => setReviewInput(e.target.value)}
//                     placeholder="Add your review"
//                 ></textarea>
//                 <button type="submit">Submit Review</button>
//             </form>
//             <div className="reviews-list">
//                 {reviews.map((review, index) => (
//                     <div key={index} className="review">
//                         {review}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>


//   );
// };

// export default PlaceInfo;


//--------------------

/*
<div style={{
//             backgroundImage: `url(${kashmir})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             //height: '100vh', // Full viewport height
//             display: 'flex',
//             width:'100%',
//             flexDirection:'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             //textAlign: 'center',
//             color: '#fff', // Text color for contrast
//             opacity: 1,
//         }}>
//             <div className="place-info-container">
//                 <div className="place-details">
                       <img src={`http://localhost:5000/${tripDetails.placeimg[0]}`} 
                            alt={tripDetails.placename} 
                            className="place-image"/>
//                     <div className="place-info">
//                         <h2>{tripDetails.placename}</h2>
//                         <p><strong>Country:</strong> {tripDetails.countryname}</p>
//                         <p><strong>Address:</strong> {tripDetails.address}</p>
//                         <div className="rating">
//                             {[...Array(tripDetails.rating)].map((_, i) => (
//                                 <FontAwesomeIcon key={i} icon={faStar} />
//                             ))}
//                         </div>
//                         <p className="price"><strong>Price:</strong> ${tripDetails.price}</p>
//                         <p className="description">{tripDetails.description}</p>
//                         <button className="book-now">Book Now</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="reviews-section">
//                 <h3>Reviews</h3>
//                 <form onSubmit={handleReviewSubmit}>
//                     <textarea
//                         value={reviewInput}
//                         onChange={(e) => setReviewInput(e.target.value)}
//                         placeholder="Add your review"
//                     ></textarea>
//                     <button type="submit">Submit Review</button>
//                 </form>
//                 <div className="reviews-list">
//                     {reviews.map((review, index) => (
//                         <div key={index} className="review">
//                             {review}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

*/
//---------------------
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPlace } from '../redux/slices/placeSlice';
import './PlaceInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getUserInfo } from '../redux/slices/userSlice';

const PlaceInfo = () => {

    const [reviews, setReviews] = useState([]);
    const [reviewInput, setReviewInput] = useState('');
    const { placename } = useParams();
    const dispatchPlace = useDispatch();
    const { tripDetails, loading, error } = useSelector(state => state.places);

    const navigate = useNavigate();
    const dispatchUser = useDispatch();
    const user = useSelector((state) => state.user.userInfo);

    console.log("placeinfo" ,user);
    useEffect(() => {
        if (!user) {
            dispatchUser(getUserInfo());
        }
    }, [dispatchUser, user]);

    useEffect(() => {
        dispatchPlace(fetchPlace(placename));
    }, [dispatchPlace, placename]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewInput.trim()) {
            setReviews([...reviews, reviewInput]);
            setReviewInput('');
        }
    };

    if (loading) {
        return <div className="place-info">Loading...</div>;
    }

    if (error) {
        return <div className="place-info">Error: {error}</div>;
    }

    if (!tripDetails) {
        return <div className="place-info">No trip found with the given ID.</div>;
    }

    const amount = tripDetails.price;

    const handleBookNow = (placename) => {
        if (user) {
            navigate('/booknow', {
                state: {
                    firstName: user.firstname,
                    lastName: user.lastname,
                    email: user.emailid,
                    destination: placename,
                    amount: amount
                }
            });
        } else {
            navigate('/login');
        }
    };





    return (
        <div style={{
            backgroundImage: `url(http://localhost:5000/${tripDetails.placeimg[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            opacity: 1,
        }}>
            <div className="place-info-container">
                <div className="place-details">
                    <img src={`http://localhost:5000/${tripDetails.placeimg[0]}`} alt={tripDetails.placename} className="place-image" />
                    <div className="place-info">
                        <h2>{tripDetails.placename}</h2>
                        <p><strong>Country:</strong> {tripDetails.countryname}</p>
                        <p><strong>Address:</strong> {tripDetails.address}</p>
                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                        <p className="price"><strong>Price:</strong> ${tripDetails.price}</p>
                        <p className="description">{tripDetails.description}</p>
                        <button className="book-now" onClick={() => handleBookNow(tripDetails.placename)}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="reviews-section">
                <h3>Reviews</h3>
                <form onSubmit={handleReviewSubmit}>
                    <textarea
                        value={reviewInput}
                        onChange={(e) => setReviewInput(e.target.value)}
                        placeholder="Add your review"
                    ></textarea>
                    <button type="submit">Submit Review</button>
                </form>
                <div className="reviews-list">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            {review}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaceInfo;

