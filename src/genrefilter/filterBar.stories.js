import React from "react";
import FilterBar from "./FilterBar";

export default {
  title: "Filterbar",
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return (
    <div style={{ width: "300px", padding: "10px", background: "white" }}>
      {storyFn()}
    </div>
  );
}

export const filterbar = () => <FilterBar genres={['Rock', 'Pop', 'Folk', 'Indie', 'Alternative', 'Metall']} />;
