import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return(
        <div className={classes.backdrop} onClick={props.onHideModal}></div>
    )
};

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                <p>There is nothing more to read at the moment, I just wanted to play with portals.</p>
                <button className={classes.button} onClick={props.onHideModal}>Close</button>
            </div>
        </div>
    )
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideModal={props.onHideModal}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay onHideModal={props.onHideModal}></ModalOverlay>, portalElement)}
    </Fragment>
  )
};

export default Modal;