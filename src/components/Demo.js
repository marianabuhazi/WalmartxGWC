import Iframe from 'react-iframe'
import styled from 'styled-components'

const Header= styled.h2`
    margin-top:12vh;
    font-family: 'PT Sans';
    color:white;
    font-size:6vh;
    text-align:left;
    background-color:  #003087;
    width:min-content;
    padding:0.5vw 2vw 0vw 2vw;
    text-align:center;
    margin-bottom:0;
`

const Title= styled.h2`
    font-family: 'PT Sans';
    color:black;
    font-size:3vh;
    text-align:left;
    margin-top:2vh;
    margin-bottom:0;
`
const Link= styled.a`
    color:#0072CE;
`

const Demo = () => {
    return (
        <div id="demo" style={{paddingLeft:"5px", paddingBottom:"15vh", borderBottom:"solid #FFB81C 5vh"}}>
            <Header>Demo</Header>
            <Title>If this video does not load, try this <Link href="https://vimeo.com/578928599">link</Link></Title>
            <Iframe src="https://player.vimeo.com/video/578928599?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="320" height="200" frameborder="0" margin-left="45%" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Walmart Rooms Mockup"></Iframe>
        </div>
    )
}

export default Demo
