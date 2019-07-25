import React, { useState } from "react";
// import { render } from "react-dom";
import styled from "styled-components";
// import Card from "./Card";

const StyledCard = styled.div`
  border: 1px solid maroon;
  width: 40vw;
`;
const Card = ({ photo }) => {
  console.log("p>Card: ", photo);
  // console.log("num: ", num, "url: ", url);
  const { url, num } = photo;
  return (
    <StyledCard>
      <img src={url} alt={url} />
    </StyledCard>
  );
};

export default Card;
