import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <div
      className={
        "h-screen flex flex-col justify-center items-center bg-gray-300"
      }
    >
      <p className={"text-4xl font-bold"}>Welcome on the main page</p>
      <p className={"text-blue-500 font-bold"}>
        This is an example app of fake authentication
      </p>
    </div>
  );
};
