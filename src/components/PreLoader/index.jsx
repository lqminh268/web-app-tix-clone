import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./index.css";

function PreLoader() {
  return (
    <div className="pre_loader">
      <HashLoader color={"#368ED7"} size={80} />
    </div>
  );
}

export default PreLoader;
