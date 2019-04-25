import React from 'react';
import { Count } from "./Count";
import { ErrorBoundary } from "./ErrorBoundary";

function Failure() {
  return (
  <ErrorBoundary>
    <Count />
  </ErrorBoundary>
  );
}

export default Failure;
export { Failure }
