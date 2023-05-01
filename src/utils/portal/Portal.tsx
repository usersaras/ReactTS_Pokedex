import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalPropsType {
  children: JSX.Element;
}

const Portal = ({ children }: PortalPropsType) => {
  let modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  }

  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot && modalRoot.appendChild(modalElement);

    return () => {
      modalRoot && modalRoot.removeChild(modalElement);
    };
  });

  return createPortal(children, modalElement);
};

export default Portal;
