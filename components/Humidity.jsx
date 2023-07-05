const Humidity = () => {
  return (
    <div className="flex flex-col gap-5 p-5 w-80 h-52 bg-my-blue text-my-white text-base font-medium text-center">
      <p>Humidity</p>
      <h3 className="text-6xl font-bold">
        84
        <span className=" font-light text-4xl">%</span>
      </h3>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-4/6 flex justify-between font-bold text-second-white text-xs">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/6 h-2 rounded bg-my-white">
            <div className="w-10/12 h-2 rounded bg-my-yellow"></div>
          </div>
        </div>
        <div className="w-4/6 flex justify-end">
          <span className="font-bold text-xs text-second-white">%</span>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
