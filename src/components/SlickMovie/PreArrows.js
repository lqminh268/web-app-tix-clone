import React from "react";

export default function Prearrows(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, left: -55 }}
    >
    </div>
  );
}
