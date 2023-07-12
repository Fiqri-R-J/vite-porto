import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import { FaGithub } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative bg-base-100 text-secondary">
      <Navbar />
      <h1
        data-aos="fade-down"
        className="pt-20 text-5xl font-semibold text-center"
      >
        PORTFOLIO
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div
            data-aos="fade-up"
            className="bg-primary h-[1px] w-[400px]"
          ></div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="container mx-auto mt-10 border-2 shadow-xl card w-96 bg-neutral border-neutral"
      >
        <figure>
          <img src="Resep.PNG" alt="portfolio" />
        </figure>
        <div className="card-body">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl card-title">Mama Recipe</h2>
            <div className="flex space-x-1">
              <a href="#">
                <FaGithub className="mt-1 text-2xl" />
              </a>
              <a href="#">
                <BsGlobe className="mt-1 text-2xl ms-2" />
              </a>
            </div>
          </div>
          <p>Web App for search and sharing about recipe around the world.</p>
          <p>created used Node.js, Express.js, Next.js, and Tailwind Css</p>
        </div>
      </div>
    </div>
  );
}
