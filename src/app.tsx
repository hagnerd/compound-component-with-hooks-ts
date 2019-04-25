import * as React from 'react'

import { Usage } from "./components/counter";
import { Failure } from "./components/counter";


const App = () => {
  const [ toggle, setToggle ] = React.useState(true);

  return <React.Fragment>
    {toggle ? (
      <React.Fragment>
        <h1>Usage</h1>
        <Usage/>

      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>Failure</h1>
        <Failure />
      </React.Fragment>
    )}

  <button onClick={() => setToggle(t => !t)}>Toggle</button> 
  </React.Fragment> 
}

export default App;
