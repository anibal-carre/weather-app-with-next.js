const AirPressure = ({ weather: { pressure } }) => {
  return (
    <div className="flex flex-col gap-3 p-5  w-80 h-40 bg-my-blue text-my-white text-base font-medium text-center">
      <p>Air Pressure</p>
      <h3 className="text-6xl font-bold">
        {pressure} <span className="font-medium text-4xl">mb</span>
      </h3>
    </div>
  );
};

export default AirPressure;
