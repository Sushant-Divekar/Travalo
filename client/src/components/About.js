import React, { useEffect } from 'react';
import './About.scss';
import { useNavigate } from 'react-router';

const About = () => {
  const navigateLogin = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch('http://localhost:5000/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigateLogin("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div method="GET">
      About 
    </div>
  );
}

export default About;
