import { createPortal } from "react-dom"
import styles from './modal.module.css'

const modalsContainer = document.querySelector("#modals") as Element;

const Modal = ({children}):any => {
  return createPortal (
    <>
    <div className={styles.modal}>
      {children}
    </div>
    <div className={styles.modalOverlay}/>
    </>,
     modalsContainer
    );
};



export default Modal