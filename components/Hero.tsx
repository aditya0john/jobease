
import React, { useState } from "react";

function Hero() {
  const [job, setJob] = useState({ detail: "", place: "" });

  return (
    <div className="h-screen w-full flex flex-col gap-8 items-center justify-center font-[family-name:var(--font-geist-sans)] select-none">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="lg:text-3xl font-bold">
          FIND YOUR <span className="text-green-400">DREAM JOB</span>!!
        </p>
        <p className="flex gap-2 items-center justify-center uppercase text-xl lg:text-6xl font-extrabold drop-shadow-lg">
          your <span className="text-green-400">future</span> starts here
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
        </p>
      </div>
      <div className="max-w-5xl grid grid-rows-2 lg:flex items-center justify-between gap-6">
        <input
          value={job.detail}
          onChange={(e) => {
            setJob((prev) => ({ ...prev, detail: e.target.value }));
          }}
          type="string"
          placeholder="job, title, skills or company"
          className="p-2 rounded-lg outline-none text-black placeholder:capitalize placeholder:text-sm"
        />
        <p className="hidden lg:flex text-4xl">{","}</p>
        <input
          value={job.place}
          onChange={(e) => {
            setJob((prev) => ({ ...prev, place: e.target.value }));
          }}
          type="string"
          placeholder="preferred location"
          className="p-2 rounded-lg outline-none text-black placeholder:capitalize placeholder:text-sm"
        />
        <button className="bg-gray-400/[0.4] hover:bg-gray-400/[0.3] rounded-lg p-2 flex items-center justify-center text-yellow-300 font-bold">
          GET A JOB
        </button>
      </div>
    </div>
  );
}

export default Hero;
