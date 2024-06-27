import React, { useState } from 'react';
import './LoginForm.scss'
import { Link , useNavigate} from 'react-router-dom';


const LoginForm = () => {
    // const [formData, setFormData] = useState({
    //     emailOrUsername: '',
    //     password: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form data submitted:', formData);
    //     // Add your form submission logic here
    // };

    const history = useNavigate();

    const[emailId , setEmailId] = useState('');
    const[password , setPassword] = useState('');

    const loginUser = async(e) => {
        e.preventDefault();
    
        try {
            const res = await fetch('http://localhost:5000/signin', { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emailid : emailId,
                    password : password
                }),
                credentials: 'include'
            });
    
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
    
            const data = await res.json();
    
            if(res.status === 400 || !data){
                window.alert("Invalid Credentials");
            } else {
                window.alert("Login Successfully");
                history("/");
                window.location.reload();
            }
        } catch (error) {
            console.error("There was an error with the login request:", error);
            window.alert("An error occurred while trying to log in. Please try again.");
        }
    }
    

    return (
        <div className="loginform-container">
            <h2>Login</h2>
            <form method="POST">
                <div   className="loginform-group">
                    <label htmlFor="emailOrUsername">Email or Username</label>
                    <input 
                        type="text" 
                        id="emailOrUsername" 
                        name="emailOrUsername" 
                        value={emailId} 
                        onChange = {(e) => setEmailId(e.target.value)}
                        // onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="loginform-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="loginsubmit-btn"
                    onClick={loginUser}
                >Login</button>
            </form>
            <p>Don't Have An Account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [userData, setUserData] = useState({
//     emailid: '',
//     password: ''
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.user);

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(userData)).then((result) => {
//       if (result.meta.requestStatus === 'fulfilled') {
//         navigate('/');
//       }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
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
//       <button type="submit" disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;

