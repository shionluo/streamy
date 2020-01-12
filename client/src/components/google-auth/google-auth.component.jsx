// Import
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import - Selectors
import { authIsSignedInSelector } from 'redux/auth/auth.selectors';

// Import - Actions
import { signIn, signOut } from 'redux/auth/auth.action';

// ----------------------------------------------------------------------------------------- //

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const auth = useRef();

  useEffect(() => {
    const { gapi } = window;

    const onAuthChange = isSignedIn => {
      if (isSignedIn) {
        return signIn(auth.current.currentUser.get().getId());
      }

      return signOut();
    };

    if (gapi) {
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            clientId:
              '556212938093-p7ndol9fouqgi42tolv4b95k09131bi0.apps.googleusercontent.com',
            scope: 'email',
          })
          .then(() => {
            auth.current = gapi.auth2.getAuthInstance();
            const { isSignedIn } = gapi.auth2.getAuthInstance();

            onAuthChange(isSignedIn.get());
            isSignedIn.listen(onAuthChange);
          });
      });
    }
  }, [signIn, signOut]);

  const renderButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          type="button"
          className="ui red google button"
          onClick={auth.current.signOut}
          style={{ marginTop: '0.6rem' }}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    }

    return (
      <button
        type="button"
        className="ui red google button"
        onClick={auth.current.signIn}
        style={{ marginTop: '0.6rem' }}
      >
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  };

  return <div>{renderButton()}</div>;
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: authIsSignedInSelector,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
