import { useState } from "react";
import expand from "emmet";
import { ErrorBoundary } from "react-error-boundary";
import { EmmetError } from "./component/error";
import { ConvertEmmet } from "./component/convertEmmet";

function App() {
  const [sourceText, setsourceText] = useState<string>("");
  const handleChange = (e: any) => {
    setsourceText(() => e.target.value);
  };

  return (
    <div>
      <header className="border-b-2 border-black p-2">
        <h1 className="text-xl font-bold">Emmet Converter</h1>
      </header>
      <div className="max-w-screen-sm  m-auto ">
        <div className="flex space-y-2 px-2 flex-col">
          <h2 className="text-xl font-bold">入力欄</h2>
          <textarea
            placeholder="入力欄"
            rows={20}
            className="border-2 p-2 font-mono          form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        text-gray-900
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
            value={sourceText}
            onChange={handleChange}
          >
          </textarea>
          <h2 className="text-xl font-bold">変換後</h2>
          <div className="border-2 p-2 bg-blue-100">
            <ErrorBoundary
              FallbackComponent={EmmetError}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
              resetKeys={[sourceText]}
            >
              <ConvertEmmet emmetText={sourceText} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
