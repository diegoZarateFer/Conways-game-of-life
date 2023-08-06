import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "./Button";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <h1>{props.title}</h1>
      {props.children}
      <Button onClick={props.onClose}>Close</Button>
    </div>
  );
};

const animationTiming = {
  enter: 200,
  exit: 200
};

const Modal = (props) => {
  return (
    <>
      {props.show && ReactDOM.createPortal(
        <Backdrop onClick={props.onDismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.show}
          timeout={animationTiming}
          classNames={{
            enter: "",
            enterActive: "modalOpen",
            exit: "",
            exitActive: "modalClose",
          }}
        >
          <ModalOverlay title={props.title} onClose={props.onDismiss}>
            {props.children}
          </ModalOverlay>
        </CSSTransition>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
