import { MdAssistantNavigation } from "react-icons/md";

const WindStatus = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-5 w-80 h-52 bg-my-blue text-my-white text-base font-medium text-center">
      <p>Wind status</p>
      <h3 className="text-6xl font-bold">
        95
        <span className=" font-medium text-4xl">mph</span>
      </h3>
      <div className="flex items-center gap-1">
        <MdAssistantNavigation className=" text-my-white text-4xl " />
        <span className="text-sm">WSW</span>
      </div>
    </div>
  );
};

export default WindStatus;
