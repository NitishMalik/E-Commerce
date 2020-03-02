import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinnerStyle";

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default Spinner;
