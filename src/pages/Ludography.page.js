import { Grid } from "../components/Grid";
import ht from "../images/hauweg.png";
import fitft from "../images/fliesinthefoodtruck.png";
import gobi from "../images/gobi.jpg";
import jr from "../images/jollyroger.png";
import plietsch from "../images/plietsch.webp";
import ccp from "../images/clipcutparks.png";
import atlant from "../images/atlandice.png";
import bigdig from "../images/bigdig.png";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants";
import { Title } from "../components/Title";

const data = [{
    title: 'Hammer Time',
    image: ht,
    flavour: 'An award-winning dexterity game of knocking just the right amount of gems off a box with a wooden hammer.',
    date: "HABA, 2020",
    link: "https://www.youtube.com/watch?v=zPNVJJwbics&ab_channel=TheDiceTower"
}, {
    title: 'ClipCut: Parks',
    image: ccp,
    flavour: 'Use scissors to create your own puzzle pieces in this one-of-a-kind crafting game. Mensa-Select Winner.',
    date: "Renegade Game Studios, 2019",
    link: "https://www.youtube.com/watch?v=Mq6o3qiA2VY&ab_channel=BoardGameGeek"
}, {
    title: 'Jolly & Roger',
    image: jr,
    flavour: 'An “I split, you choose” game about knowing when to stash your booty.',
    date: "Abacus: 2016",
    link: "https://www.youtube.com/watch?v=Ze71M0Bf-gY&ab_channel=StonemaierGames"
}, {
    title: 'Gobi',
    image: gobi,
    flavour: 'Connect lost tribes with your caravan of camels, gaining useful gifts.',
    date: "Capsicum: 2018",
    link: "https://www.youtube.com/watch?v=1YuuEGGmUbI&ab_channel=BoardGameGeek"
}, {
    title: 'Atlandice',
    image: atlant,
    flavour: 'Draft dice and claim resources off an ever sinking game board.',
    date: "Ludonaute: 2018",
    link: "https://www.youtube.com/watch?v=s9kikhG0HjU&ab_channel=BoardGameGeek"
}, {
    title: "Big Dig",
    image: bigdig,
    flavour: "Dig deep and race to three of ten possible win conditions in this path building flip and write game.",
    date: "Tasty Minstrel Games: 2018",
    link: "https://www.youtube.com/watch?v=0arw9bGsYMA&ab_channel=Rahdo"
}, {
    title: "Flies in The Food Truck",
    image: fitft,
    flavour: "Roll as fast as you can to swat the flies away. Punching encouraged!",
    date: "Hasbro, 2017",
    link: "https://www.youtube.com/watch?v=ZqKehC0DWyM&ab_channel=TTPMToyReviews"

}, {
    title: "Plietsch.",
    image: plietsch,
    flavour: "Multiple games in just one deck of cards. In collaboration with Hamburg Library’s anniversary.",
    date: "Bücherhallen Hamburg: 2019"
}]

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
        background-color: ${COLORS.PRIMARY};
        color: white;
    }
`
const Image = styled.img`
    max-height: 200px;
    height: auto;
    width: auto;
    margin: ${SIZES.LG};
`
const GameTitle = styled.div`
    padding: ${SIZES.XL} 0 ${SIZES.LG} 0;
    font-weight: 900;
`
const Flavour = styled.div`
    font-style: italic;
`
const Date = styled.div`
    padding-top: ${SIZES.MD};
    font-family: "Archivo";
    font-size: smaller;
`
export const Ludography = () => {
    const renderBox = (g) => <Wrapper onClick={() => window.open(g.link, '_black')} color={g.color}>
        <Image src={g.image} alt="" />
        <div>
            <GameTitle>{g.title}</GameTitle>
            <Flavour>{g.flavour}</Flavour>
            <Date>({g.date})</Date>
        </div>
    </Wrapper>
    return <>
        <Title>Published Games</Title>
        <Grid data={data} elementRenderer={renderBox} />
    </>
}