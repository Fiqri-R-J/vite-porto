import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certificate() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative bg-base-100">
      <Navbar />
      <h1
        data-aos="fade-down"
        className="pt-20 text-5xl font-semibold text-center"
      >
        CERTIFICATE
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div
            data-aos="fade-up"
            className="bg-primary h-[1px] w-[400px]"
          ></div>
        </div>
      </div>
      <div data-aos="zoom-in" class="flex pt-5">
        <div class="mx-auto">
          <div className="carousel h-[350px] w-[450px] md:h-[450px] md:w-[650px] rounded-lg shadow-lg">
            <div id="item1" className="w-full carousel-item">
              <img
                src="../Pijar.jpg"
                className="h-[350px] w-[450px] md:h-[450px] md:w-[650px]"
                alt="certificate"
              />
            </div>
            <div id="item2" className="w-full carousel-item">
              <img
                src="../bwa.jpg"
                className="h-[350px] w-[450px] md:h-[450px] md:w-[650px]"
                alt="certificate"
              />
            </div>
          </div>
          <div className="flex justify-center w-full gap-2 py-2 ">
            <a
              href="#item1"
              className="text-black bg-white hover:bg-cyan-700 hover:text-white btn btn-xs"
            >
              1
            </a>
            <a
              href="#item2"
              className="text-black bg-white hover:bg-cyan-700 hover:text-white btn btn-xs"
            >
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
