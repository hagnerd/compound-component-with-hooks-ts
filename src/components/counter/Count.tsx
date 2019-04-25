import React from 'react';
import { useCounterContext, CounterCtx } from "./Counter";

function Count() {
  const { count } = useCounterContext() as CounterCtx;
  return <h2>{count}</h2>;
}

export default Count;
export { Count };
