// Import
import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// Import - History ( React Router Dom )
import history from 'utils/router/history';

// Import - Components
import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import Spinner from 'components/spinner/spinner.component';
import Header from 'components/header/header.component';

// Import - Styles
import GlobalStyle from 'utils/styles/global.styles';

// ----------------------------------------------------------------------------------------- //

// Lazy loading
const Home = lazy(() => import('pages/home/home.page'));
const Stream = lazy(() => import('pages/stream/stream.page'));
const Error = lazy(() => import('components/error/error.component'));

const App = () => (
  <div className="ui container">
    {/* Global Styles */}
    <GlobalStyle />

    {/* Router */}
    <Router history={history}>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/streams" component={Stream} />

            {/* No match Page */}
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  </div>
);

export default App;
