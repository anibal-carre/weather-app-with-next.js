"use client";

import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { PiMapPinFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";

function SideBar() {
  let [open, setOpen] = useState(false);
  return (
    <aside className="w-full h-full flex flex-col bg-my-blue gap-16">
      <div className="flex justify-between p-5">
        <button
          onClick={() => setOpen(true)}
          className="w-30 h-10 flex items-center p-5 font-medium text-base text-my-white bg-my-zinc"
        >
          Search for places
        </button>
        <div
          className={`${
            open ? "w-full 2xl:w-4/12" : " translate-y-full sm:translate-y-full"
          } bg-my-blue min-h-screen w-full fixed top-0 left-0 right-0 transition-all duration-300 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12`}
        >
          <div className={`${!open && "hidden"}  flex flex-col gap-5 p-5`}>
            <div className="flex justify-end">
              <button
                className="text-my-white ml-5 font-bold text-2xl"
                onClick={() => setOpen(false)}
              >
                <VscClose />
              </button>
            </div>

            <div className="flex items-center gap-3 text-my-white">
              <AiOutlineSearch className="absolute left-8 z-10 text-second-gray font-medium font-base" />
              <form>
                <input
                  type="text"
                  className="relative bg-my-blue w-64 h-12 border pl-10"
                  placeholder="search location"
                />
                <button className="w-20 h-12 bg-second-blue text-my-white text-base font-semibold p-2">
                  Search
                </button>
              </form>
            </div>

            <div className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between">
              <span className="text-my-white ml-2">London</span>
            </div>

            <div className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between">
              <span className="text-my-white ml-2">Barcelona</span>
            </div>

            <div className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between">
              <span className="text-my-white ml-2">Long Beach</span>
            </div>
          </div>
        </div>
        <button className="w-11 h-11 rounded-full flex items-center justify-center text-2xl text-my-white bg-my-zinc">
          <BiCurrentLocation />
        </button>
      </div>

      <div className="w-full flex justify-center items-center">
        <img src="./Shower.png" alt="shower" />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="font-medium text-9xl text-my-white mb-2">
            29
            <span className="font-normal text-5xl text-second-white">C</span>
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-second-white text-4xl font-semibold mb-8"></p>

          <div className="text-second-zinc text-lg font-medium">
            <span>Today . 5 Jun</span>
          </div>
          <div className="flex items-center text-second-zinc">
            <PiMapPinFill />
            <p className="font-semibold text-lg">Helsinki</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
