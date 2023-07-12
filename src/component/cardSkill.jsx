import React, { useEffect } from "react";
import Skill from "../skill";
import AOS from "aos";
import "aos/dist/aos.css";

export default function cardSkill() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="container grid grid-cols-2 gap-4 mx-auto mt-10 mb-10 md:grid-cols-7 ms-10"
    >
      {Skill.map((item, key) => (
        <div
          key={key}
          className="w-40 h-40 border border-solid rounded-md border-primary"
        >
          <img src={item.img} alt="skill" className="w-20 h-20 mx-auto mt-7" />
          <p className="mt-2 text-lg font-medium text-center text-success">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
