import { FC } from "react";

export const PrivatePage: FC<{ title: string }> = (props) => {
  return (
    <div className={"h-screen flex justify-center items-center bg-gray-300"}>
      <p className={"text-4xl font-bold"}>{props.title}</p>
    </div>
  );
};
