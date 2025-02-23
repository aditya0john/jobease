import { recommendedJobs } from "@/data/index";
import React, { useState } from "react";

function Recommendations() {

  return (
    <div className="h-screen w-full flex flex-col gap-8 items-center justify-start p-4">
      <p className="lg:text-3xl font-bold">
        <span className="text-green-400">Recomended JOBS</span>!!
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
       
        {recommendedJobs.map((data, i) => (
          <button
            key={i}
            className="bg-gray-400/[0.2] hover:bg-gray-400/[0.3] h-[10rem] rounded-lg p-2 flex flex-col text-justify items-start justify-center"
          >
            <p className="text-2xl text-yellow-200 uppercase font-extrabold tracking-wider">
              {data.Name}
            </p>
            <span className="flex gap-2">
              <p className="italic text-md">{data.Company}</p>
              <p>{"-"}</p>
              <p className="text-md">{data.Location}</p>
            </span>
            <p className="text-lg mt-4">{data.Description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
