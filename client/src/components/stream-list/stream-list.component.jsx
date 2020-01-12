// Import
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

// Import - Selectors
import { streamsArraySelector } from 'redux/stream/stream.selectors';
import {
  userIdSelector,
  authIsSignedInSelector,
} from 'redux/auth/auth.selectors';

// Import - Actions
import { fetchStreams } from 'redux/stream/stream.actions';

// ----------------------------------------------------------------------------------------- //

const StreamList = ({ streams, isSignedIn, currentUserId, fetchStreams }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderAdmin = id => (
    <div className="right floated content">
      <Link to={`/streams/edit/${id}`} className="ui button primary">
        Edit
      </Link>
      <Link to={`/streams/delete/${id}`} className="ui button negative">
        Delete
      </Link>
    </div>
  );

  const renderCreate = () => (
    <div style={{ textAlign: 'right' }}>
      <Link to="/streams/new" className="ui button primary">
        Create Stream
      </Link>
    </div>
  );

  const renderList = () =>
    streams.map(({ id, title, description, userId }) => (
      <div className="item" key={id}>
        {userId === currentUserId ? renderAdmin(id) : null}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${id}`} className="header">
            {title}
          </Link>
          <div className="description">{description}</div>
        </div>
      </div>
    ));

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {isSignedIn ? renderCreate() : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  streams: streamsArraySelector,
  isSignedIn: authIsSignedInSelector,
  currentUserId: userIdSelector,
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);
