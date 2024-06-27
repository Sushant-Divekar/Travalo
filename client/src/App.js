import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discover from './components/Discover';
import BookNow from './components/BookNow';
import PlacesList from './components/PlacesList';
import PlaceInfo from './components/PlaceInfo';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'
import About from './components/About';
import Contact from './components/Contact'
import Logout from './components/Logout'
import AllTrips from './components/AllTrips';
import FilteredPlaces from './components/FilteredPlaces';
import PaymentSuc from './components/PaymentSuc';
import Profile from './components/Profile';
import YourTrips from './components/YourTrips';
import Category from './components/Category';
import Footer from './components/footer';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/booknow" element={<BookNow/>} />
        <Route path='/placesincountry' element={<PlacesList/>} />
        <Route path='/places/:country/:placename' element={<PlaceInfo/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/register' element={<RegisterForm/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/alltrips' element={<AllTrips/>} />
        <Route path="/places/:country" element={<FilteredPlaces />} />
        <Route path="/paymentsuccess" element={<PaymentSuc />} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='yourtrips' element = {<YourTrips/>} />
        <Route path= '/category/:category' element = {<Category/>} />
        {/* <Route element={<Footer/>}/> */}
        
      </Routes>
    </Router>
  );
}

export default App;
