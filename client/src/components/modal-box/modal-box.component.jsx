// Import
import React from 'react';

// ----------------------------------------------------------------------------------------- //

const ModalBox = ({ title, content, actions, onDismiss }) => (
  <div className="ui dimmer modals visible active" onClick={onDismiss}>
    <div
      className="ui standard modal visible active"
      onClick={e => e.stopPropagation()}
    >
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="actions">{actions}</div>
    </div>
  </div>
);

export default ModalBox;
