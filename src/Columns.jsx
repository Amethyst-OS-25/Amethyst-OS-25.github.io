import React from "react";

export default function Columns({ children }) {
  const count = React.Children.count(children);

  return (
    <div className="columns" style={{ "--cols": count }}>
      {children}
    </div>
  );
}