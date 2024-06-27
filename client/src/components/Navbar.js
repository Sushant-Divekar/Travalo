// import React, { useState } from 'react';
// import "./Navbar.scss";
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch , useSelector } from 'react-redux';
// import { logout } from '../redux/slices/userSlice';


// const Navbar = () => {

//   const[menuOpen , setMenuOpen] = useState(false);

//   // const DiscoverPage = useNavigate();

//   // const navigateToDiscover = () =>{
//   //   DiscoverPage('/discover')
//   // }

//   // const HomePage = useNavigate();

//   // const navigateToHome = () =>{
//   //   HomePage('/')
//   // }

//   // const AboutPage = useNavigate();

//   // const navigateToAbout = () =>{
//   //   AboutPage('/about')
//   // }

//   // const ContactPage = useNavigate();

//   // const navigateToContact = () =>{
//   //   ContactPage('/contact')
//   // }

//   // const RegisterPage = useNavigate();

//   // const navigateToregister = () =>{
//   //   RegisterPage('/register')
//   // }

//   // const LogoutPage = useNavigate();

//   // const navigateToLogout = () =>{
//   //   LogoutPage('/logout');
//   // }
  

//   const toggleMenu = () =>{
//     setMenuOpen(!menuOpen);
//   }


//   //--------------------------------------------------------------------------

//   const { userInfo } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const [profileOpen, setProfileOpen] = useState(false);

//   const navigate = useNavigate();

//   const toggleProfileMenu = () => setProfileOpen(!profileOpen);
//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/');
//   };


//   return (
//     <div className='navbar-body'>
//       <div className='navbar-logo' onClick={() => navigate('/')}>Logo</div>

//       <div className={`navbar-menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
//         {/* Conditional rendering of menu icon */}
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`navbar-content ${menuOpen ? 'show' : 'hide'}`}>
//         <Button className='navbar-content-home' variant="text" onClick={() => navigate('/')}>Home</Button>
//         <Button className='navbar-content-discover' variant="text" onClick={() => navigate('/discover')}>Discover</Button>
//         <Button className='navbar-content-contact' variant="text" onClick={() => navigate('/contact')}>Contact</Button>
//         <Button className='navbar-content-about' variant="text" onClick={() => navigate('/about')}>About</Button>


//         {userInfo ? (

//           <div className="navbar-profile" onClick={toggleProfileMenu}>
//             {userInfo.firstname[0]}
//             {profileOpen && (
//               <div className="profile-menu">
//                 <Button variant="text" onClick={() => navigate('/profile')}>Profile</Button>
//                 <Button variant="text" onClick={() => navigate('/trips')}>Your Trips</Button>
//                 <Button variant="text" onClick={handleLogout}>Logout</Button>
//               </div>
//             )}
//           </div>

//         ) : (
//           <Button variant="contained" onClick={() => navigate('/register')}>Register</Button>
//         )}
//         {/* <Button className='navbar-content-register' variant="contained" onClick={navigateToregister}>Register</Button>
//         <Button className='navbar-content-register' variant="contained" onClick={navigateToLogout}>Logout</Button> */}
//       </div>
      
//     </div>
    
//   )
// }

// export default Navbar


// import React, { useEffect, useState } from 'react';
// import "./Navbar.scss";
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserInfo, logoutUser } from '../redux/slices/userSlice';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user.userInfo);

//   useEffect(() => {
//     if (!user) {
//       dispatch(getUserInfo());
//     }
//   }, [dispatch, user]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <div className='navbar-body'>
//       <div className='navbar-logo'>Logo</div>

