import React from 'react';
import './PlaceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Placecard = ({ place }) => {
    return (
        <div className="place-card">
            <img src={place.image} alt={place.name} />
            <div className="place-details">
                <h3>{place.name}</h3>
                <p>{place.country}</p>
                <div className="rating">
                    {[...Array(place.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                </div>
                <p className="price">${place.price}</p>
                <button className="book-now">Book Now</button>
            </div>
        </div>
    );
};

export default Placecard;
