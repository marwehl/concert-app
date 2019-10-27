import React from "react";
import Date from "./Date";

export default {
  title: "Date",
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return (
    <div style={{ width: "260px", padding: "10px", background: "white" }}>
      {storyFn()}
    </div>
  );
}

export const date = () => <Date fullDate="Fri Oct 25 2019 16:23:00 GMT+0200" />;
