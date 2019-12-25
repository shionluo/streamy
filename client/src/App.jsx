// Import
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import - Components
import Spinner from 'components/spinner/spinner.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';

// Import - Styles
import { GlobalStyle } from 'utils/styles/global.styles';

// ----------------------------------------------------------------------------------------- //

// Lazy loading
const Home = lazy(() => import('pages/home/home.page'));
const Error = lazy(() => import('components/error/error.component'));

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  </>
);

export default App;
