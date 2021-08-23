import React, { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

import "../App.css";

function Recorder() {
  const [record, setRecord] = useState(null);

  const start = () => {
    setRecord(RecordState.START);
    setTimeout(function () {
      stop();
    }, 31000);
  };

  const stop = () => {
    setRecord(RecordState.STOP);
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData);
  };

  return (
    <div className="app">
      <AudioReactRecorder
        state={record}
        onStop={onStop}
        backgroundColor="#19E8F7"
      />
      <button className="button__start" onClick={start}>
        Start
      </button>{" "}
      <button className="button__stop" onClick={stop}>
        Stop
      </button>{" "}
    </div>
  );
}

export default Recorder;
