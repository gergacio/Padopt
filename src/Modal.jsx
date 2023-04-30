import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

//useRef is countainer which give use same thing every time (so we will create div and want same dive every single time when we re-render)

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    //this is how component will a mount, than useEffect run
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;