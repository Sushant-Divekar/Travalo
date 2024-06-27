// import './footer.scss'

// import React from 'react'

// const footer = () => {
//   return (
//     <div className='footer-container'>
//       <div className='contact-container'>
//         <p>KEEP IN TOUCH</p>
//         <h2>Travel with us</h2>
//         <input type='text' placeholder='Enter Email Address'/>
//         <button className='send-button'>Send</button>
//       </div>
//       <div className='imp-links-container'>
//         <div className='about-box'>
//             <p>LOGO</p>
//             <p>lllllllllllllllllllllllllllllllllllllllll<br/>
//                lllllllllllllllllllllllllllllllllllllllll<br/>
//                lllllllllllllllllllllllllllllllllllllllll<br/>
//                lllllllllllllllllllllllllllllllllllllllll<br/>
//                lllllllllllllllllllllllllllllllllllllllll<br/>
//                lllllllllllllllllllllllllllllllllllllllll<br/>
//             </p>
//             <p>Links</p>
//         </div>
//         <div className='our-agency-box'>
//             <p>OUR AGENCY</p>
//             <p>Services</p>
//             <p>Insurance</p>
//             <p>Agency</p>
//             <p>Tourism</p>
//             <p>Payment</p>
//         </div>
//         <div className='partners-box'>
//             <p>PARTNERS</p>
//             <p>Booking</p>
//             <p>Rental Car</p>
//             <p>Hostel World</p>
//             <p>Trivago</p>
//             <p>TripAdvisor</p>
//         </div>
//         <div className='last-min-box'>
//             <p>LAST MINUTE</p>
//             <p>London</p>
//             <p>California</p>
//             <p>Indonesia</p>
//             <p>Europe</p>
//             <p>India</p>
//             <p>Oceania</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default footer


import './footer.scss'
import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Footer_Video from '../videos/footer_video.mp4'
import Instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <video className='background-video' autoPlay loop muted>
        <source src={Footer_Video} 
        type='video/mp4' />
      </video>
      <div className='contact-container'>
        <div className='tags-container'>
            <p>KEEP IN TOUCH</p>
            <h2>Travel with us</h2>
        </div>
        <input type='text' placeholder='Enter Email Address' />
        <Button variant="contained" endIcon={<SendIcon className='sendicon'/>} className='send-button'>Send</Button>
        
      </div>
      <div className='imp-links-container'>
        <div className='about-box'>
          <p>Travalo</p>
          <p>Welcome to our Travel Agency website, your gateway to exploring and<br />
          booking dream destinations around the world. Our mission is to provide <br />
          you with a seamless and secure travel planning experience, ensuring that <br />
          every journey you embark on is memorable and hassle-free<br />
          </p>
          <div className='socialmedia-container'>
            <img className='social1' src={Instagram} alt='social media'/>
            <img className='social1' src={Youtube} alt='social media'/>
            <img className='social1' src={Twitter} alt='social media'/>
          </div>
        </div>
        <div className='our-agency-box'>
          <p>OUR AGENCY</p>
          <p>Services</p>
          <p>Insurance</p>
          <p>Agency</p>
          <p>Tourism</p>
          <p>Payment</p>
        </div>
        <div className='partners-box'>
          <p>PARTNERS</p>
          <p>Booking</p>
          <p>Rental Car</p>
          <p>Hostel World</p>
          <p>Trivago</p>
          <p>TripAdvisor</p>
        </div>
        <div className='last-min-box'>
          <p>LAST MINUTE</p>
          <p>London</p>
          <p>California</p>
          <p>Indonesia</p>
          <p>Europe</p>
          <p>India</p>
          <p>Oceania</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
