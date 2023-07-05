import { iconUrlFromCode } from "@/services/WeatherService";

const Forecast = ({ title, items }) => {
  return (
    <section className="w-full h-full flex flex-col items-center p-10 bg-the-black sm:w-2/3 sm:h-96  text-my-white">
      <div className="grid grid-cols-2 gap-6 mt-5 sm:flex">
        {items.map((item) => (
          <div className="flex flex-col gap-6 p-4 bg-my-blue">
            <p>{item.title}</p>
            <div className="w-full flex items-center justify-center">
              <img
                src={iconUrlFromCode(item.icon)}
                alt="shower"
                className="h-24"
              />
            </div>
            <div className="flex justify-center w-24 gap-8">
              <span className="text-second-white">{`${item.temp_max.toFixed(
                0
              )}°`}</span>

              <span>{`${item.temp_min.toFixed(0)}°`}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;
