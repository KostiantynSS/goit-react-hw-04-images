import { useEffect } from 'react';
import css from './modal.module.css';

const Modal = ({ modalHandler, src, alt }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        modalHandler();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [modalHandler]);

  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
