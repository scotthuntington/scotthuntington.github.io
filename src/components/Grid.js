import styled from "styled-components";

const GridWrapper = styled.div`
    max-width: 720px;
    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 1fr; 
    grid-auto-rows: 1fr;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const Box = styled.div`
    outline: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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