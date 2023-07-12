import React from "react";
import CardSkill from "./cardSkill";

export default function skill() {
  return (
    <div id="skill" className="h-auto">
      <h1 className="text-5xl font-semibold text-center text-white pt-14">
        SKILL
      </h1>
      <div class="flex mt-2">
        <div class="mx-auto">
          <div className="bg-white h-[1px] w-[300px]"></div>
        </div>
      </div>
      <CardSkill />
    </div>
  );
}
