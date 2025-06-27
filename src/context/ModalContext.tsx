// src/context/ModalContext.tsx
import { createContext, useContext, useState } from "react";

type ModalType = "privacy" | "terms" | "shipping" | "return" | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openModal: (modal) => setActiveModal(modal),
        closeModal: () => setActiveModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);