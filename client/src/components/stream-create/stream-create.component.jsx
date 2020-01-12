// Import
import React from 'react';
import { connect } from 'react-redux';

// Import - Actions
import { createStream } from 'redux/stream/stream.actions';

// Import - Components
import StreamForm from 'components/stream-form/stream-form.component';

// ----------------------------------------------------------------------------------------- //

const StreamCreate = ({ createStream }) => {
  const onSubmit = formValues => {
    createStream(formValues);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
