import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHidden}></div>;
};

const ModelOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const OverlayElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHidden={props.onHidden} />,
        OverlayElement
      )}
      {ReactDOM.createPortal(
        <ModelOverLay>{props.children}</ModelOverLay>,
        OverlayElement
      )}
    </Fragment>
  );
};

export default Modal;
