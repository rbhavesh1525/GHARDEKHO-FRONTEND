import React from "react";
import GharDekhoBg from "../assets/Images/GharDekho-Bg.png";
import BrowseProperty from "./PropertyCategories";
import { HeroSearch } from "@/Components/CompIndex";

function HomePage() {
  return (

    <>
    <HeroSearch />
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 🏠 Hero Section */}
      
    
      {/* 🏡 Browse Property Section */}
      <section className="w-full bg-white py-16">
        <BrowseProperty />
      </section>
    </div>
    </>
  );
}

export default HomePage;
