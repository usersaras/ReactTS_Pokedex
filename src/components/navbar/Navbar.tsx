import PokemonLogo from '../../assets/pokemon_logo.png';
import Input from '../form-elements/Input';
import { FaSquare } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import Modal from '../drawer/MenuDrawer';
import { useModal } from '../../hooks/useModal';
import NavItem from './home/NavItem';

const Navbar = () => {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <nav className="container mx-auto py-5 flex items-center justify-between grow-0 shrink basis-auto relative z-0">
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
      <Modal
        title="Menus"
        modalState={modal}
        onClose={closeModal}
        className="bg-white top-0 h-full shadow relative z-10"
      >
        <div className="grid grid-cols-2 gap-5 pt-8 px-10">
          <NavItem
            label="Pokedex"
            href="#"
            className="bg-green-500 text-white shadow outline-none"
          />
          <NavItem label="Moves" href="#" className="bg-pink-500 text-white" />
          <NavItem
            label="Abilities"
            href="#"
            className="bg-blue-500 text-white"
          />
          <NavItem
            label="Items"
            href="#"
            className="bg-yellow-500 text-white"
          />
          <NavItem
            label="Locations"
            href="#"
            className="bg-purple-500 text-white"
          />
          <NavItem
            label="Type Effects"
            href="#"
            className="bg-amber-800 text-white"
          />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;