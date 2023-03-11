import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func,
};
