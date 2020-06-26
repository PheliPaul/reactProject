import React from "react";
import Modal from 'react-modal';

const ModalLogout = (props) =>{
    return(
        <Modal isOpen={props.x} >
        <div>
            <h1>welcom to modal</h1>
            <button>close</button>
        </div>
        </Modal>
    );
} ;
export default ModalLogout;