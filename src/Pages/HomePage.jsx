import React from "react";
import GharDekhoBg from "../assets/Images/GharDekho-Bg.png";
import BrowseProperty from "./PropertyCategories";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 🏠 Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
        // style={{ backgroundImage: `url(${GharDekhoBg})` }}
      >
        <div className="text-center text-white bg-black/40 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to Ghar Dekho
          </h1>
          <p className="text-lg text-gray-200">Find your dream home today</p>
        </div>
      </section>

      {/* 🏡 Browse Property Section */}
      <section className="w-full bg-white py-16">
        <BrowseProperty />
      </section>
    </div>
  );
}

export default HomePage;
