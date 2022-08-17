import styled from "styled-components"
import { SIZES } from "../constants"

const BodyWrapper = styled.div`
    max-width: 720px;
    display: grid;
    gap: ${SIZES.XL};
    grid-template-columns: auto auto; 
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

export const TwoPanel = ({ a, b }) => {
    return <BodyWrapper>
        <>{a}</>
        <>{b}</>
    </BodyWrapper>

}