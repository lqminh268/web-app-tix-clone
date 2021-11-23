import React from "react";

export default function Nextarrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, right: -55 }}
    >
    </div>
  );
}
