import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="spinner">
      <ClipLoader
        color="#FFD200"
        loading={true}
        className="block mx-0 my-auto"
        size={35}
      />{" "}
    </div>
  );
};

export default Spinner;
