import React from "react";
import expand from "emmet";
type CodeViewType = {
  CodeText: string;
};
export const CodeView: React.FC<CodeViewType> = (props) => {
  const CodeLines = expand(props.CodeText).split(/\r?\n/);

  return (
    <div>
      <div className="mockup-code ">
        {CodeLines.map((value, key) => <pre data-prefix={key + 1}>{value}
        </pre>)}
      </div>
    </div>
  );
};
