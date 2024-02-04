import React from 'react';
import { Triangle } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="black"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        position: "fixed",
        left: "50%",
        top: "50%"
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Spinner;