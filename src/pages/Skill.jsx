import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import CardSkill from "../component/cardSkill";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skill() {
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
        SKILL
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div
            data-aos="fade-up"
            className="bg-primary h-[1px] w-[400px]"
          ></div>
        </div>
      </div>
      <CardSkill />
    </div>
  );
}
