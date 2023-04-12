import React, { forwardRef } from "react";

const SpecialInput = forwardRef(function (props, ref) {
  return <input {...props} style={{ color: "red" }} ref={ref} />;
});

export default SpecialInput;
