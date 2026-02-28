import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center text-white sm:px-20">
      <p className="text-lg ">
          ready to watch ? enter your email to create or restart your membership
        </p>
        <div className="m-4 flex flex-col space-y-6 sm:flex-row sm:space-y-0">
          <input
            type="text"
            placeholder="Enter your email"
            className="h-14 w-full min-w-[400px] bg-white px-24 py-4 text-black outline-none sm:p-4"
          />
          <button className="h-14 flex w-full items-center justify-center bg-[#e50914] py-2 text-xl sm:py-0 px-8">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      
    </div>
  );
};

export default Subscribe;
