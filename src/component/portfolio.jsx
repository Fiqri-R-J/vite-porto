import React from "react";
import PortfolioCard from "./porfolioCard";

export default function portfolio() {
  return (
    <div id="portfolio" className="h-screen container mx-auto">
      <h1 className="text-5xl font-semibold text-center text-white pt-14">
        PORTFOLIO
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div className="bg-white h-[1px] w-[400px]"></div>
        </div>
      </div>
      <PortfolioCard />
    </div>
  );
}
