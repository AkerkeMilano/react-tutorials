import { createPortal } from "react-dom"
import "./Modal.css";

export const Modal = ({isOpened, children, onClose}) => {
    if(!isOpened) {
        return null;
    }
    return createPortal(
        <div>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal">
                <div>
                    <span className="close-button" onClick={onClose}>
                        Close
                    </span>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}