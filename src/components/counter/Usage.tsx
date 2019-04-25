import * as React from 'react'

import { Count } from './Count';
import { ResetButton } from './ResetButton';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';
import { Counter } from './Counter';

function Usage() {
  return (
    <Counter>
      <Count />
      <IncrementButton>+1</IncrementButton>
      <DecrementButton>-1</DecrementButton>
      <ResetButton>Reset</ResetButton>
    </Counter>
  );
}

export default Usage;
export { Usage }
