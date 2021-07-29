import React from "react";
import Spinner from "../spinner/Spinner.js";

//Higher order component. Takes an another component as an argument, and returns it if the page is done loading.
//In other case (page is still loading), it returns the spinner component
const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
