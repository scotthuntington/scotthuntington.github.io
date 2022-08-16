import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { SIZES } from "../constants"
import totmCover from "../images/totmcover.png";
import svfCover from "../images/svfcover.png";
import tooHotCover from "../images/toohotcover.png";
import ducklingsCover from "../images/ducklingscover.png";
import { Grid } from "../components/Grid";


const title = {
    tesseract: "Tesseract: Dimensions Of Tomorrow",
    ttotm: "The Temple On The Moon",
    ducklings: "Ducklings",
    svf: "Supervillain Fortress",
    toohot: "Too Hot",
    treasurebeach: "Treasure Beach",
}
const image = {
    tesseract: ducklingsCover,
    ttotm: totmCover,
    ducklings: ducklingsCover,
    svf: svfCover,
    toohot: tooHotCover,
    treasurebeach: ducklingsCover,
}
const videoEmbedIds = {
    tesseract: "wqZMWzFPQHQ",
    ttotm: "wqZMWzFPQHQ",
    ducklings: "wqZMWzFPQHQ",
    svf: "wqZMWzFPQHQ",
    toohot: "wqZMWzFPQHQ",
    treasurebeach: "wqZMWzFPQHQ",
}
const text = {
    tesseract: "TESSERACT is a pick-up-and-deliver game with a literal twist. On your turn, twist your Rubik’s Cube once and carry out the actions you can see. You can navigate your TESSERACT ship around the utopian planet, pick up waste, refine it mid-flight and deliver the resulting energy to the cities that need it, thus gaining prosperity. You can also visit the city councils to hire specialists that will support your TESSERACT’S crew and unlock special abilities. Hiring three specialists will give you a bonus and permanent upgrade, building your engine further. Be the first to gain 100 prosperity to win the game! If you want to know more, get in touch. Thanks for watching!",
    ttotm: "THE TEMPLE ON THE MOON is an interactive, worker chaining game that takes place on a 3d moon temple. On your turn, place an astronaut in a free room in the temple and carry out the action. Astronauts must exist in a chain, unless you play a crystal to break the chain. During each round, you can enter the offering chambers to sacrifice to the moon gods what they desire, and at the end of the round you can win their favour by achieving special formations, having the most astronauts in the favoured side of the temple, or holding on to blue crystals. The four amulets provide the players with special powers that can be used over and over again until they are taken by someone else. Once a favour marker has reached the top of the temple, the game ends and the player with the most points is the winner. If you want to know more, get in touch. Thanks for watching!",
    ducklings: "DUCKLINGS is a spatial card drafting game for two to four players. On your turn, take an entire row or column of ducklings from the flock, making sure to never go over your strict hand limit of 8 cards. You can also play a row of ducks, provided you have at least three. When you do so, place a duckling on one of the two environment boards chosen randomly at the start of the game, if your row meets the requirements for it. Longer rows score more points, but shorter rows are quicker to play, letting you nestle in more lucrative spots in the landscape. You can also call upon the help of a big bird, but once you use its special ability, it flies to your left neighbour. With 5 boards and 4 big birds, DUCKLINGS has high replayability with a simple rule set, while being deeper than it lets on. If you want to know more, get in touch. Thanks for watching!",
    svf: "SUPERVILLAIN FORTRESS is a three dimensional tile laying game for two to four evil geniuses. On your turn, pick a die from the centre of the table and build some scaffolding on a matching space. If you cover a square with a special action, take it immediately. You can chain actions if you’re clever! Once you have enough scaffolding, you can add a level to your evil lair, and make that tile more expensive for your opponents to build. Some dice and special actions allow you to earn money, which you can use to take extra actions, purchase expensive tiles or build menacing watchtowers. The first player to build their fourth level ends the game, and the player with the most visible points from above is the winner! For enquiries, get in touch. Thanks for watching!",
    toohot: "TOO HOT is a casual, try your luck game for two to four players, perfect for the pub or a relaxed game night with the family. On your turn, roll a die, pick a pile, and take that many spices. Then, do the same again, picking a different pile each time, and your turn is over. If anyone ever takes the last chip from a pile, see who has the most! That person gets a point, but be careful: anyone with more than 7 spices in one colour is TOO HOT, and not eligible for the point. The first player to 6 points wins! TOO HOT is explained in one minute, but knowing when to pull back, or wait for a perfect roll, makes for a tense and exciting lightweight game. For enquiries, get in touch. Thanks for watching!",
    treasurebeach: "TREASURE BEACH is a guessing and deduction game for all ages. On your turn, roll the die and dig a space on that side of the beach. Did you reveal a treasure icon? Great! You can keep the pearl! Treasure always comes in clumps, so now all players know there is a group of treasure of that size here. Did you reveal the bomb or the parrot? Then take that token! There is only one parrot or bomb in every row and column. The player holding the bomb will lose points and the player with the parrot will get points at the end! Once enough treasure has been revealed, count your pearls and see who won! If you want to know more, get in touch. Thanks for watching!",
}

