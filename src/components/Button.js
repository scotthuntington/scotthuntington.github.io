import styled from "styled-components"
import { SIZES, COLORS } from "../constants"

const StyledButton = styled.a`
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

export const Button = ({ children, subject }) => <StyledButton href={`mailto:wedesignboardgames@gmail.com?subject=${subject}&body=Hi Scott and Shaun!`}>{children}</StyledButton>