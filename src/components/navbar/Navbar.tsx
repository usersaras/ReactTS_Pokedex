import PokemonLogo from '../../assets/pokemon_logo.png';
import Input from '../form-elements/Input';
import { FaSquare } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import Modal from '../drawer/MenuDrawer';
import { useModal } from '../../hooks/useModal';
import NavItem from './home/NavItem';
import { Link } from 'react-router-dom';
import Icon from '../../assets/icons/Icon';

const Navbar = () => {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <nav className="w-full bg-white sticky top-0 mt-8 z-10 mb-10">
        <div className="container mx-auto bg-slate-100 px-3 rounded flex">
          <div className="border-b-2 border-b-cyan-600 text-cyan-800 font-medium px-5 py-5 flex gap-2">
            <Icon name="pokeball" className="fill-cyan-800 w-6" />
            <p>Pokedex</p>
          </div>
        </div>
        <div></div>
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
            href="/pokedex"
            onClose={closeModal}
            className="bg-green-500 text-white shadow outline-none"
          />
          <NavItem
            label="Moves"
            href="#"
            className="bg-pink-500 text-white"
            onClose={closeModal}
          />
          <NavItem
            label="Abilities"
            href="#"
            onClose={closeModal}
            className="bg-blue-500 text-white"
          />
          <NavItem
            label="Items"
            href="#"
            onClose={closeModal}
            className="bg-yellow-500 text-white"
          />
          <NavItem
            label="Locations"
            href="#"
            onClose={closeModal}
            className="bg-purple-500 text-white"
          />
          <NavItem
            label="Type Effects"
            href="#"
            onClose={closeModal}
            className="bg-amber-800 text-white"
          />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
