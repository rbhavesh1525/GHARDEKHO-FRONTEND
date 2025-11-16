import React from "react";
import BrowseProperty from "./PropertyCategories";
import { HeroSearch } from "@/Components/CompIndex";

function HomePage() {
  return (

    <>
    <HeroSearch />
    <div className="flex flex-col min-h-screen overflow-x-hidden">
     
      <section className="w-full bg-white ">
        <BrowseProperty />
      </section>
    </div>
    </>
  );
}

export default HomePage;
