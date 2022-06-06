import React from "react";
import expand from "emmet";

type ConvertEmmetType = {
  emmetText: string;
};
export const ConvertEmmet: React.FC<ConvertEmmetType> = (props) => {
  return (
    <div>
      <pre className="border-2 p-2 bg-blue-100">{expand(props.emmetText)}</pre>
    </div>
  );
};
