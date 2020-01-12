// Import
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import - Components
import Spinner from 'components/spinner/spinner.component';

// Import - Styles
import { StreamContainer } from './stream.styles';

// ----------------------------------------------------------------------------------------- //

// Lazy loading
const StreamList = lazy(() =>
  import('components/stream-list/stream-list.component'),
);

const StreamCreate = lazy(() =>
  import('components/stream-create/stream-create.component'),
);

const StreamEdit = lazy(() =>
  import('components/stream-edit/stream-edit.component'),
);

const StreamDelete = lazy(() =>
  import('components/stream-delete/stream-delete.component'),
);

const StreamShow = lazy(() =>
  import('components/stream-show/stream-show.component'),
);

const Stream = ({ match }) => (
  <StreamContainer>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={match.path} component={StreamList} />

        <Route exact path={`${match.path}/new`} component={StreamCreate} />
        <Route exact path={`${match.path}/edit/:id`} component={StreamEdit} />
        <Route
          exact
          path={`${match.path}/delete/:id`}
          component={StreamDelete}
        />
        <Route exact path={`${match.path}/:id`} component={StreamShow} />
      </Switch>
    </Suspense>
  </StreamContainer>
);

export default Stream;
