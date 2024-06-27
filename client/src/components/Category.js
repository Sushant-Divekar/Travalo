// import React, { useEffect } from 'react';
// import './Category.scss';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDestinationsByCategory } from '../redux/slices/categorySlice';

// const Category = () => {
//   const { category } = useParams();
//   const dispatch = useDispatch();
//   const { categoryDestinations, status, error } = useSelector((state) => state.featured);

//   useEffect(() => {
//     dispatch(fetchDestinationsByCategory(category));
//   }, [dispatch, category]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="category-container">
//       <h2>{category}</h2>
//       <div className="category-destinations">
//         {categoryDestinations[category]?.map((item) => (
//           <div key={item._id} className="destination-card">
//             <img src={`http://localhost:5000/${item.placeimg[0]}`} alt={item.placename} />
//             <div className="destination-info">
//               <h3>{item.placename}</h3>
//               <p>{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useEffect } from 'react';
import './Category.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinationsByCategory } from '../redux/slices/categorySlice';
import { Button } from '@mui/material';

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { categoryDestinations, status, error } = useSelector((state) => state.featured);

  useEffect(() => {
    dispatch(fetchDestinationsByCategory(category));
  }, [dispatch, category]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="category-container">
      <h2>{category}</h2>
      <div className="category-destinations">
        {categoryDestinations[category]?.map((item) => (
          <div key={item._id} className="destination-card">
            <img src={`http://localhost:5000/${item.placeimg[0]}`} alt={item.placename} />
            <div className="destination-info">
              <h3>{item.placename}</h3>
              <p>{item.description}</p>
            </div>
            <Link to={`/places/${item.countryname}/${item.placename}`}>
              <Button variant="contained" className="detail-button">Detail</Button>
            </Link>
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default Category;

