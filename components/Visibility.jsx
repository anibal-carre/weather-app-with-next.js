const Visibility = ({ weather: { visibility } }) => {
  const formattedVisibility = (visibility / 1609.34).toFixed(1);
  return (
    <div className="flex flex-col gap-3 p-5 w-80 h-40 bg-my-blue text-my-white text-base font-medium text-center">
      <p>Visibility</p>
      <h3 className="text-6xl font-bold">
        {formattedVisibility}{" "}
        <span className="font-medium text-4xl">miles</span>
      </h3>
    </div>
  );
};

export default Visibility;
