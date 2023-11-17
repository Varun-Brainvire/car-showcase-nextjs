import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__texgt-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          {/* Search Bar */}
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
              {/* Custom Filter title - fuel */}
              {/* Custom Filter title - year */}
          </div>
        </div>
      </div>
    </main>
  );
}
