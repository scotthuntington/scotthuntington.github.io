import { Link as DomLink } from "react-router-dom";
import styled from "styled-components";
import { SIZES } from "../constants";

const SideLink = styled(DomLink)`
    padding: ${SIZES.LG};
    color: white;
    font-size: 24px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const Link = ({ to, onClick, children }) => {
    return <SideLink to={to} onClick={() => { if (onClick) onClick() }}>
        {children}
    </SideLink>
}