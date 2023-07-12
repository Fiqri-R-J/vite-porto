import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function aboutMe() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="container px-10 pb-5 mx-auto border rounded-md mt-14 sm:mt-10 border-primary w-96"
    >
      <h2 className="pt-5 pb-10 text-2xl font-semibold text-center">
        About Me
      </h2>
      <h3 className="pb-5 text-lg font-normal">
        Hi, I'm Fiqri Ramadhan Jupri, a Fullstack Programmer, with more than 2
        years experience as a freelance programmer, using Laravel and Bootstrap.
        I am a Bachelor of Informatics Engineering and Fullstack Web Development
        from Bootcamp Pijar Camp who is skilled with fullstack Javascript.
      </h3>
      <div className="card-actions">
        <button className="btn btn-outline btn-warning">See My Resume</button>
      </div>
    </div>
  );
}
