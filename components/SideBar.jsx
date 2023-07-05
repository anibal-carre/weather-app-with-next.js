import { useState, useEffect, useRef } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { PiMapPinFill } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import { formatToLocalTime, iconUrlFromCode } from "@/services/WeatherService";
import { toast } from "react-toastify";

function SideBar({
  weather: { dt, timezone, name, details, icon, temp },
  setQuery,
}) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setOpen(false);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
        setOpen(false);
      });
    }
  };

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

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
          ref={sidebarRef}
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

              <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text"
                className="relative bg-my-blue w-64 h-12 border pl-10"
                placeholder="search location"
              />
              <button
                className="w-20 h-12 bg-second-blue text-my-white text-base font-semibold p-2"
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>

            <div
              className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between"
              onClick={() => {
                setQuery({ q: "london" });
                setOpen(false);
              }}
            >
              <span className="text-my-white ml-2">London</span>
            </div>

            <div
              id="barcelona"
              className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between"
              onClick={() => {
                setQuery({ q: "barcelona" });
                setOpen(false);
              }}
            >
              <span className="text-my-white ml-2">Barcelona</span>
            </div>

            <div
              className="h-20 text-second-gray text-base font-medium mt-8 hover:border flex items-center justify-between"
              onClick={() => {
                setQuery({ q: "long beach" });
                setOpen(false);
              }}
            >
              <span className="text-my-white ml-2">Long Beach</span>
            </div>
          </div>
        </div>
        <button
          className="w-11 h-11 rounded-full flex items-center justify-center text-2xl text-my-white bg-my-zinc"
          onClick={handleLocationClick}
        >
          <BiCurrentLocation />
        </button>
      </div>

      <div className="w-full flex justify-center items-center">
        <img src={iconUrlFromCode(icon)} alt="shower" className=" h-56" />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="font-medium text-9xl text-my-white mb-2">
            {`${temp.toFixed(0)}°`}
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <p className="text-second-white text-4xl font-semibold mb-8">
            {details}
          </p>

          <div className="text-second-zinc text-lg font-medium">
            <span>{formatToLocalTime(dt, timezone)}</span>
          </div>
          <div className="flex items-center text-second-zinc">
            <PiMapPinFill />
            <p className="font-semibold text-lg">{name}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
