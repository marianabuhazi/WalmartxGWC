import walmartRooms from '../images/walmartRooms.png'
import about from '../images/about.png'
import explore from '../images/explore.png'
import innovate from '../images/innovate.png'
import future from '../images/future.png'
import menu from '../images/menu.png'
import x from '../images/x.png'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    position:sticky;
    top: 0;
    display:flex;
    flex-direction:row;
    background-color:#003087;
    justify-content: space-between;
    padding-left:2vw;
    padding-right:1vw;
`
const Logo = styled.img`
    width:20vh;
    padding-top:3vh;
    padding-bottom:1vh;
`
const LogoDiv = styled.div`
    width:30%;
`

const Icon = styled.img`
    
    width:5vh;
    @media only screen and (max-width: 768px){
        padding-top:8vh;
    }

`
const Icons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    @media only screen and (max-width: 600px){
        display:none;
    }
`

const IconPar = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding-right:1vw;
    margin-left:3vw;
    @media only screen and (max-width: 768px){
        display:none;
    }
    &:hover{
        cursor:pointer;
    }

`
const IconType = styled.span`
    padding-top:5px;
    color:white;
    font-size:2vh;
    text-decoration:none;
    font-family: 'Otomanopee One', sans-serif;
    &:hover{
        color:#FFB81C;
    }

`
const Menu = styled.img`
 
    width:6vh;
    @media only screen and (min-width: 768px){
        display:none;
    }
    &:hover{
        cursor:pointer;
    }
`
const MenuDiv = styled.div`
    display:flex;
    align-items: center;
    width:10%;
    @media only screen and (min-width: 768px){
        display:none;
    }
`

const Overlay = styled.div`
    display:flex;
    flex-direction:column;
    position: fixed; /* Sit on top of the page content */ /* Hidden by default */
    width:18%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 14.8vh;
    left:82%;
    background-color: #003087; /* Black background with opacity */
    opacity:0.8;
    z-index: 2;
    @media only screen and (min-width: 768px){
        display:none;
    }

`
const IconParMob = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding-top:1vw;
    &:hover{
        cursor:pointer;
    }

`

const WebNavBar = () => {
    const [active, setActive] = useState(true);
    const toggle = () => {
        active === true ? console.log("x") : console.log("menu");
        active === true ? setActive(false) : setActive(true);

    }
    return (
        <div>
            <Container>
                <LogoDiv>
                    <a href="/"><Logo src={walmartRooms} alt="Walmart Rooms Logo" /></a>
                </LogoDiv>
                <Icons>
                    <a href="/#innovate"><IconPar><Icon src={innovate} alt="Innovate Icon" /><IconType>Innovate</IconType></IconPar></a>
                    <a href="/#explore"><IconPar><Icon src={explore} alt="Explore Icon" /><IconType>Explore</IconType></IconPar></a>
                    <a href="/#future"><IconPar><Icon src={future} alt="Future Icon" /><IconType>Future</IconType></IconPar></a>
                    <a href="/#about"><IconPar><Icon src={about} alt="About Icon" /><IconType>About</IconType></IconPar></a>
                </Icons>
                {active && <MenuDiv><Menu src={menu} alt="Menu Icon" onClick={toggle} /></MenuDiv>}
                {active == false && <MenuDiv><Menu src={x} alt="X Icon" onClick={toggle} /></MenuDiv>}
            </Container>
            {active == false && <Overlay>
                <a href="/#innovate"><IconParMob onClick={toggle}><Icon src={innovate} alt="Innovate Icon" /><IconType>Innovate</IconType></IconParMob></a>
                <a href="/#explore"><IconParMob onClick={toggle}><Icon src={explore} alt="Explore Icon" /><IconType>Explore</IconType></IconParMob></a>
                <a href="/#future"><IconParMob onClick={toggle}><Icon src={future} alt="Future Icon" /><IconType>Future</IconType></IconParMob></a>
                <a href="/#about"><IconParMob onClick={toggle}><Icon src={about} alt="About Icon" /><IconType>About</IconType></IconParMob></a>
            </Overlay>}
        </div>
    )
}

export default WebNavBar