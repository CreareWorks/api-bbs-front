import { type } from "os";
import React  from "react";

const modalContent: React.CSSProperties = {
    background: "white",
    padding: "10px",
    borderRadius: "3px",
};

const overlay: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

type Test = {
    showFlag:boolean, 
    setShowModal:any, 
    showModal: boolean, 
    postId:number,
    clickDeleteOkBtn:Function
}

const Modal: React.FC<Test> = ({showFlag, setShowModal, showModal, postId, clickDeleteOkBtn}) => {
    return (
        <>
            {showFlag && ( // true
                <div id="overlay" style={overlay}>
                    <div id="modalContent" style={modalContent}>
                        <p>本当に削除しますか？</p>

                        <button onClick={() => {
                            setShowModal(!showModal)
                            clickDeleteOkBtn(postId)
                        }}>OK</button>

                        <button onClick={() => setShowModal(!showModal)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;