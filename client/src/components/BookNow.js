// import React, { useState } from 'react';
// import './BookNow.scss';

// const BookNow = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     destination: '',
//     startDate: '',
//     endDate: '',
//     adults: 1,
//     children: 0,
//     infants: 0,
//     accommodation: '',
//     transport: '',
//     specialRequests: '',
//     cardNumber: '',
//     cardExpiry: '',
//     cardCVC: '',
//     billingAddress: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };

//   return (
//     <div className="book-now-container">
//       <h1>Book Your Trip Now</h1>
//       <p>Please fill in the form below to complete your booking</p>
//       <form onSubmit={handleSubmit} className="booking-form">
//         <div className="personal-info">
//           <h2>Personal Information</h2>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="trip-details">
//           <h2>Trip Details</h2>
//           <select name="destination" value={formData.destination} onChange={handleInputChange} required>
//             <option value="" disabled>Select Destination</option>
//             <option value="London">London</option>
//             <option value="Paris">Paris</option>
//             <option value="New York">New York</option>
//             {/* Add more destinations */}
//           </select>
//           <input
//             type="date"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="date"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="number"
//             name="adults"
//             min="1"
//             value={formData.adults}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="number"
//             name="children"
//             min="0"
//             value={formData.children}
//             onChange={handleInputChange}
//           />
//           <input
//             type="number"
//             name="infants"
//             min="0"
//             value={formData.infants}
//             onChange={handleInputChange}
//           />
//           <select name="accommodation" value={formData.accommodation} onChange={handleInputChange} required>
//             <option value="" disabled>Select Accommodation Type</option>
//             <option value="hotel">Hotel</option>
//             <option value="hostel">Hostel</option>
//             <option value="bnb">Bed & Breakfast</option>
//             {/* Add more options */}
//           </select>
//           <select name="transport" value={formData.transport} onChange={handleInputChange} required>
//             <option value="" disabled>Select Transport Preference</option>
//             <option value="economy">Economy Class</option>
//             <option value="business">Business Class</option>
//             <option value="first">First Class</option>
//             {/* Add more options */}
//           </select>
//           <textarea
//             name="specialRequests"
//             placeholder="Special Requests"
//             value={formData.specialRequests}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <div className="payment-info">
//           <h2>Payment Information</h2>
//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Card Number"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="cardExpiry"
//             placeholder="Expiry Date (MM/YY)"
//             value={formData.cardExpiry}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="cardCVC"
//             placeholder="CVC"
//             value={formData.cardCVC}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="billingAddress"
//             placeholder="Billing Address"
//             value={formData.billingAddress}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="booking-summary">
//           <h2>Booking Summary</h2>
//           <p><strong>Destination:</strong> {formData.destination}</p>
//           <p><strong>Travel Dates:</strong> {formData.startDate} to {formData.endDate}</p>
//           <p><strong>Travelers:</strong> {formData.adults} Adults, {formData.children} Children, {formData.infants} Infants</p>
//           <p><strong>Accommodation:</strong> {formData.accommodation}</p>
//           <p><strong>Transport:</strong> {formData.transport}</p>
//           <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
//         </div>
//         <div className="terms">
//           <input type="checkbox" name="terms" required />
//           <label htmlFor="terms">I agree to the terms and conditions</label>
//         </div>
//         <button type="submit" className="confirm-button">Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookNow;


import React, { useEffect, useState } from 'react';
import './BookNow.scss';
import { useLocation, useNavigate } from 'react-router';
import axios from "axios";
import { useSelector } from 'react-redux';
import Footer from './footer';
// import { useParams } from 'react-router-dom';
//import { options } from '../../../server/router/auth';
//import { Razorpay } from 'razorpay';


