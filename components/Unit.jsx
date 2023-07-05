const Unit = ({ units, setUnits }) => {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="hidden sm:flex sm:justify-end sm:w-full sm:gap-3 sm:font-bold sm:text-lg font-raleway sm:visible md:items-end 2xl:justify-end">
      <button
        name="metric"
        className="w-12 h-12 p-3 rounded-full bg-my-white text-my-black"
        onClick={handleUnitsChange}
      >
        °C
      </button>

      <button
        name="imperial"
        className="w-12 h-12 p-3 rounded-full 
            bg-my-gray text-my-white mr-16"
        onClick={handleUnitsChange}
      >
        °F
      </button>
    </div>
  );
};

export default Unit;
