"use client";

import AirPressure from "@/components/AirPressure";
import Forecast from "@/components/Forecast";
import Humidity from "@/components/Humidity";
import SideBar from "@/components/SideBar";
import Unit from "@/components/Unit";
import Visibility from "@/components/Visibility";
import WindStatus from "@/components/WindStatus";
import getWeatherData from "@/services/WeatherService";

function Home() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "london" });
    console.log(data);
  };

  fetchWeather();
  return (
    <div className="w-screen h-screen sm:flex ">
      <section className="w-full h-full 2xl:w-4/12 xl:w-4/12">
        <SideBar />
      </section>
      <div className="flex flex-col items-center md:items-end sm:items-end sm:flex sm:flex-col text-my-white border 2xl:w-8/12">
        <section className="2xl:mr-28">
          <div className="hidden sm:flex sm:justify-end sm:w-full sm:gap-3 sm:font-bold sm:text-lg font-raleway border sm:visible md:items-end 2xl:justify-end">
            <Unit />
          </div>
        </section>

        <section className="text-my-white border flex justify-center sm:w-full md:w-full 2xl:w-full 2xl:flex 2xl:items-end 2xl:justify-center 2xl:ml-5">
          <Forecast />
        </section>

        <div className="flex justify-start text-2xl font-bold text-my-white bg-the-black  border sm:w-full md:pl-28 lg:pl-10 xl:pl-36 2xl:pl-44">
          <div className="w-80">
            <h2 className="mb-10 ml-8">Today’s Hightlights</h2>
          </div>
        </div>

        <section className="flex flex-col justify-center items-center bg-the-black text-my-white border sm:w-full 2xl:items-center">
          <div className="flex flex-col justify-center items-center gap-5 sm:flex sm:flex-col">
            <div className="flex flex-col gap-6 sm:flex sm:flex-row">
              <WindStatus />
              <Humidity />
            </div>

            <div className="flex flex-col sm:flex sm:flex-row gap-6">
              <Visibility />
              <AirPressure />
            </div>
          </div>
        </section>

        <footer className="bg-the-black h-20 flex justify-center">
          <p className="text-my-white mt-12 mb-20">
            created by <span className=" underline">DavidCarreño</span> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
