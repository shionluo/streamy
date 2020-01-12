// Import
import React, { useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';

// ----------------------------------------------------------------------------------------- //

const StreamForm = ({ handleSubmit, onSubmit }) => {
  const streanFormSubmit = formValues => {
    onSubmit(formValues);
  };

  const renderError = ({ error }) => (
    <div className="ui error message">
      <div className="header">{error}</div>
    </div>
  );

  const renderInput = useCallback(
    ({ input, label, meta }) => (
      <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
        <label htmlFor={input.name}>
          {label}
          <input id={input.name} {...input} autoComplete="off" />
        </label>

        {meta.error && meta.touched ? renderError(meta) : null}
      </div>
    ),
    [],
  );

  return (
    <form className="ui form error" onSubmit={handleSubmit(streanFormSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button type="submit" className="ui button primary">
        Submit
      </button>
    </form>
  );
};

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
