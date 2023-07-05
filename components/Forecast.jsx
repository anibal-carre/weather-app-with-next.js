const Forecast = () => {
  return (
    <section className="w-full h-full flex flex-col items-center p-10 bg-the-black sm:w-2/3 sm:h-96  text-my-white">
      <div className="grid grid-cols-2 gap-6 mt-5 sm:flex">
        <div className="flex flex-col gap-6 p-4 bg-my-blue">
          <p>Tomorrow</p>
          <div className="w-full flex items-center justify-center">
            <img src="./Shower.png" alt="shower" />
          </div>
          <div className="flex justify-center w-24 gap-5">
            <span>20°C</span>
            <span className="text-second-white">23°C</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4 bg-my-blue">
          <p>Tomorrow</p>
          <div className="w-full flex items-center justify-center">
            <img src="./Shower.png" alt="shower" />
          </div>
          <div className="flex justify-center w-24 gap-5">
            <span>20°C</span>
            <span className="text-second-white">23°C</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4 bg-my-blue">
          <p>Tomorrow</p>
          <div className="w-full flex items-center justify-center">
            <img src="./Shower.png" alt="shower" />
          </div>
          <div className="flex justify-center w-24 gap-5">
            <span>20°C</span>
            <span className="text-second-white">23°C</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4 bg-my-blue">
          <p>Tomorrow</p>
          <div className="w-full flex items-center justify-center">
            <img src="./Shower.png" alt="shower" />
          </div>
          <div className="flex justify-center w-24 gap-5">
            <span>20°C</span>
            <span className="text-second-white">23°C</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-4 bg-my-blue">
          <p>Tomorrow</p>
          <div className="w-full flex items-center justify-center">
            <img src="./Shower.png" alt="shower" />
          </div>
          <div className="flex justify-center w-24 gap-5">
            <span>20°C</span>
            <span className="text-second-white">23°C</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
