const Unit = () => {
  return (
    <div className="hidden sm:flex sm:justify-end sm:w-full sm:gap-3 sm:font-bold sm:text-lg font-raleway border sm:visible md:items-end 2xl:justify-end">
      <button className="w-12 h-12 p-3 rounded-full bg-my-white text-my-black">
        °C
      </button>

      <button
        className="w-12 h-12 p-3 rounded-full 
            bg-my-gray text-my-white mr-16"
      >
        °F
      </button>
    </div>
  );
};

export default Unit;
