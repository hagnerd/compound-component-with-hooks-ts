import { useCreateContext } from './useCreateContext';
import React from 'react';

type Nullable<T> = T | null;

type CounterCtx = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = React.createContext<Nullable<CounterCtx>>(null);

function useCounterContext() {
  return useCreateContext(CounterContext, 'Do not render a Counter Child outside of a Counter Provider');
}

type CounterProps = {
  initialValue?: number;
  children: React.ReactNode;
};

function Counter({ initialValue = 0, children }: CounterProps): JSX.Element {
  const [count, setCount] = React.useState(initialValue);
  const increment = React.useCallback(() => setCount(c => c + 1), []);
  const decrement = React.useCallback(() => setCount(c => c - 1), []);
  const reset = React.useCallback(() => setCount(initialValue), []);
  const value = React.useMemo(() => ({ count, increment, decrement, reset }), [count]);

  return <CounterContext.Provider value={value}>
    {children}
  </CounterContext.Provider>;
}

export default Counter;
export { useCounterContext, Counter, CounterCtx }
