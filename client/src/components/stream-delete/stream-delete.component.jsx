// Import
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import - History ( React Router Dom )
import history from 'utils/router/history';

// Import - Modal
import Modal from 'Modal';

// Import - Selectors
import { streamSelector } from 'redux/stream/stream.selectors';

// Import - Actions
import { fetchStream, deleteStream } from 'redux/stream/stream.actions';

// Import - Components
import ModalBox from 'components/modal-box/modal-box.component';

// ----------------------------------------------------------------------------------------- //

const StreamDelete = ({ stream, fetchStream, deleteStream, match }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const renderContent = () =>
    !stream
      ? 'Are you sure you want to delete this stream ?'
      : `Are you sure you want to delete the stream with title: ${stream.title} ?`;

  const actions = (
    <>
      <button
        type="button"
        className="ui button negative"
        onClick={() => deleteStream(id)}
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  return (
    <Modal>
      <ModalBox
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </Modal>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: streamSelector(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete,
);
