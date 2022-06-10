import React from "react";
import expand from "emmet";

type ConvertEmmetType = {
  emmetText: string;
};
export const ConvertEmmet: React.FC<ConvertEmmetType> = (props) => {
  return (
    <div>
      <button className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white  text-lg leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out">
        保存する
      </button>
      <div className="border-2 p-2 bg-blue-100 min-h-[100px]">
        <pre>{expand(props.emmetText)}</pre>
      </div>
    </div>
  );
};
