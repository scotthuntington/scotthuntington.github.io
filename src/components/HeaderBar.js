import styled from "styled-components";
import { SIZES } from "../constants";

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
    return <Wrapper>
        <Left>
            Name
        </Left>
        <Right>
            Menu
        </Right>
    </Wrapper>
}