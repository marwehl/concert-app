import React from "react";
import FilterButton from "./FilterButton";

export default {
  title: "Filterbutton",
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return (
    <div style={{ width: "300px", padding: "10px", background: "white" }}>
      {storyFn()}
    </div>
  );
}

export const filterbutton = () => <FilterButton text='Rock' />;

export const filterbuttonActive = () => (
         <FilterButton
           text="Rock"
           style={{ backgroundColor: "#f39b4f" }}
         />
       );
