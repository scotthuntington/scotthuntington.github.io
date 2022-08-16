import { useState } from "react";
import styled from "styled-components";
import { RouteModal } from "./RouteModal";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const Button = styled.div`
    font-size: 48px;
    font-weight: 800;
    cursor: pointer;
    &:hover {
        color: pink;
    }
`

const Left = styled.div`
    font-weight: 900;
    font-size: 36px;
`;

const Right = styled.div`
`;

export const HeaderBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return <Wrapper>
        <Left>
            WDBG
        </Left>
        <Right>
            <Button onClick={() => setModalOpen(true)}>👋</Button>
        </Right>
        <RouteModal isOpen={modalOpen} setOpen={setModalOpen} />
    </Wrapper>
}