import PokemonLogo from '../../assets/pokemon_logo.png';
import Input from '../form-elements/Input';
import Modal from '../drawer/MenuDrawer';
import { useModal } from '../../hooks/useModal';
import NavItem from './home/NavItem';
import Icon from '../../assets/icons/Icon';
import { Link } from 'react-router-dom';

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { modal, openModal, closeModal } = useModal();

  const getNavClass = (pathName: string) => {
    if (pathName === currentPath) {
      return 'nav-active';
    } else {
      return 'nav-item';
    }
  };

  return (
    <>
      <nav className="w-full bg-white sticky top-0 mt-8 z-10 mb-10">
        <div className="container mx-auto bg-slate-100 px-5 rounded flex gap-3">
          <Link to="/">
            <div className={getNavClass('/')}>
              <Icon name="home" className=" w-6" />
              <p className="text-md">Home</p>
            </div>
          </Link>
          <Link to="/pokedex">
            <div className={getNavClass('/pokedex')}>
              <Icon name="pokeball" className="w-6" />
              <p className="text-md">Pokedex</p>
            </div>
          </Link>
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
