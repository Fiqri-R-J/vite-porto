import React from "react";

export default function certificate() {
  return (
    <div id="certificate" className="h-screen container mx-auto">
      <h1 className="text-5xl font-semibold text-center text-white pt-14">
        CERTIFICATE
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div className="bg-white h-[1px] w-[400px]"></div>
        </div>
      </div>
      <div class="flex pt-10">
        <div class="mx-auto">
          <div className="carousel h-[450px] w-[650px] rounded-lg ">
            <div id="item1" className="carousel-item w-full">
              <img
                src="../Pijar.jpg"
                className="h-[450px] w-[650px]"
                alt="certificate"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="../bwa.jpg"
                className="h-[450px] w-[650px]"
                alt="certificate"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2 ">
            <a
              href="#item1"
              className="hover:bg-cyan-700 hover:text-white bg-white text-black btn btn-xs"
            >
              1
            </a>
            <a
              href="#item2"
              className="hover:bg-cyan-700 hover:text-white bg-white text-black btn btn-xs"
            >
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
