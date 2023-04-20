import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const { modal, setModal } = useContext(ModalContext);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return {
    modal,
    openModal,
    closeModal,
  };
};
