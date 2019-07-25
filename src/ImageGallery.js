import React, { useState } from "react";
import styled from "styled-components";
import { imageFeed } from "./data/images.json";
import Card from "./Card";

const StyledGallery = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
`;
const ImageGallery = () => {
  const [toggleGallery, setToggleGallery] = useState(false);
  const toggle = () => {
    setToggleGallery(toggleGallery ? false : true);
  };
  return (
    <StyledGallery>
      <button onClick={toggle}>toggle: {toggleGallery.toString()}</button>
      {toggleGallery
        ? imageFeed.map((photo, idx) => <Card key={idx} photo={photo} />)
        : ""}
    </StyledGallery>
  );
};

export default ImageGallery;

/*

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return <div className={`switch ${toggleState}`} onClick={toggle} />;
}
*/
