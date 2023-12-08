import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "w-screen h-screen bg-gray-200 flex justify-center items-center gap-4"
      }
    >
      <p className={"font-bold text-black text-4xl"}>NOT FOUND</p>
      <button
        className={
          "hover:scale-105 bg-purple-400 p-2 font-bold text-white rounded-full"
        }
        onClick={() => navigate("/main")}
      >
        Go to main page
      </button>
    </div>
  );
};
