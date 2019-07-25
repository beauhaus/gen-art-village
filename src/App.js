import React from "react";
import { render } from "react-dom";
import { emojiArray } from "./data/emojiDB20.json";
import Emoticon from "./Emoticon";
const App = () => {
  return (
    <div className="app-container">
      {emojiArray.map(item => (
        <Emoticon
          key={item.icon_id}
          label={item.label}
          icon={item.icon}
        ></Emoticon>
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
