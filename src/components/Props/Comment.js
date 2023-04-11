import React from "react";

const Comment = ({ username, time, children }) => {
  return (
    <section>
      <p>
        {username} commented at {time}
      </p>
      {children}
    </section>
  );
};

export default Comment;
