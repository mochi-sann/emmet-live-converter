import { useAtom } from "jotai";
import React from "react";
import { EmmetTextLogAtom } from "../lib/jotai";
import expand from "emmet";

export const EmmetLog: React.FC = () => {
  const [EmmetText] = useAtom(EmmetTextLogAtom);

  return (
    <div>
      <h2 className="text-xl font-bold py-2">履歴</h2>
      <div className="flex flex-col space-y-2">
        {EmmetText.map((value, key) => (
          <div key={key} className="border p-2">
            <pre>{value.EmmetText}</pre>
            <details>
              <summary className="cursor-pointer">変換後</summary>
              <div className="border-2 p-2 bg-blue-100">
                <pre>{expand(value.EmmetText)}</pre>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};
