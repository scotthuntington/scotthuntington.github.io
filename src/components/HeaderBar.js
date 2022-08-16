import { useState } from "react";
import styled from "styled-components";
import { SIZES } from "../constants";
import { RouteModal } from "./RouteModal";

const Wrapper = styled.div`
    background-color: tomato;
    display: flex;
    justify-content: space-between;
    width: 720px;
    padding: ${SIZES.XL};
`

const Left = styled.div`
`;

const Right = styled.div`
`;

export const HeaderBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return <Wrapper>
        <Left>
            Name
        </Left>
        <Right>
            <button onClick={() => setModalOpen(true)}>Menu</button>
        </Right>
        <RouteModal isOpen={modalOpen} setOpen={setModalOpen} />
    </Wrapper>
}