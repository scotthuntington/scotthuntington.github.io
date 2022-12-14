import styled from "styled-components";
import { Grid } from "../components/Grid";
import totmCover from "../images/totmcover.png";
import svfCover from "../images/svfcover.png";
import tooHotCover from "../images/toohotcover.png";
import ducklingsCover from "../images/ducklingscover.png";
import treasureCover from "../images/treasureCover.png";
import tessCover from "../images/tessCover.png"
import { SIZES } from "../constants";
import { useNavigate } from "react-router-dom";
import { Title } from "../components/Title";
import { inverse } from "../utils";

const games = [
    {
        title: 'Tesseract',
        flavour: 'Use a Rubik’s cube to pick up and deliver energy to a prospering utopian planet.',
        image: tessCover,
        color: "#95f2f5",
        weight: "(Weight: Medium)",
        link: "tesseract"
    },
    {
        title: 'The Temple On The Moon',
        flavour: 'Place astronauts in chains on a three dimensional temple board to fulfil multiple goals.',
        image: totmCover,
        color: "#f52aee",
        weight: "(Weight: Medium)",
        link: "ttotm"
    },
    {
        title: 'Supervillain Fortress',
        flavour: 'Draft dice to construct a multi-level evil fortress with all the bells and whistles.',
        image: svfCover,
        color: '#d47b00',
        weight: "(Weight: Family +)",
        link: "svf"
    },
    {
        title: 'Ducklings',
        flavour: 'Collect ducks and nestle into various landscapes in this set collection game.',
        image: ducklingsCover,
        color: "#42f575",
        weight: "(Weight: Family +)",
        link: "ducklings"
    },
    {
        title: 'Too Hot',
        flavour: 'Try your luck collecting hot spices in this interactive, casual dice rolling game.',
        image: tooHotCover,
        color: '#f7f488',
        weight: "(Weight: Casual)",
        link: "toohot"
    },
    {
        title: 'Treasure Beach',
        flavour: 'Combine guesswork and deduction to reveal the best treasure on the beach.',
        image: treasureCover,
        color: '#adcbde',
        weight: "(Weight: All ages)",
        link: "treasurebeach"
    }
]
const Wrapper = styled.div`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: ${SIZES.XL};
    cursor: pointer;
    &:hover {
        background-color: ${props => inverse(props.color)};
        color: white;
    }
`
const Image = styled.img`
    max-height: 200px;
    height: auto;
    width: auto;
    box-shadow: 10px 10px black;
    margin: ${SIZES.LG};
`
const GameTitle = styled.div`
    padding: ${SIZES.XL} 0 ${SIZES.LG} 0;
    font-weight: 900;
`
const Flavour = styled.div`
    font-style: italic;
`
const Weight = styled.div`
    padding-top: ${SIZES.MD};
    font-style: italic;
    font-size: smaller;
`
export const Prototypes = () => {
    let navigate = useNavigate();
    const renderBox = (g) => <Wrapper onClick={() => { navigate(g.link); window.scrollTo(0, 0) }} color={g.color}>
        <Image src={g.image} alt="" />
        <div>
            <GameTitle>{g.title}</GameTitle>
            <Flavour>{g.flavour}</Flavour>
            <Weight>{g.weight}</Weight>
        </div>
    </Wrapper>

    return <>
        <Title>Prototypes</Title>
        <Grid data={games} elementRenderer={renderBox} />
    </>
}