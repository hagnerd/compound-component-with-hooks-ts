import React from 'react';
import { useCounterContext, CounterCtx } from "./Counter";

type Props = {
  children: React.ReactNode,
}

function IncrementButton({ children }: Props): JSX.Element {
  const { increment } = useCounterContext() as CounterCtx;
  return <button onClick={increment}>{children}</button>;
}

export default IncrementButton
export { IncrementButton }