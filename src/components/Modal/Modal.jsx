import { Container, CloseButton } from "./styles";
const Modal = ({ children, onShowModal, hiddenButton }) => {
    return (
        <Container>
            {children}
            {hiddenButton &&
                <CloseButton onClick={onShowModal}>Close</CloseButton>
            }
        </Container>
    );
}

export default Modal;