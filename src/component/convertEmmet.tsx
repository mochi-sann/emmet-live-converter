import React, { useState } from "react";
import expand from "emmet";
import { useAtom } from "jotai";
import { EmmetTextLogAtom, EmmetTextLogAtomType } from "../lib/jotai";
import classNames from "classnames";

type ConvertEmmetType = {
  emmetText: string;
};
export const ConvertEmmet: React.FC<ConvertEmmetType> = (props) => {
  const [, setEmmetText] = useAtom(EmmetTextLogAtom);

  const BtnDisable = props.emmetText.length == 0;
  const AddEmmetText = (text: string) => {
    const NewEmmetText: EmmetTextLogAtomType = {
      EmmetText: text,
      CreatedAt: new Date(),
    };
    setEmmetText((prev) => [NewEmmetText, ...prev]);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => AddEmmetText(props.emmetText)}
        disabled={BtnDisable}
        className={classNames("btn", "w-full ", {
          "btn-disabled": BtnDisable,
          "btn-active": !BtnDisable,
        })}
      >
        保存する
      </button>
      <div className="border-2 p-2 bg-blue-100 min-h-[100px]">
        <pre>{expand(props.emmetText)}</pre>
      </div>
    </div>
  );
};
