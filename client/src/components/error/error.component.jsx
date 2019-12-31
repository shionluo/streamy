// Import
import React from 'react';
import { Link } from 'react-router-dom';

// Import - Images
import error from 'assets/images/error.png';

// Import - Styles
import {
  ErrorContainer,
  ErrorImage,
  ErrorInfo,
  ErrorTitle,
  ErrorText,
} from './error.styles';

// ----------------------------------------------------------------------------------------- //

const Error = ({ height }) => (
  <ErrorContainer height={height}>
    <ErrorImage imageUrl={error} />
    <ErrorInfo>
      <ErrorTitle>Sorry, this page isn&apos;t available.</ErrorTitle>
      <ErrorText>
        The link you followed may be broken, or the page may have been removed.
      </ErrorText>
      <Link to="/">Go back to Home Page</Link>
    </ErrorInfo>
  </ErrorContainer>
);

export default Error;
