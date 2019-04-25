import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean,
  error: Error | null,
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  readonly state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <React.Fragment><h1>Something went wrong.</h1><h2>{this.state.error && this.state.error.message}</h2></React.Fragment>;
    }
    return this.props.children;
  }
}
