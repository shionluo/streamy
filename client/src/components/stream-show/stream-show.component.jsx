// Import
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import flv from 'flv.js';

// Import - Selectors
import { streamSelector } from 'redux/stream/stream.selectors';

// Import - Actions
import { fetchStream } from 'redux/stream/stream.actions';

// Import - Components
import Spinner from 'components/spinner/spinner.component';

// ----------------------------------------------------------------------------------------- //

const StreamShow = ({ stream, fetchStream, match }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  if (stream) {
    const { title, description } = stream;

    return (
      <div>
        <video style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

  return <Spinner />;
};

const mapStateToProps = (state, ownProps) => ({
  stream: streamSelector(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
