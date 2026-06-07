import { createPortal } from "react-dom";

export default function ModelComponent({children}){
     const modalRoot = document.getElementById("model-root");
     return createPortal(children,modalRoot);
}