import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { EmmetError } from "./component/error";
import { ConvertEmmet } from "./component/convertEmmet";
import { EmmetLog } from "./component/EmmetLog";
import ViewSource from "./component/ViewSource";

function App() {
  const [sourceText, setsourceText] = useState<string>("");
  const handleChange = (e: any) => {
    setsourceText(() => e.target.value);
  };

  return (
    <div>
      <ViewSource />
      <header className="border-b-2 border-black p-2 flex ">
        <h1 className="text-xl font-bold">Emmet Converter</h1>
      </header>
      <div className="max-w-screen-sm  m-auto ">
        <div className="flex space-y-2 px-2 flex-col">
          <h2 className="text-xl font-bold">入力欄</h2>
          <textarea
            placeholder="入力欄"
            rows={20}
            className="textarea textarea-bordered font-mono  "
            value={sourceText}
            onChange={handleChange}
          >
          </textarea>
          <h2 className="text-xl font-bold">変換後</h2>
          <div>
            <ErrorBoundary
              FallbackComponent={EmmetError}
              onReset={() => {
                // reset the state of your app so the error doesn't happen again
              }}
              resetKeys={[sourceText]}
            >
              <ConvertEmmet emmetText={sourceText} />
            </ErrorBoundary>
            <EmmetLog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
