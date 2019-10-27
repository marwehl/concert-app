import React from "react";
import Heart from "./Heart";

export default {
  title: "Heart",
  decorators: [Wrapper]
};

function Wrapper(storyFn) {
  return (
    <div style={{ width: "400px", padding: "10px", background: "white" }}>
      {storyFn()}
    </div>
  );
}

export const fullHeart = () => <Heart currentUser={{username: "Josi", password:"word5678", favorites: ["5dad9cdbfe3158e15a92581d"]}}
id="5dad9cdbfe3158e15a92581d" />;

export const heart = () => (
         <Heart
           currentUser={{
             username: "Josi",
             password: "word5678",
             favorites: ["5dad9cdbfe3158e15a92581d"]
           }}
           id="5db0925132d3144c1c092cff"
         />
       );
