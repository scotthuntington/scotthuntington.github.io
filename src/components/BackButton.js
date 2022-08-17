import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SIZES } from "../constants"

const BackLink = styled.div`
    padding: ${SIZES.XXL} 0px;
    cursor: pointer;
    text-decoration: underline;
`
export const BackButton = () => {
    const navigate = useNavigate();
    return <BackLink onClick={() => navigate(-1)}>⬅️ Go Back</BackLink>
}