import styled from "styled-components"
import { SIZES, COLORS } from "../constants"

const StyledButton = styled.div`
    border: 2px solid black;
    background-color: ${COLORS.PRIMARY};
    box-shadow: ${SIZES.MD} ${SIZES.MD} black;
    font-weight: 900;
    color: black;
    text-align: center;
    cursor: pointer;
    padding: ${SIZES.MD};
    &:hover {
    box-shadow: ${SIZES.MD} ${SIZES.MD} ${COLORS.PRIMARY};
    background-color: black;
    color: white;
    }
`

export const Button = ({ children }) => <StyledButton>{children}</StyledButton>