import React, { useEffect, useRef } from 'react';
import './ExperienceContainer.scss';

const ExperienceContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.counter');
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const increment = target / 50; // Adjust the divisor to control the speed of the animation

              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30); // Adjust the timeout to control the speed of the animation
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust this value to trigger the animation when 10% of the element is visible
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='experience-container'>
      <div className='container1'>
        <p className='counter' data-target='12000'>0</p>
        <p>Successful Trips</p>
      </div>

      <div className='container1'>
        <p className='counter' data-target='12000'>0</p>
        <p>Successful Trips</p>
      </div>

      <div className='container1'>
        <p className='counter' data-target='12000'>0</p>
        <p>Successful Trips</p>
      </div>
    </div>
  );
};

export default ExperienceContainer;
