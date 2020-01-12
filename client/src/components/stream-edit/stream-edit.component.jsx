// Import
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Import - Selectors
import { streamSelector } from 'redux/stream/stream.selectors';

// Import - Actions
import { fetchStream, editStream } from 'redux/stream/stream.actions';

// Import - Components
import Spinner from 'components/spinner/spinner.component';
import StreamForm from 'components/stream-form/stream-form.component';

// ----------------------------------------------------------------------------------------- //

const StreamEdit = ({ stream, fetchStream, editStream, match }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const onSubmit = formValues => {
    editStream(match.params.id, formValues);
  };

  return stream ? (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, 'title', 'description')}
        onSubmit={onSubmit}
      />
    </div>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: streamSelector(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit,
);
