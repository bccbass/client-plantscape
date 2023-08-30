import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h6 className="mt-3 text-success">Loading...</h6>
    </div>
  );
};

export default Loading;
