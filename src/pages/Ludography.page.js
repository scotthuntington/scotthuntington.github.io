import { Grid } from "../components/Grid";

const data = [{
    title: 'Jolly and Roger',
    image: 'image',
    flavour: 'here is the flavour text'
}, {
    title: 'Big Dig',
    image: 'image',
    flavour: 'here is the flavour text'
}, {
    title: 'Gobi',
    image: 'image',
    flavour: 'here is the flavour text'
}]

export const Ludography = () => {
    const elementRenderer = (g) => <>
        <div>{g.title}</div>
        <div>{g.flavour}</div>
    </>
    return <Grid data={data} elementRenderer={elementRenderer} />
}