//       <div className={`navbar-menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`navbar-content ${menuOpen ? 'show' : 'hide'}`}>
//         <Button className='navbar-content-home' variant="text" onClick={() => navigate('/')}>Home</Button>
//         <Button className='navbar-content-discover' variant="text" onClick={() => navigate('/discover')}>Discover</Button>
//         <Button className='navbar-content-contact' variant="text" onClick={() => navigate('/contact')}>Contact</Button>
//         <Button className='navbar-content-about' variant="text" onClick={() => navigate('/about')}>About</Button>
//         {user ? (
//           <>
//             <div className='navbar-content-user'>
//               <div className='user-initials' onClick={toggleMenu}>
//                 {user.firstname[0]}{user.lastname[0]}
//               </div>
//               {menuOpen && (
//                 <div className='user-dropdown'>
//                   <Button variant="text" onClick={() => navigate('/profile')}>Profile</Button>
//                   <Button variant="text" onClick={() => navigate('/yourtrips')}>Your Trips</Button>
//                   <Button variant="text" onClick={handleLogout}>Logout</Button>
//                 </div>
//               )}
//             </div>
//           </>
//         ) : (
//           <Button className='navbar-content-register' variant="contained" onClick={() => navigate('/register')}>Register</Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, logoutUser } from '../redux/slices/userSlice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userInfo);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    if (!user) {
      dispatch(getUserInfo());
    }

      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        if (scrollY > lastScrollY) {
          setScrollDirection('down');
        } else if (scrollY === 0) {
          setScrollDirection('up');
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      window.addEventListener('scroll', updateScrollDirection);

      return () => {
        window.removeEventListener('scroll', updateScrollDirection);
      };
  }, [dispatch, user]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className={`navbar-body ${scrollDirection === 'down' ? 'navbar-scroll-down' : ''}`}>
      <div className='navbar-logo' onClick={() => navigate('/')}>Travalo</div>

      <div className={`navbar-menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-content ${menuOpen ? 'show' : 'hide'}`}>
        <Button className='navbar-content-home' variant="text" onClick={() => navigate('/')}>Home</Button>
        <Button className='navbar-content-discover' variant="text" onClick={() => navigate('/discover')}>Discover</Button>
        <Button className='navbar-content-contact' variant="text" onClick={() => navigate('/contact')}>Contact</Button>
        <Button className='navbar-content-about' variant="text" onClick={() => navigate('/about')}>About</Button>
        {user ? (
          <div className='navbar-content-user'>
            <div className='user-initials' onClick={toggleProfileMenu}>
              {user.firstname[0]}{user.lastname[0]}
            </div>
            {profileOpen && (
              <div className='user-dropdown'>
                <Button variant="text" onClick={() => navigate('/profile')}>Profile</Button>
                <Button variant="text" onClick={() => navigate('/yourtrips')}>Your Trips</Button>
                <Button variant="text" onClick={handleLogout}>Logout</Button>
              </div>
            )}
          </div>
        ) : (
          <Button className='navbar-content-register' variant="contained" onClick={() => navigate('/register')}>Register</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useEffect, useState } from 'react';
// import "./Navbar.scss";
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserInfo, logoutUser } from '../redux/slices/userSlice';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [scrollDirection, setScrollDirection] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user.userInfo);

//   useEffect(() => {
//     if (!user) {
//       dispatch(getUserInfo());
//     }

//     let lastScrollY = window.pageYOffset;

//     const updateScrollDirection = () => {
//       const scrollY = window.pageYOffset;
//       if (scrollY > lastScrollY) {
//         setScrollDirection('down');
//       } else if (scrollY < lastScrollY) {
//         setScrollDirection('up');
//       }
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };

//     window.addEventListener('scroll', updateScrollDirection);

//     return () => {
//       window.removeEventListener('scroll', updateScrollDirection);
//     };
//   }, [dispatch, user]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProfileMenu = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate('/');
//   };

//   return (
//     <div className={`navbar-body ${scrollDirection === 'down' ? 'navbar-scroll-down' : ''}`}>
//       <div className='navbar-logo' onClick={() => navigate('/')}>Logo</div>

//       <div className={`navbar-menu-icon ${menuOpen ? 'change' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`navbar-content ${menuOpen ? 'show' : 'hide'}`}>
//         <Button className='navbar-content-home' variant="text" onClick={() => navigate('/')}>Home</Button>
//         <Button className='navbar-content-discover' variant="text" onClick={() => navigate('/discover')}>Discover</Button>
//         <Button className='navbar-content-contact' variant="text" onClick={() => navigate('/contact')}>Contact</Button>
//         <Button className='navbar-content-about' variant="text" onClick={() => navigate('/about')}>About</Button>
//         {user ? (
//           <div className='navbar-content-user'>
//             <div className='user-initials' onClick={toggleProfileMenu}>
//               {user.firstname[0]}{user.lastname[0]}
//             </div>
//             {profileOpen && (
//               <div className='user-dropdown'>
//                 <Button variant="text" onClick={() => navigate('/profile')}>Profile</Button>
//                 <Button variant="text" onClick={() => navigate('/yourtrips')}>Your Trips</Button>
//                 <Button variant="text" onClick={handleLogout}>Logout</Button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Button className='navbar-content-register' variant="contained" onClick={() => navigate('/register')}>Register</Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
