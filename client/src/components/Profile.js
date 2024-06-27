// Profile.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../redux/slices/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!user) {
      dispatch(getUserInfo());
    }
  }, [dispatch, user]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className='profile'>
      <h2>Profile</h2>
      <p><strong>First Name:</strong> {user.firstname}</p>
      <p><strong>Last Name:</strong> {user.lastname}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.emailid}</p>
    </div>
  );
};

export default Profile;