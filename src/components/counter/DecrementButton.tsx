import React from 'react';
import { useCounterContext, CounterCtx } from "./Counter";

type Props = {
  children: React.ReactNode,
}

function DecrementButton({ children }: Props): JSX.Element {
  const { decrement } = useCounterContext() as CounterCtx;

  return <button onClick={decrement}>{children}</button>;
}

export default DecrementButton
export { DecrementButton }
