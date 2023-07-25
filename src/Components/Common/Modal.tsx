import React, { FC } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactElement;
  handleOpen: () => boolean;
}

const Modal: FC<Props> = ({ children, handleOpen = () => false }) => {
  return (
    <div>
      {createPortal(
        <dialog
          open={handleOpen()}
          className="fixed top-0 left-0 z-[99999]  w-full container h-full "
        >
          {children}
        </dialog>,
        document.body
      )}
    </div>
  );
};

export default Modal;
