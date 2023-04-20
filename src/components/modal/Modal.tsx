import { Dialog } from '@headlessui/react';

interface ModalProps {
  title?: string;
  children: JSX.Element;
  className?: string;
  modalState: boolean;
  onClose: () => void;
}

const Modal = ({
  title,
  children,
  className,
  modalState,
  onClose,
}: ModalProps) => {
  return (
    <Dialog
      open={modalState}
      onClose={() => onClose()}
      className={className?.trim() + ' z-50'}
    >
      <Dialog.Panel>
        {title && <Dialog.Title>Deactivate account</Dialog.Title>}
        {/* <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description> */}

        {children}
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
