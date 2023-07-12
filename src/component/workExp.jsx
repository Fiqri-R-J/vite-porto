import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function workExp() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="container mx-auto mt-10 mb-10 border rounded-md sm:mb-0 border-primary w-96"
    >
      <h2 className="pt-5 pb-10 text-2xl font-semibold text-center">
        Work Experience
      </h2>
      <div className="container px-10 pb-5">
        <time class="mb-1 text-sm font-normal leading-none">
          April 2020 - September 2022
        </time>
        <h3 class="text-lg font-semibold">Freelance Programmer</h3>

        <ul class="list-disc mt-4 text-base font-normal ps-5">
          <li>Designing Applications based on client requirements</li>
          <li>Develop applications based on designs that have been made</li>
          <li>Maintain applications that have been built until stable</li>
        </ul>
      </div>
    </div>
  );
}
