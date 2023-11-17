"use client";

import { Manufacturer } from "@/types";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacture = ({ manufacturer, setManufacturer }: Manufacturer) => {
  const [query, setQuery] = useState("");

  const filterManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagon"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />

          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Option></Combobox.Option>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
