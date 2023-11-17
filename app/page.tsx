import Hero from "@/components/Hero";
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
          <div className="home__filter-container">
              {/* Custom Filter title - fuel */}
              {/* Custom Filter title - year */}
          </div>
        </div>
      </div>
    </main>
  );
}
