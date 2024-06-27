import React, { useState } from 'react';
import './RegisterForm.scss'
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from './slices/userSlice';

const RegisterForm = () => {

    const history = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        emailid: '',
        password: '',
        cpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form data submitted:', formData);
    //     // Add your form submission logic here
    // };

    const registerUser = async(e) => {
        e.preventDefault();
        const { firstname, lastname, username, emailid, password, cpassword } = formData;

        if (password !== cpassword) {
            window.alert("Passwords do not match");
            return;
        }

        try{
            const response = await fetch('http://localhost:5000/register' , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    firstname,
                    lastname,
                    username,
                    emailid,
                    password,
                    cpassword

                }),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
    
            if(response.status === 400 || !data){
                window.alert("Invalid Credentials");
            } else {
                window.alert("Register Successfully");
                history("/");
            }

        }catch(error){
            console.log(error);
            window.alert("An error occurred while trying to log in. Please try again.");
        }
    }

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const { loading, error } = useSelector((state) => state.user);

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form method="POST">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstname" 
                        name="firstname" 
                        value={formData.firstname} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        value={formData.lastname} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="emailid" 
                        id="emailid" 
                        name="emailid" 
                        value={formData.emailid} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="cpassword" 
                        name="cpassword" 
                        value={formData.cpassword} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn" onClick={registerUser}>Register</button>
            </form>

            <p>Already Have An Account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegisterForm;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [userData, setUserData] = useState({
//     firstname: '',
//     lastname: '',
//     username: '',
//     emailid: '',
//     password: '',
//     cpassword: ''
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.user);

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(userData)).then((result) => {
//       if (result.meta.requestStatus === 'fulfilled') {
//         navigate('/');
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="firstname"
//         value={userData.firstname}
//         onChange={handleChange}
//         placeholder="First Name"
//         required
//       />
//       <input
//         type="text"
//         name="lastname"
//         value={userData.lastname}
//         onChange={handleChange}
//         placeholder="Last Name"
//         required
//       />
//       <input
//         type="text"
//         name="username"
//         value={userData.username}
//         onChange={handleChange}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="email"
//         name="emailid"
//         value={userData.emailid}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={userData.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//       />
//       <input
//         type="password"
//         name="cpassword"
//         value={userData.cpassword}
//         onChange={handleChange}
//         placeholder="Confirm Password"
//         required
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? 'Registering...' : 'Register'}
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Register;
