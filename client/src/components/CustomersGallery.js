// // src/components/CustomersGallery.js

// import React from 'react';
// import './CustomersGallery.scss';

// const CustomersGallery = () => {
//   const images = [
//     'https://picsum.photos/300/200?random=1',
//     'https://picsum.photos/300/200?random=2',
//     'https://picsum.photos/300/200?random=3',
//     'https://picsum.photos/300/200?random=4',
//     'https://picsum.photos/300/200?random=5',
//     'https://picsum.photos/300/200?random=6',
//     'https://picsum.photos/300/200?random=7',
//     'https://picsum.photos/300/200?random=8',
//     'https://picsum.photos/300/200?random=9',
//   ];

//   return (
//     <div className="gallery-container">
//       {images.map((src, index) => (
//         <div className={`gallery-item gallery-item-${index + 1}`} key={index}>
//           <img src={src} alt={`Gallery Image ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomersGallery;

import React from 'react';
import './CustomersGallery.scss';
import img1 from '../images/img1c.jpg';
import img2 from '../images/img2c.jpg';
import img3 from '../images/img3c.jpg';
import img4 from '../images/img4c.jpg';
import img5 from '../images/img5c.jpg';
import img6 from '../images/img6c.jpg';
import img7 from '../images/img7c.jpg';
import img8 from '../images/img8c.jpg';
import img9 from '../images/img9c.jpg';
import { SlArrowRight } from "react-icons/sl";

const CustomersGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <img src={img1} alt="Gallery Item 1" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img2} alt="Gallery Item 2" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img3} alt="Gallery Item 3" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img4} alt="Gallery Item 4" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img5} alt="Gallery Item 5" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img6} alt="Gallery Item 6" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img7} alt="Gallery Item 7" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img8} alt="Gallery Item 8" loading="lazy" />
      </div>
      <div className="gallery-item">
        <img src={img9} alt="Gallery Item 9" loading="lazy" />
      </div>
    </div>

    
  );
};

export default CustomersGallery;
