import React from 'react';

function useCreateContext<T>(Context: React.Context<T>, error: string): T {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(error);
  }
  else {
    return context;
  }
}

export default useCreateContext;
export { useCreateContext };
