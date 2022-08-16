import { Grid } from "../components/Grid";

const games = [
    {
        title: 'Ducklings',
        flavour: 'Do a thing',
        image: 'www.url.de'
    },
    {
        title: 'The Temple On The Moon',
        flavour: 'Do a thing',
        image: 'www.url.de'
    },
    {
        title: 'Tesseract',
        flavour: 'Do a thing',
        image: 'www.url.de'
    },
    {
        title: 'Supervillain Fortress',
        flavour: 'Do a thing',
        image: 'www.url.de'
    },
    {
        title: 'Too Hot',
        flavour: 'Do a thing',
        image: 'www.url.de'
    },
    {
        title: 'Treasure Beach',
        flavour: 'Do a thing',
        image: 'www.url.de'
    }
]

export const Prototypes = () => {

    const renderBox = (g) => <>
        <div>{g.title}</div>
        <div>{g.image}</div>
        <div>{g.flavour}</div>
    </>

    return <Grid nogutter data={games} elementRenderer={renderBox} />
}