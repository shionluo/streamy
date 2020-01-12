// Import
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// ----------------------------------------------------------------------------------------- //

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [modalRoot, el]);

  return ReactDOM.createPortal(children, el);
};

export default Modal;
