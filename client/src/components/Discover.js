// import React from 'react';
// import './Discover.scss';

// const Discover = () => {
//   const destinations = [
//     { id: 1, name: 'Paris', description: 'The city of lights.', image: 'paris.jpg' },
//     { id: 2, name: 'Maldives', description: 'Tropical paradise.', image: 'maldives.jpg' },
//     { id: 3, name: 'New York', description: 'The city that never sleeps.', image: 'newyork.jpg' },
//   ];

//   const categories = [
//     { id: 1, title: 'Adventure Trips', description: 'Thrilling destinations.', image: 'adventure.jpg' },
//     { id: 2, title: 'Family Vacations', description: 'Perfect for families.', image: 'family.jpg' },
//     { id: 3, title: 'Romantic Getaways', description: 'Romantic spots for couples.', image: 'romantic.jpg' },
//     { id: 4, title: 'Cultural Experiences', description: 'Rich in history.', image: 'cultural.jpg' },
//     { id: 5, title: 'Luxury Escapes', description: 'High-end destinations.', image: 'luxury.jpg' },
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: 'John Doe',
//       testimonial: 'This was the best trip of my life! Highly recommend this travel agency.',
//       trip: 'Paris',
//       image: 'john.jpg',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       testimonial: 'Amazing experience, wonderful destinations, and great service!',
//       trip: 'Maldives',
//       image: 'jane.jpg',
//     },
//     {
//       id: 3,
//       name: 'Sam Wilson',
//       testimonial: 'A truly unforgettable adventure. Thank you for the fantastic trip!',
//       trip: 'New York',
//       image: 'sam.jpg',
//     },
//   ];

//   return (
//     <div className="discover-container">
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>Discover Your Next Adventure</h1>
//           <p>Explore the world's most beautiful destinations with us</p>
//         </div>
//       </div>
//       <div className="featured-destinations">
//         <h2>Featured Destinations</h2>
//         <div className="carousel">
//           {destinations.map((item) => (
//             <div key={item.id} className="carousel-item">
//               <img src={item.image} alt={item.name} />
//               <div className="carousel-caption">
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="travel-categories">
//         <h2>Travel Categories</h2>
//         <div className="categories-grid">
//           {categories.map((category) => (
//             <div key={category.id} className="category-card">
//               <img src={category.image} alt={category.title} />
//               <div className="category-info">
//                 <h3>{category.title}</h3>
//                 <p>{category.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="testimonials">
//         <h2>Customer Testimonials and Stories</h2>
//         <div className="testimonials-grid">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="testimonial-card">
//               <img src={testimonial.image} alt={testimonial.name} />
//               <div className="testimonial-info">
//                 <p className="testimonial-text">"{testimonial.testimonial}"</p>
//                 <p className="testimonial-name">- {testimonial.name}</p>
//                 <p className="testimonial-trip">Trip: {testimonial.trip}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discover;

import React, { useEffect } from 'react';
import './Discover.scss';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedDestinations} from '../redux/slices/categorySlice';
import Footer from './footer';

const Discover = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { featuredDestinations, status, error } = useSelector((state) => state.featured);
  //const {fetchDestinationsByCategory , status , error} = useSelector((state) => state.featured)

  useEffect(() => {
    dispatch(fetchFeaturedDestinations());
  }, [dispatch]);

  console.log("discover",featuredDestinations)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const categories = [
    { id: 1, title: 'Adventure Trips', description: 'Thrilling destinations.', image: 'adventure.jpg' },
    { id: 2, title: 'Family Vacations', description: 'Perfect for families.', image: 'family.jpg' },
    { id: 3, title: 'Romantic Getaways', description: 'Romantic spots for couples.', image: 'romantic.jpg' },
    { id: 4, title: 'Cultural Experiences', description: 'Rich in history.', image: 'cultural.jpg' },
    { id: 5, title: 'Luxury Escapes', description: 'High-end destinations.', image: 'luxury.jpg' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      testimonial: 'This was the best trip of my life! Highly recommend this travel agency.',
      trip: 'Paris',
      image: 'john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      testimonial: 'Amazing experience, wonderful destinations, and great service!',
      trip: 'Maldives',
      image: 'jane.jpg',
    },
    {
      id: 3,
      name: 'Sam Wilson',
      testimonial: 'A truly unforgettable adventure. Thank you for the fantastic trip!',
      trip: 'New York',
      image: 'sam.jpg',
    },
  ];

  return (
    <>
    <div className="discover-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most beautiful destinations with us</p>
        </div>
      </div>
      <div className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="carousel">
          {featuredDestinations && featuredDestinations.length > 0 ? (
            featuredDestinations.map((item) => (
              <div key={item._id} className="carousel-item">
                <img src={`http://localhost:5000/${item.placeimg[0]}`} alt={item.placename} />
                <div className="carousel-caption">
                  <h3>{item.placename}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No featured destinations available.</div>
          )}
        </div>
      </div>
      <div className="travel-categories">
        <h2>Travel Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => navigate(`/category/${category.title}`)}
            >
              <img src={category.image} alt={category.title} />
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <h2>Customer Testimonials and Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <div className="testimonial-info">
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
                <p className="testimonial-trip">Trip: {testimonial.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <div>
        <Footer />
      </div>
    </>
  );
};

export default Discover;

