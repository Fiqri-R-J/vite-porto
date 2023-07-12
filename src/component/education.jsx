import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function education() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="container px-10 mx-auto mt-10 border rounded-md border-primary w-96"
    >
      <h2 className="pt-5 pb-10 text-2xl font-semibold text-center">
        Educational Background
      </h2>
      <div className="pb-5">
        <time class="mb-1 text-sm font-normal leading-none">
          October 2017 - November 2021
        </time>
        <h3 class="text-lg font-semibold">University Dinamika Bangsa Jambi</h3>
        <p className="mb-3 text-sm font-normal leading-none">
          Informatics Engineering
        </p>
      </div>
      <div className="pb-5">
        <time class="mb-1 text-sm font-normal leading-none">
          November 2022 - April 2023
        </time>
        <h3 class="text-lg font-semibold">Bootcamp at Pijar Camp</h3>
        <p className="mb-3 text-sm font-normal leading-none">
          Fullstack Web Development
        </p>
      </div>
    </div>
  );
}
