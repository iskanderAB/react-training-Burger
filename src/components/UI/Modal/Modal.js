import React from "react";
import classes from "./Modal.css"
import Backdrop from "../Backdrop/Backdrop";
import MyAux from "../../../hoc/MyAux";

const Modal = (props) => {
    return (
        <MyAux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal} style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0"
            }}>
                {props.children}
            </div>
        </MyAux>
    );
};
export default Modal;
