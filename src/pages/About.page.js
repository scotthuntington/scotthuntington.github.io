import styled from "styled-components"
import { BackButton } from "../components/BackButton"
import { Button } from "../components/Button"
import { Title } from "../components/Title"
import { TwoPanel } from "../components/TwoPanel"
import { SIZES } from "../constants"
import us1 from "../images/us1.webp"
import us2 from "../images/us2.webp"

const Image = styled.img`
    max-width: 100%;
    width: auto;
    height: auto;
`

const Sub = styled.div`
    text-align: center;
    font-size: larger;
`

const Body = styled.div`
    font-family: "Archivo";
`

const TPWrapper = styled.div`
    padding-bottom: ${SIZES.XL};
`

export const About = () => {
    return <>
        <Title>About Us!</Title>
        <TPWrapper>
            <Sub>We design board games.</Sub>
            <Sub>Driven by curiosity, inspired by fun.</Sub>
        </TPWrapper>
        <TPWrapper>
            <TwoPanel
                a={<Body>Hi! We are Scott and Shaun, an inventive Australian-American design team from Hamburg, Germany. Driven by our curiosity and creativity, we strive to bring joy, excitement and something unique to the gaming table. All our games have been thoroughly tested with numerous play groups to make sure our games are rock solid and most importantly, fun to play!</Body>}
                b={<Image src={us1} alt="" />} />
        </TPWrapper>
        <TPWrapper>
            <TwoPanel
                a={<Image src={us2} alt="" />}
                b={<Body>We’ve published ten games with publishers worldwide. Our games have sold more than 100.000 copies in twelve countries. Working with big and small publishers from all over the world is inspiring and the key to making great games! Besides the general gaming market, we’ve also designed games and gaming experiences for museums, libraries, schools and therapy centers.</Body>} />
        </TPWrapper>
        <Button subject={"Hey guys!"}>Get In Touch!</Button>
        <BackButton />
    </>
}
