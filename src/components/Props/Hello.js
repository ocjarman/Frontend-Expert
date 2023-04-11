import React from "react";

const Hello = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

//this is uncommon. more common to give default prop in parameters form above
Hello.defaultProps = {
  name: "User",
};

export default Hello;
