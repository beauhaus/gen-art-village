import React from "react";
import { render } from "react-dom";
// import SearchInput from "./SearchInput";
// import ImageGallery from "./ImageGallery";
import TopThird from "./background/TopThird";
import MidThird from "./middleground/MidThird";
import BottomThird from "./foreground/BottomThird";

const App = () => {
  return (
    <div className="app-container">
      {/*<pre>This is App.js</pre>*/}
      {`App`}
      <TopThird />
      <MidThird />
      <BottomThird />
    </div>
  );
};

// <ImageGallery />
// <SearchInput />
render(<App />, document.getElementById("root"));
