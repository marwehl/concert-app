import React from "react";
import Audio from "./Audio";

export default {
  title: "Audio",
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return (
    <div style={{ width: "400px", padding: "10px", background: "white" }}>
      {storyFn()}
    </div>
  );
}

export const audio = () => <Audio />;
