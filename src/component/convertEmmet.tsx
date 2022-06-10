import React, { useState } from "react";
import expand from "emmet";
import { useAtom } from "jotai";
import { EmmetTextLogAtom, EmmetTextLogAtomType } from "../lib/jotai";

type ConvertEmmetType = {
  emmetText: string;
};
export const ConvertEmmet: React.FC<ConvertEmmetType> = (props) => {
  const [EmmetText, setEmmetText] = useAtom(EmmetTextLogAtom);

  const AddEmmetText = (text: string) => {
    const NewEmmetText: EmmetTextLogAtomType = {
      EmmetText: text,
      CreatedAt: new Date(),
    };
    setEmmetText((prev) => [...prev, NewEmmetText]);
  };
  return (
    <div>
      <button
        onClick={() => AddEmmetText(props.emmetText)}
        className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white  text-lg leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800  transition duration-150 ease-in-out"
      >
        保存する
      </button>
      <div className="border-2 p-2 bg-blue-100 min-h-[100px]">
        <pre>{expand(props.emmetText)}</pre>
      </div>
    </div>
  );
};
