import React from "react";

export default function Button(props) {
  //can use spread syntax to hold 'children' and all props with same name
  //so instead of onClick={props.onClick}, {...props}  !!
  return <button style={{ backgroundColor: "pink" }} {...props} />;
}
