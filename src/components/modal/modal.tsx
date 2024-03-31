import { createPortal } from "react-dom"
import styles from './modal.module.css'
import styled from "styled-components";
import useTasks from "../../services/store";

const modalsContainer = document.querySelector("#modals") as Element;


const StyledModal = styled.div<{$isDarkTheme?:boolean}> `
  width: 480px;
  z-index: 20;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${props => props.$isDarkTheme ? 'var(--very-dark-gray)':'var(--white)'};
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
  border-radius: 6px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 24px;
  overflow: visible;
  @media screen and ( max-width: 600px ) {
    width: calc(100% - 50px)
  }
`

const Modal = ({children, onClose}:{children:any, onClose:()=>void}) => {

  const {isDarkTheme} = useTasks();

  return createPortal (
    <>
    <StyledModal $isDarkTheme = {isDarkTheme} className={styles.modal}>
      {children}
    </StyledModal>
    <div onClick={onClose} className={styles.modalOverlay}/>
    </>,
     modalsContainer
    );
};



export default Modal