'use client';

import React, { useState, useEffect } from 'react';

function Countdown() {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date('2025-01-04T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex flex-col items-center gap-6 md:gap-0'>
      <div className='flex items-center gap-12 md:gap-24 justify-center'>
        <h1 className='text-7xl md:text-8xl font-abhaya-libre font-semibold flex flex-col items-center md:items-baseline md:flex-row'>
          {loading ? '--' : timeLeft.days.toString().padStart(2, '0')}
          <span className='text-2xl md:text-3xl'>DAYS</span>
        </h1>
        <h1 className='text-7xl md:text-8xl font-abhaya-libre font-semibold flex flex-col items-center md:items-baseline md:flex-row'>
          {loading ? '--' : timeLeft.hours.toString().padStart(2, '0')}
          <span className='text-2xl md:text-3xl'>HOURS</span>
        </h1>
      </div>
      <div className='flex items-center gap-12'>
        <h1 className='text-7xl md:text-8xl font-abhaya-libre font-semibold flex flex-col items-center md:items-baseline md:flex-row'>
          {loading ? '--' : timeLeft.minutes.toString().padStart(2, '0')}
          <span className='text-2xl md:text-3xl'>MINUTES</span>
        </h1>
        <h1 className='text-7xl md:text-8xl font-abhaya-libre font-semibold flex flex-col items-center md:items-baseline md:flex-row'>
          {loading ? '--' : timeLeft.seconds.toString().padStart(2, '0')}
          <span className='text-2xl md:text-3xl'>SECONDS</span>
        </h1>
      </div>
    </div>
  );
}

export default Countdown;