import React from 'react';

const Backdrop = (props) => {
    return (
        <div className="fixed z-10 w-full h-screen bg-[rgba(65,64,64,0.5)] top-0 left-0" onClick={props.onHideModal}></div>
    )
};

const ModalOverlay = (props) => {
    return (
        <div className="fixed left-0 w-full bottom-0 bg-[#fff] z-20">
            <div>
                {props.children}
            </div>
        </div>
    )
};

const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop onHideModal={props.onHideModal} />
            <ModalOverlay>{props.children}</ModalOverlay>
        </React.Fragment>
    )
};

export default Modal;