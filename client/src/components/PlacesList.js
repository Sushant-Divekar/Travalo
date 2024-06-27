import React from 'react';
import PlaceCard from './Placecard.js';
import './PlacesList.scss';

const places = [
    {
        name: 'Eiffel Tower',
        country: 'France',
        rating: 5,
        price: 200,
        image: 'https://example.com/eiffel-tower.jpg'
    },
    {
        name: 'Great Wall of China',
        country: 'China',
        rating: 4,
        price: 150,
        image: 'https://example.com/great-wall.jpg'
    },
    // Add more places as needed
];

const PlacesList = () => {
    return (
        <div className="places-list">
            {places.map((place, index) => (
                <PlaceCard key={index} place={place} />
            ))}
        </div>
    );
};

export default PlacesList;
