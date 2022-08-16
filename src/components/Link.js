import { Link as DomLink } from "react-router-dom";
import styled from "styled-components";
import { SIZES } from "../constants";

const SideLink = styled(DomLink)`
    padding: ${SIZES.LG};
    color: black;
    font-size: 24px;
    text-decoration: none;
`

export const Link = ({ to, onClick, children }) => {
    return <SideLink to={to} onClick={() => { if (onClick) onClick() }}>
        {children}
    </SideLink>
}