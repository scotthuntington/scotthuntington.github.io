import { useEffect, useState } from "react";
import styled from "styled-components";
import { RouteModal } from "./RouteModal";
import logo from "../images/logo.webp";
import { COLORS } from "../constants";

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
        color: ${COLORS.PRIMARY};
    }
`

const Left = styled.div`
    font-weight: 900;
    font-size: 36px;
`;
const Middle = styled.div`
    color: ${COLORS.PRIMARY};
    font-weight: 900;
    transform: ${props => `rotate(${props.index}deg)`};
    font-size: 36px;

`
const Right = styled.div`
`;

export const title = ["We", "Design", "Board", "Games"];

export const HeaderBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [titleWordIndex, setTitleWordIndex] = useState(0);

    useEffect(() => {
        const anim = setInterval(() => {
            setTitleWordIndex((titleWordIndex + 1) % title.length)
        }, 1000);
        return () => clearInterval(anim);
    })

    return <Wrapper>
        <Left>
            <img src={logo} alt="" />
        </Left>
        <Middle index={titleWordIndex + 3 * 2 * ((titleWordIndex % 2) ? -1 : 1)}>
            {title[titleWordIndex]}
        </Middle>
        <Right>
            <Button onClick={() => setModalOpen(true)}>👋</Button>
        </Right>
        <RouteModal isOpen={modalOpen} setOpen={setModalOpen} />
    </Wrapper>
}