import { useState } from 'react';
import PokemonLogo from '../../assets/pokemon_logo.png';
import Input from '../form-elements/Input';
import { FaSquare } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import Modal from '../modal/Modal';
import { useModal } from '../../hooks/useModal';

const Navbar = () => {
  const { modal, openModal, closeModal } = useModal();
  return (
    <>
      <nav className="container mx-auto py-5 flex items-center justify-between grow-0 shrink basis-auto">
        <img src={PokemonLogo} alt="Logo" className="w-44" />
        <div className="flex items-center gap-10">
          <Input />

          <div
            className="inline-grid grid-cols-2 [&>*]:text-gray-600 cursor-pointer"
            onClick={openModal}
          >
            <FaSquare />
            <FaSquare />
            <FaSquare />
            <FaSquare />
          </div>
        </div>
      </nav>
      <div>
        <Modal
          modalState={modal}
          onClose={closeModal}
          className="absolute bg-white top-0"
        >
          <div className="h-screen w-screen bg-teal-100">
            hey
            <button onClick={closeModal}>
              <HiX />
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