const BookNow = () => {
    const location = useLocation();
    //const navigate = useNavigate();
    //const { user } = useSelector(state => state.user);

    // useEffect(() => {
    //     if (!user) {
    //       navigate('/login');
    //     }
    // }, [user, navigate]);

    // Fallback values if location.state is null
    const { firstName, lastName, email, destination , amount} = location.state || {
        firstName: '',
        lastName: '',
        email: '',
        destination: '',
        amount: 0
    };

    const [formData, setFormData] = useState({
        name: `${firstName} ${lastName}`,
        email: email,
        phone: '',
        destination: destination,
        departureDate: '',
        returnDate: '',
        adults: 1,
        children: 0,
        carRental: false,
        insurance: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic
    //     console.log('Form data submitted:', formData);
    // };

    // const redirectToLogin = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/addbookings', formData, {
                withCredentials: true
            });
            alert('Booking submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                destination: '',
                departureDate: '',
                returnDate: '',
                adults: 1,
                children: 0,
                carRental: false,
                insurance: false
            });
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Failed to submit booking.');
        }
    };
    

    const checkoutHandler = async(amount) =>{

        const {data:{key}} = await axios.get("http://localhost:5000/getkey" , { withCredentials: true })
        console.log("chek" , amount);

        // const key = 'rzp_test_5It7xbSMRjbKDO';

        const{data : {order}} = await axios.post("http://localhost:5000/checkout" , 
            {amount: amount} , 
            { withCredentials: true }
        );

        const options = {
            key,
            amount: order.amount, 
            currency: "INR",
            name:"Sushant Divekar",
            //email: 'gaurav.kumar@example.com',
            contact: '9123456780',
            notes: {
              address: 'Ground Floor, SJR Cyber, Laskar Hosur Road, Bengaluru',
            },
            order_id: order.id,// Replace with Order ID generated in Step 4
            callback_url: 'http://localhost:5000/paymentverification',
            method: 'netbanking',
          
            // method specific fields
            bank: 'HDFC',

            prefill:{
                name : "sushant",
                email : "dummy@gmail.com",
                constact : "99999999999"
            }
          };
          
          
        //   var btn = document.querySelector('#btn');
        //   btn.addEventListener('click', function(){
            // has to be placed within user initiated context, such as click, in order for popup to open.
            //razorpay.createPayment(options);
          
        //   })
        const razor = new window.Razorpay(options);
        razor.open();
        
        razor.on('payment.failed', function (response) {
            alert(response.error.description);
        });

        console.log(order)
        
    }

    

    return (
        <>
        <div className="book-now-container">
            <header>
                <h1>Book Your Next Adventure</h1>
            </header>
            <main>
                <form id="booking-form"  method='POST' onSubmit={handleSubmit}>
                    <section>
                        <h2>Personal Information</h2>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
                        
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br />
                    </section>
                    
                    <section>
                        <h2>Travel Details</h2>
                        <label htmlFor="destination">Destination:</label>
                        <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} required /><br />
                        
                        <label htmlFor="departureDate">Departure Date:</label>
                        <input type="date" id="departureDate" name="departureDate" value={formData.departureDate} onChange={handleChange} required /><br />
                        
                        <label htmlFor="returnDate">Return Date:</label>
                        <input type="date" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleChange} /><br />
                        
                        <label htmlFor="adults">Adults:</label>
                        <input type="number" id="adults" name="adults" value={formData.adults} min="1" onChange={handleChange} required /><br />
                        
                        <label htmlFor="children">Children:</label>
                        <input type="number" id="children" name="children" value={formData.children} min="0" onChange={handleChange} /><br />
                    </section>
                    
                    <section>
                        <h2>Additional Services</h2>
                        <label htmlFor="carRental">Car Rental:</label>
                        <input type="checkbox" id="carRental" name="carRental" checked={formData.carRental} onChange={handleChange} /><br />
                        
                        <label htmlFor="insurance">Travel Insurance:</label>
                        <input type="checkbox" id="insurance" name="insurance" checked={formData.insurance} onChange={handleChange} /><br />
                    </section>
                    
                    {/* <section>
                        <h2>Payment Information</h2>
                        <label htmlFor="cardNumber">Credit Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required /><br />
                        
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input type="month" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required /><br />
                        
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required /><br />
                    </section> */}
                    
                    <section>
                        <h2>Confirmation</h2>
                        <p>Please review your booking details before submitting.</p>
                        {/* Summary of booking details goes here */}
                    </section>
                    
                    <button id='btn' type="submit" onClick={()=>checkoutHandler(amount)}>Submit Booking</button>
                </form>
            </main>
        </div>
        <div>
                <Footer/>
        </div>

        </>
    );
};

export default BookNow;
