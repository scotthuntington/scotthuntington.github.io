import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { SIZES } from "../constants";
import totmCover from "../images/totmcover.png";
import svfCover from "../images/svfcover.png";
import tooHotCover from "../images/toohotcover.png";
import ducklingsCover from "../images/ducklingscover.png";
import tessCover from "../images/tessCover.png";
import treasureCover from "../images/treasureCover.png";

import { Grid } from "../components/Grid";
import { TwoPanel } from "../components/TwoPanel";
import { BackButton } from "../components/BackButton";
import { Button } from "../components/Button";


const title = {
    tesseract: "Tesseract: Dimensions Of Tomorrow",
    ttotm: "The Temple On The Moon",
    ducklings: "Ducklings",
    svf: "Supervillain Fortress",
    toohot: "Too Hot",
    treasurebeach: "Treasure Beach",
};
const image = {
    tesseract: tessCover,
    ttotm: totmCover,
    ducklings: ducklingsCover,
    svf: svfCover,
    toohot: tooHotCover,
    treasurebeach: treasureCover,
};

const SUPABABES = "wqZMWzFPQHQ";

const videoEmbedIds = {
    tesseract: "1054P-RdePA",
    ttotm: "vT9Z6zf1f_8",
    ducklings: "WibZzmwVaVo",
    svf: "2DgzE2_dz68",
    toohot: "79kKxERdtpg",
    treasurebeach: "rV6herbB6QM",
};
const text = {
    tesseract: "In Tesseract: Dimension of Tomorrow you are the captain of a grandiose airship, represented by a Rubik’s Cube. You will tactically twist your cube throughout the game to pick up waste, refine it into precious energy and deliver it to different cities. You will be able to invite citizens and specialists to your Tesseract, who will support you in game-changing ways. Will you be able to maintain the complex network of sustainability and prosperity?",
    ttotm: "Discover the secrets of The Temple On The Moon! Take turns placing your team of astronauts in a chain to explore the temple’s rooms and trigger clever actions. This spatial worker placement game plays out on an eye-catching 3D temple board, on which players will strive to build formations, collect powerful amulets and appease the forgotten lunar gods!",
    ducklings: "Ducklings is a highly interactive spatial drafting game in which you’re striving to find the perfect landscapes for your flock of ducks. Cleverly pick adjacent cards from the tableau to build a set of consecutive numbers in just the right colors to nestle in before the other players. With a simple rule set and different scoring boards for each game, Ducklings delivers a more-than-meets-the-eye gaming experience.",
    svf: "Draft dice and build your ultimate 3D-Supervillain Fortress with point-unlocking polyomino tiles. In this sleek game of puzzly tile-laying and snappy drafting you’ll be able to cleverly chain actions and build your imposing fortress to display malice and might!",
    toohot: "Roll dice and grab some spice! The more, the tastier - but beware! If you grab more than seven of one spice, it’s just way too hot and you don’t get points when the spices run out. Explained in a minute, this casual dice game brings heat and tension to the table and will be played again and again by players of all ages!",
    treasurebeach: "Treasure Beach combines simple deduction and guessing in a one-of-a-kind game of treasure hunting for all ages. Players take turns discovering the game board, revealing treasures, tools or traps! And since every revealed spot gives you a clue of what is close by, you’ll have a good chance to uncover the greatest treasures!",
};

const shortinfo = {
    tesseract: ["2-4", "60", "12+"],
    ttotm: ["2-4", "45-60", "12+"],
    ducklings: ["2-4", "45-60", "10+"],
    svf: ["2-4", "45", "10+"],
    toohot: ["2-4", "15", "8+"],
    treasurebeach: ["2-4", "20-30", "6+"],
};

const whatscool = {
    tesseract: ["Rubik's Cubes!", "Simple And Smart!", "Visually Striking!"],
    ttotm: ["3-Dimensional Board!", "Interactive Turns!", "Unique Theme!"],
    ducklings: ["Build a 3D Structure!", "Interactive Drafting!", "Clever Puzzle Elements!"],
    svf: ["Build a 3D Structure!", "Interactive Drafting!", "Clever Puzzle Elements!"],
    toohot: ["Engaging but casual!", "Anyone can learn!", "Addictive!"],
    treasurebeach: ["Introduction to deduction!", "Every turn exciting!", "Enjoyable at all ages!"],
};

const flavourtext = {
    tesseract: "A new tomorrow has dawned and the world is prospering. Essential to this emerging Utopia are the Tesseracts - grandiose airships outfitted with ingenious reclamation technologies which refine waste into clean energy. You’re a captain of one of these Tesseracts and it’s time to show your skills of navigation and planning to uphold the network of recycling and multinational exchange to sustain prosperity!",
    ttotm: "Your lunar expedition has discovered a forgotten temple on the dark side of the moon. Cunningly, your team delves into the dark halls of the temple, securing artefacts and galactic crystals. Which team will uncover the secrets of the temple?",
    ducklings: "Line up, little ducklings! It’s time to flock together and find a good spot at the lake and river to find the freshest water … before other ducklings nestle in before you.",
    svf: "You’re the new menace in town but have no imposing castle to display your might. Order your underlings to build your ultimate supervillain fortress and let everyone know that you’re the mightiest supervillain in town!",
    toohot: "Chili, Pepper, Ginger! Spice up your game nights with this exciting try-your-luck dice chucker. The spicier, the better. But caution … contents may be too hot!",
    treasurebeach: "Your pirate ship has landed on Treasure Beach. Great treasures are buried underneath the sand! Every time you dig you’ll find treasure or discover a clue where the next chest is located. Get help from your trusty parrot and beware the bombs!",
};

