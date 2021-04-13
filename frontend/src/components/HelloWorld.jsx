import React from "react";

const HelloWorld = (props) => {
  return <h1>Hello, {props.name || "Frontend!!"}!</h1>;
};

export default HelloWorld;