const shortinfo = {
    tesseract: ["2-4", "60", "12+"],
    ttotm: ["2-4", "60", "12+"],
    ducklings: ["2-4", "60", "12+"],
    svf: ["2-4", "60", "12+"],
    toohot: ["2-4", "60", "12+"],
    treasurebeach: ["2-4", "60", "12+"],
}

const whatscool = {
    tesseract: ["2-4", "60", "12+"],
    ttotm: ["2-4", "60", "12+"],
    ducklings: ["Building a 3D Structure", "Interactive Drafting", "Clever Puzzle Elements"],
    svf: ["2-4", "60", "12+"],
    toohot: ["2-4", "60", "12+"],
    treasurebeach: ["2-4", "60", "12+"],
}

const flavourtext = {
    tesseract: "TESSERACT is a pick-up-and-deliver game with a literal twist.",
    ttotm: "THE TEMPLE ON THE MOON is an interactive, worker chaining game that takes place on a 3d moon temple.",
    ducklings: "DUCKLINGS is a spatial card drafting game for two to four players.",
    svf: "SUPERVILLAIN FORTRESS is a three dimensional tile laying game for two to four evil geniuses.",
    toohot: "TOO HOT is a casual, try your luck game for two to four players, perfect for the pub or a relaxed game night with the family.",
    treasurebeach: "TREASURE BEACH is a guessing and deduction game for all ages.",
}

const components = {
    treasurebeach: [
        "30 beach maps(double - sided)",
        "1 map holder",
        "64 sand chips",
        "2 special tokens(parrot / bomb)",
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
    tesseract: ["4 2x2x2 Rubiks Cubes", "other stuff"],
};

const Title = styled.div`
    font-size: 24px;
    font-weight: 900;
    padding-bottom: ${SIZES.XL};
`
const BodyWrapper = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 250px;
    height: auto;
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
    padding: 0px ${SIZES.LG} ${SIZES.LG} 0px;
    font-family: "Archivo";
`

const ShortInfoWrapper = styled.div`
    font-family: "Archivo";
    border: 2px solid black;
    box-shadow: ${SIZES.MD} ${SIZES.MD} black;
    margin: ${SIZES.LG} ${SIZES.MD} 0px 0px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: ${SIZES.XL};

`

const ShortInfoSection = styled.div`
    flex: 1;
    border-right: 2px solid black;
    padding: ${SIZES.MD};
    display: flex;
    align-items: center;
    justify-content: center;
    :last-child {
        border-right: none;
    }
`

const Emoji = styled.div`
    font-family: "Noto Emoji";
    padding-right: ${SIZES.LG};
    font-size: 36px;
`
const BackLink = styled.div`
    padding: ${SIZES.XXL} 0px;
    cursor: pointer;
    text-decoration: underline;
`
const FlavourText = styled.div`
    font-family: "Archivo";
    font-style: italic;
    padding: ${SIZES.LG} 0px;
    text-align: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`
const Components = styled.div`
    padding: ${SIZES.LG} 0px;
`;
const ComponentHeader = styled.div`

`
const ComponentText = styled.div`
    font-family: "Archivo";
    padding: ${SIZES.MD};
`
export const Prototype = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const renderShortInfo = (si) => {
        return <ShortInfoWrapper>
            <ShortInfoSection><Emoji>👪</Emoji>{si[0]}</ShortInfoSection>
            <ShortInfoSection><Emoji>🕔</Emoji>{si[1]}</ShortInfoSection>
            <ShortInfoSection><Emoji>👶</Emoji>{si[2]}</ShortInfoSection>
        </ShortInfoWrapper>
    }

    const renderWhatsCool = (wc) => {
        return <>
            <div>{wc[0]}</div>
            <div>{wc[1]}</div>
            <div>{wc[2]}</div>
        </>
    }

    const renderComponents = (cs) => {
        const elementRenderer = (c) => <ComponentText>{c}</ComponentText>
        return <Components>
            <ComponentHeader>Components:</ComponentHeader>
            <Grid data={cs} elementRenderer={elementRenderer} />
        </Components>
    }

    return <div>
        <Title>{title[id]}</Title>
        <BodyWrapper>
            <Body>{text[id]}</Body>
            <Image src={image[id]} alt="" />
        </BodyWrapper>
        <VideoContainer>
            <Video frameBorder="0" src={`https://www.youtube.com/embed/${videoEmbedIds[id]}`} />
        </VideoContainer>
        {renderShortInfo(shortinfo[id])}
        {renderWhatsCool(whatscool[id])}
        <FlavourText>{flavourtext[id]}</FlavourText>
        {renderComponents(components[id])}
        <BackLink onClick={() => navigate(-1)}>Go Back</BackLink>
    </div>
}