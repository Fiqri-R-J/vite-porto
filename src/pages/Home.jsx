import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative bg-base-100">
      <Navbar />
      <div class="flex h-screen">
        <div data-aos="zoom-in" data-aos-duration="1000" class="sm:flex m-auto">
          <div class="sm:m-auto pt-10 sm:pt-0 sm:ps-10">
            <h1 className="text-3xl font-semibold sm:text-5xl text-secondary">
              FIQRI RAMADHAN JUPRI
            </h1>
            <h1 className="text-3xl font-semibold sm:text-5xl text-secondary">
              FULLSTACK DEVELOPER
            </h1>
          </div>
          <img src="profile.png" alt="logo" className="w-60 ps-14 sm:ps-0" />
        </div>
      </div>
    </div>
  );
}
