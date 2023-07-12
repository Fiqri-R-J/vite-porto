import React from "react";

export default function porfolioCard() {
  return (
    <div className="mt-16 max-w-sm border border-white hover:border-blue-500 transition duration-300 ease-in-out rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Mama Recipe
          </h5>
        </a>
      </div>
    </div>
  );
}
