import React from 'react';
import { useCounterContext, CounterCtx } from "./Counter";

type Props = {
  children: React.ReactNode,
}

function ResetButton({ children }: Props): JSX.Element {
  const { reset } = useCounterContext() as CounterCtx;
  return (
    <button onClick={reset}>{children}</button>
  );
}

export default ResetButton
export { ResetButton }
