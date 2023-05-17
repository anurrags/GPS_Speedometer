import React, { useEffect, useState } from "react";

const GpsSpeedometer = () => {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { speed } = position.coords;
        setSpeed(speed);
      },
      (error) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div>
      <h2>Current Speed: {speed} m/s</h2>
      {/* You can replace the above line with your preferred speedometer UI */}
    </div>
  );
};

export default GpsSpeedometer;
