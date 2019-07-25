import React from "react";

const Emoticon = props => {
  console.log("p> emoticon: ", props);
  return (
    <div className="emoticon-wrapper">
      <span role="img" aria-label={props.label}>
        {props.icon}
      </span>
    </div>
  );
};

export default Emoticon;
