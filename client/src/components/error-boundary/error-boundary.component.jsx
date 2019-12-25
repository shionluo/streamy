// Import
import React, { Component } from 'react';

// Import - Components
import Error from 'components/error/error.component';

// ----------------------------------------------------------------------------------------- //

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    if (hasErrored) {
      return <Error />;
    }

    return children;
  }
}

export default ErrorBoundary;
