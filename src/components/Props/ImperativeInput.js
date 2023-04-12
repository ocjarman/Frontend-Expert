//used for useImperativeHandle demo
import React, { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function ImperativeInput(props, ref) {
  const [value, setValue] = useState("");
  //use imperative handle is controlling what the ref values are
  useImperativeHandle(
    ref,
    () => {
      return {
        reset: () => setValue(""),
      };
    }
    //if only complete on mount, add empty dependency array
  );

  return (
    <input
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder={props.placeholder}
    />
  );
});
