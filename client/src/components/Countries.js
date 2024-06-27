import React, { useEffect } from 'react'
import './Countries.scss'

// Import country images
import indiaImage from '../images/india.jpg';
import unitedStatesImage from '../images/img4c.jpg'; // Adjust filename as per actual image name
import franceImage from '../images/france.jpg';
import japanImage from '../images/img3c.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../redux/slices/tripSlice';
import { useNavigate } from 'react-router';

const Countries = () => {
    const navigate = useNavigate();

    const handleExploreClick = (country) => {
        navigate(`/places/${country}`);
      };
    
      const dispatch = useDispatch();
      const { trips, loading, error } = useSelector(state => state.trips);
    
      useEffect(() => {
        dispatch(fetchTrips());
      }, [dispatch]);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

  return (
    <div className="countries-container">
        <p className="countries-container-title">Countries To Travel</p>
        <div className="countries-subcontainer">
          
          <div className="country-card">
            <p>India</p>
            <img src={indiaImage} alt="India" />
            <div className="country-info-container">
              <button className="explore-country-button" onClick={() => handleExploreClick('India')}>
                Explore
              </button>
              <p>Mumbai<br />Rs.5000</p>
            </div>
          </div>

          <div className="country-card">
            <p>United States</p>
            <img src={unitedStatesImage} alt="United States" />
            <div className="country-info-container">
              <button className="explore-country-button" onClick={() => handleExploreClick('USA')}>
                Explore
              </button>
              <p>New York<br />Rs.10000</p>
            </div>
          </div>

          <div className="country-card">
            <p>France</p>
            <img src={franceImage} alt="France" />
            <div className="country-info-container">
              <button className="explore-country-button" onClick={() => handleExploreClick('France')}>
                Explore
              </button>
              <p>Paris<br />Rs.7000</p>
            </div>
          </div>

          <div className="country-card">
            <p>Japan</p>
            <img src={japanImage} alt="Japan" />
            <div className="country-info-container">
              <button className="explore-country-button" onClick={() => handleExploreClick('Japan')}>
                Explore
              </button>
              <p>Tokyo<br />Rs.8000</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Countries
