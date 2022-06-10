import React from "react";
import expand from "emmet";

type ConvertEmmetType = {
  emmetText: string;
};
export const ConvertEmmet: React.FC<ConvertEmmetType> = (props) => {
  return (
    <div>
      <pre className="">{expand(props.emmetText)}</pre>
    </div>
  );
};
