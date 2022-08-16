import React from "react"
import ReactModal from "react-modal"
import styled from "styled-components";
import { SIZES } from "../constants";
import { Link } from "./Link";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: "0px",
        boxShadow: "0px 0px 50px #DDDDDD",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
};

const Cross = styled.div`
    position: absolute;
    right: ${SIZES.LG};
    cursor: pointer;
`

export const RouteModal = ({ isOpen, setOpen }) => {
    return <ReactModal style={customStyles} isOpen={isOpen} shouldCloseOnOverlayClick>
        <Link to={"/prototypes"} onClick={() => setOpen(false)}>Prototypes</Link>
        <Link to={"/ludography"} onClick={() => setOpen(false)}>Our Games</Link>
        <Link to={"/about"} onClick={() => setOpen(false)}>About Us</Link>
        <Cross onClick={() => setOpen(false)}>❌</Cross>
    </ReactModal>
}