const components = {
    treasurebeach: [
        "30 beach maps (double-sided)",
        "1 map holder",
        "64 sand chips",
        "2 special tokens (parrot / bomb)",
        "1 custom die"],
    toohot: ["63 chilli tokens in 3 colours",
        "3 dice (numbered 0-5)",
        "21 point chips"],
    svf: ["88 polyomino tiles",
        "4 player mats",
        "9 colour dice",
        "1 construction wheel",
        "20 coins",
        "150 wooden cubes"],
    ducklings: ["100 cards",
        "40 duckling meeples in 4 colours",
        "6 environment boards",
        "6 special bird tokens"],
    ttotm: ["16 astronaut meeples in 4 colours",
        "1 triangular “seeing eye” tile",
        "12 temple tiles",
        "30 crystals",
        "36 cards",
        "4 Amulet tokens"],
    tesseract: ["4 2x2x2 Rubik’s Cubes",
        "8 map tiles",
        "1 scoring board",
        "60 resources cubes (4 colors)",
        "4 player boards",
        "80 contact & council cards",
        "12 player tokens",]
};

const Title = styled.div`
    font-size: 36px;
    font-weight: 900;
    padding-bottom: ${SIZES.XXL};
    text-align: center;
    transform: rotate(-2deg);
`;
const Image = styled.img`
    max-height: 250px;
    height: auto;
    border: 2px solid black;
    box-shadow: ${SIZES.MD} ${SIZES.MD} black;
`;
const VideoContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
`;
const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const Body = styled.div`
    flex: 1;
    font-family: "Archivo";
`;

const ShortInfoWrapper = styled.div`
    max-width: 720px;
    font-family: "Archivo";
    border: 2px solid black;
    box-shadow: ${SIZES.MD} ${SIZES.MD} black;
    margin: ${SIZES.LG} ${SIZES.MD} 0px 0px;
    display: grid;
    align-items: center;
    text-align: center;
    margin-bottom: ${SIZES.XL};
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }

`;

const ShortInfoSection = styled.div`
    border-right: 2px solid black;
    padding: ${SIZES.MD};
    display: flex;
    align-items: center;
    justify-content: center;
    :last-child {
        border-right: none;
    }
    @media (max-width: 600px) {
        border-right: 0px;
        border-bottom: 2px solid black;
    }
`;
const CoolBarWrapper = styled.div`
    max-width: 720px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding-top: ${SIZES.LG};
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;
const CoolBar = styled.div`
    background-color: black;
    text-align: center;
    padding: ${SIZES.LG};
    margin: ${SIZES.LG};
    color: white;    
    font-family: "Archivo";
    transform: rotate(-2deg);

`;
const Emoji = styled.div`
    font-family: "Noto Emoji";
    padding-right: ${SIZES.LG};
    font-size: 36px;
`;
const FlavourText = styled.div`
    font-family: "Archivo";
    font-style: italic;
    padding: ${SIZES.LG} 0px;
    margin-top: ${SIZES.LG};
    text-align: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;
const Components = styled.div`
    padding: ${SIZES.LG} 0px ${SIZES.XL} 0px;
`;
const ComponentHeader = styled.div`
padding-bottom: ${SIZES.MD};



`;
const ComponentText = styled.div`
    font-family: "Archivo";
    padding: ${SIZES.MD};
`;
export const Prototype = () => {

    const { id } = useParams();

    const renderShortInfo = (si) => {
        return <ShortInfoWrapper>
            <ShortInfoSection><Emoji>👪</Emoji>{si[0]}</ShortInfoSection>
            <ShortInfoSection><Emoji>🕔</Emoji>{si[1]}</ShortInfoSection>
            <ShortInfoSection><Emoji>👶</Emoji>{si[2]}</ShortInfoSection>
        </ShortInfoWrapper>;
    };

    const renderWhatsCool = (wc) => {
        return <CoolBarWrapper>
            <CoolBar>{wc[0]}</CoolBar>
            <CoolBar>{wc[1]}</CoolBar>
            <CoolBar>{wc[2]}</CoolBar>
        </CoolBarWrapper>;
    };

    const renderComponents = (cs) => {
        const elementRenderer = (c) => <ComponentText>{c}</ComponentText>;
        return <Components>
            <ComponentHeader>Components:</ComponentHeader>
            <Grid data={cs} elementRenderer={elementRenderer} />
        </Components>;
    };

    return <>
        <Title>{title[id]}</Title>
        <TwoPanel
            a={<Image src={image[id]} alt="" />}
            b={<Body>{text[id]}</Body>} />
        {renderShortInfo(shortinfo[id])}
        <VideoContainer>
            <Video frameBorder="0" src={`https://www.youtube.com/embed/${videoEmbedIds[id]}`} />
        </VideoContainer>
        <FlavourText>{flavourtext[id]}</FlavourText>
        {renderWhatsCool(whatscool[id])}
        {renderComponents(components[id])}
        <Button subject={title[id]}>Interested?</Button>
        <BackButton />
    </>;
};