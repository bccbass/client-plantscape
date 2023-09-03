import React from "react";

const Alert = ({variant, message}) => {
  return (
    <>

        <Alert key={variant} variant={variant}>
          {message}!
        </Alert>
    </>

  );
};

export default Alert;
