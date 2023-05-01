import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const[modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return {
    modal,
    openModal,
    closeModal,
  };
};
