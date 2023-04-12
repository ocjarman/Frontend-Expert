import React, { forwardRef, useState, useImperativeHandle } from "react";

export default forwardRef(function ImperativeDemoCounter(props, ref) {
  const [count, setCount] = useState(0);

  //use imperative handle is controlling what the ref values are
  useImperativeHandle(
    ref,
    () => {
      return {
        reset: () => setCount(0),
      };
    }
    //if only complete on mount, add empty dependency array
  );

  //when dealing with custom components and refs, we need to use forwardRefs
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
});
