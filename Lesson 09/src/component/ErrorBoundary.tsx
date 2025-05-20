import * as React from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    error: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
        error: false
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      this.setState(prevState => ({
        error: !prevState.error
      }))
  }

  render() {
    return (
        <div>
            {this.state.error ? `error for dowloading data` : this.props.children}
        </div>
    );
  }
}