
import React from 'react';
import GharDekhoBg from '../assets/Images/GharDekho-Bg.png';
function HomePage() {
  return (
   
    <>
     <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${GharDekhoBg})` }}
    >
      {/* Your content here */}
    </div>

    </>
  );
}

export default HomePage;