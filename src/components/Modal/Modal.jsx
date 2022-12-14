import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalDiv><img src={largeImageURL} alt="" /></ModalDiv>
      </Overlay>,
      modalRoot,
    );
  }


Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
 
};


