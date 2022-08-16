import { Link as DomLink } from "react-router-dom";
import styled from "styled-components";
import { SIZES } from "../constants";

const SideLink = styled(DomLink)`
  padding: ${SIZES.MD};
  color: black;

`

export const Link = ({ to, onClick, children }) => {
    return <SideLink to={to} onClick={() => { if (onClick) onClick() }}>
        {children}
    </SideLink>
}