import styled from "styled-components";
import { SIZES } from "../constants";

const GridWrapper = styled.div`
    display: grid;
    gap: ${SIZES.MD};
    grid-template-columns: 1fr 1fr 1fr; 
    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Box = styled.div`
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;


export const Grid = ({ elementRenderer, data }) => {
    const renderBox = (g, i) => <Box key={i}>
        {elementRenderer(g)}
    </Box>

    return <GridWrapper>
        {data.map(renderBox)}
    </GridWrapper>
}