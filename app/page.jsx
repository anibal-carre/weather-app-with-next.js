"use client";

import AirPressure from "@/components/AirPressure";
import Forecast from "@/components/Forecast";
import Humidity from "@/components/Humidity";
import SideBar from "@/components/SideBar";
import Unit from "@/components/Unit";
import Visibility from "@/components/Visibility";
import WindStatus from "@/components/WindStatus";
import getFormattedWeatherData from "@/services/WeatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function Home() {
  const [query, setQuery] = useState({ q: "helsinki" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location";

      toast.info("Feaching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}`
        );
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="w-screen h-screen sm:flex ">
      <section className="w-full h-full 2xl:w-4/12 xl:w-4/12">
        {weather && <SideBar weather={weather} setQuery={setQuery} />}
      </section>
      <div className="flex flex-col items-center md:items-end sm:items-end sm:flex sm:flex-col text-my-white  2xl:w-8/12 p-5">
        <section className="2xl:mr-28">
          <div className="hidden sm:flex sm:justify-end sm:w-full sm:gap-3 sm:font-bold sm:text-lg font-raleway  sm:visible md:items-end 2xl:justify-end">
            {weather && <Unit units={units} setUnits={setUnits} />}
          </div>
        </section>

        <section className="text-my-white  flex justify-center sm:w-full md:w-full 2xl:w-full 2xl:flex 2xl:items-end 2xl:justify-center 2xl:ml-5">
          {weather && <Forecast items={weather.daily} />}
        </section>

        {weather && (
          <div className="flex justify-start text-2xl font-bold text-my-white bg-the-black   sm:w-full md:pl-28 lg:pl-10 xl:pl-36 2xl:pl-44">
            <div className="w-80">
              <h2 className="mb-10 ml-8">Today’s Hightlights</h2>
            </div>
          </div>
        )}

        <section className="flex flex-col justify-center items-center bg-the-black text-my-white  sm:w-full 2xl:items-center">
          <div className="flex flex-col justify-center items-center gap-5 sm:flex sm:flex-col">
            <div className="flex flex-col gap-6 sm:flex sm:flex-row">
              {weather && <WindStatus weather={weather} />}

              {weather && <Humidity weather={weather} />}
            </div>

            <div className="flex flex-col sm:flex sm:flex-row gap-6">
              {weather && <Visibility weather={weather} />}
              {weather && <AirPressure weather={weather} />}
            </div>
          </div>
        </section>

        {weather && (
          <div className="w-full">
            <footer className="bg-the-black h-10 flex justify-center items-center xl:justify-center ">
              <p className="text-my-white">
                created by{" "}
                <span className=" font-bold underline">DavidCarreño</span> -
                devChallenges.io
              </p>
            </footer>
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default Home;
