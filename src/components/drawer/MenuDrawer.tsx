import { Dialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

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
    <Transition
      appear={true}
      show={modalState}
      enter="transition duration-200 ease-out"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition duration-500 ease-out"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      as={Fragment}
    >
      <Dialog
        onClose={onClose}
        className="absolute top-0 h-full bg-white shadow z-50 dura"
      >
        <Dialog.Panel>
          <Dialog.Title className="py-5 border-b bg-lime-700 px-10">
            <p className="text-white font-medium text-xl">Menu</p>
          </Dialog.Title>
          {children}

          <button>Collapse</button>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default Modal;
