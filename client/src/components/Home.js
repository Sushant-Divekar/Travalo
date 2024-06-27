
// import React from 'react';
// import HomeImgSlider from './HomeImgSlider';
// import Kashmir1 from '../images/kashmir1.jpeg';
// import Kashmir2 from '../images/kashmir2.jpeg';
// import './Home.scss'
// import Button from '@mui/material/Button';
// import MostVisitedPlaces from './MostVisitedPlaces';
// import ExperienceContainer from './ExperienceContainer';
// import CustomersGallery from './CustomersGallery';
// import Footer from './footer';
// import { useNavigate } from 'react-router';


// const Home = () => {
//   const images = [
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
    
//     // Add more image URLs as needed
//   ];

//   const BooknowPage = useNavigate();

//   const navigateToBookNow = () =>{
//     BooknowPage('/booknow');
//   }

//   return (
//     <>
//         <div className="tagline-container">
//             <p className='tagline'>Beyond Boundaries, Beyond Imagination</p>
//             <p className='subtitle'>Crafting Your Perfect Escape</p>
//             <Button className = 'book_now_button' variant="contained" onClick={navigateToBookNow}>Book Now</Button>
//         </div>
//         {/* <div className='explore-container'>
//             <div className='location-container'>
//                 <p className='input-name'>Location</p>
//                 <input  type="text" placeholder="Enter location"/>
//             </div>
//             <div className='date-container'>
//                 <p className='input-name'>Date</p>
//                 <input type="date" placeholder="Select date"/>
//             </div>
//             <div className='people-container'>
//                 <p className='input-name'>No. Of People</p>
//                 <input type="number" placeholder="Enter number of people"/>
//             </div>
//             <div className='explore-button-container'>
//                 <Button className = 'explore-button' variant="contained">Explore Now</Button>
//             </div>
//         </div> */}
        
//         <HomeImgSlider images={images} />

//         <div>
//             <ExperienceContainer/>
//         </div>

//         <div className='countries-container'>
//             <p className='countries-container-title'>Contries To Travel</p>
//             <div className='countries-subcontainer'>
//                 <div className='country1'>
//                     <p>India</p>
//                     <img/>
//                     <div className='country-info-container'>
//                         <button className='explore-country-button'>Explore</button>
//                         <p>Mumbai<br/>Rs.5000</p>
//                     </div>
//                 </div>
//                 <div className='country2'>
//                     <p>United State</p>
//                     <img/>
//                     <div className='country-info-container'>
//                         <button className='explore-country-button'>Explore</button>
//                         <p>New York<br/>Rs.10000</p>
//                     </div>
//                 </div>
//                 <div className='country3'>
//                     <p>France</p>
//                     <img/>
//                     <div className='country-info-container'>
//                         <button className='explore-country-button'>Explore</button>
//                         <p>Paris<br/>Rs.7000</p>
//                     </div>
//                 </div>
//                 <div className='country4'>
//                     <p>Japan</p>
//                     <img/>
//                     <div className='country-info-container'>
//                         <button className='explore-country-button'>Explore</button>
//                         <p>Tokyo<br/>Rs.8000</p>
//                     </div>
//                 </div>
//             </div>

//         </div>

//         <div>
//             <MostVisitedPlaces/>
//         </div>

//         <div>
//             <h1>Customers Gallery</h1>
//             <CustomersGallery />
//         </div>

//         <div>
//             <Footer/>
//         </div>
        
        
//     </>
//   );
// };

// export default Home;


//src/components/Home.js
import React, { useEffect } from 'react';
import HomeImgSlider from './HomeImgSlider';
import Kashmir1 from '../images/kashmir1.jpeg';
import Kashmir2 from '../images/kashmir2.jpeg';
import './Home.scss';
import Button from '@mui/material/Button';
import MostVisitedPlaces from './MostVisitedPlaces';
import ExperienceContainer from './ExperienceContainer';
import CustomersGallery from './CustomersGallery';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import Countries from './Countries';



const Home = () => {

  const images = [
    Kashmir1,
    Kashmir2,
    Kashmir1,
    Kashmir2,
    Kashmir1,
    Kashmir2,
    Kashmir1,
    Kashmir2,
    Kashmir1,
    Kashmir2,
  ];

  const navigate = useNavigate();

  const navigateToBookNow = () => {
    navigate('/booknow');
  };

  

  return (
    <>
      <div className="tagline-container">
        <p className="tagline">Beyond Boundaries, Beyond Imagination</p>
        <p className="subtitle">Crafting Your Perfect Escape</p>
        <Button className="book_now_button" variant="contained" onClick={navigateToBookNow}>
          Book Now
        </Button>
      </div>
      
      <HomeImgSlider images={images} />

      <div>
        <ExperienceContainer />
      </div>

      <div>
        <Countries/>
      </div>

      
      <div>
        <MostVisitedPlaces />
      </div>

      <div>
        <h1>Customers Gallery</h1>
        <CustomersGallery />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;


// // src/components/Home.js
// import React from 'react';
// import HomeImgSlider from './HomeImgSlider';
// import Kashmir1 from '../images/kashmir1.jpeg';
// import Kashmir2 from '../images/kashmir2.jpeg';
// import './Home.scss';
// import Button from '@mui/material/Button';
// import MostVisitedPlaces from './MostVisitedPlaces';
// import ExperienceContainer from './ExperienceContainer';
// import CustomersGallery from './CustomersGallery';
// import Footer from './footer';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const images = [
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//     Kashmir1,
//     Kashmir2,
//   ];

//   const navigate = useNavigate();

//   const navigateToBookNow = () => {
//     navigate('/booknow');
//   };

//   const handleExploreClick = (country) => {
//     navigate(`/places/${country}`);
//   };

//   return (
//     <>
//       <div className="tagline-container">
//         <p className="tagline">Beyond Boundaries, Beyond Imagination</p>
//         <p className="subtitle">Crafting Your Perfect Escape</p>
//         <Button className="book_now_button" variant="contained" onClick={navigateToBookNow}>
//           Book Now
//         </Button>
//       </div>
      
//       <HomeImgSlider images={images} />

//       <div>
//         <ExperienceContainer />
//       </div>

//       <div className="countries-container">
//         <p className="countries-container-title">Countries To Travel</p>
//         <div className="countries-subcontainer">
//           {['India', 'United States', 'France', 'Japan'].map((country) => (
//             <div className="country-card" key={country}>
//               <p>{country}</p>
//               <img src={`../images/${country.toLowerCase()}.jpeg`} alt={country} />
//               <div className="country-info-container">
//                 <button className="explore-country-button" onClick={() => handleExploreClick(country)}>
//                   Explore
//                 </button>
//                 <p>{country === 'India' ? 'Mumbai' : country === 'United States' ? 'New York' : country === 'France' ? 'Paris' : 'Tokyo'}<br />Rs.{country === 'India' ? '5000' : country === 'United States' ? '10000' : country === 'France' ? '7000' : '8000'}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <MostVisitedPlaces />
//       </div>

//       <div>
//         <h1>Customers Gallery</h1>
//         <CustomersGallery />
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// };

//export default Home;
