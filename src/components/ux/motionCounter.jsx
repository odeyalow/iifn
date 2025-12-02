"use client";

import CountUp from 'react-countup';

const MotionCounter = ({ text, number }) => {
  return (
    <div className="flex flex-col items-center">
      <strong
      style={{ fontSize: 'clamp(5rem, 10vw, 10rem)'}}
      className="font-extrabold">
        <CountUp
          end={number}
          duration={5}
          easingFn={(t, b, c, d) => c * (1 - Math.pow(1 - t / d, 3)) + b}
          enableScrollSpy
          scrollSpyOnce
        />
      </strong>
      <span style={{ fontSize: 'clamp(1.25rem, 2vw, 1.8rem)'}}
      className="text-center font-semibold">{text}</span>
    </div>
  );
};

export default MotionCounter;