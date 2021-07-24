import walmartRooms from '../images/walmartRooms.png'
import about from '../images/about.png'
import explore from '../images/explore.png'
import innovate from '../images/innovate.png'
import future from '../images/future.png'
import menu from '../images/menu.png'
import x from '../images/x.png'
import styled, {keyframes} from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    position: fixed;
    top: 0;
    width:100%;
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
    padding-right:5vw;
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
    padding-right:2vw;
    @media only screen and (min-width: 768px){
        display:none;
    }
`
const swipeIn=keyframes`
    0%{
        transform: translateX(50px); opacity:0.8;
    }
    100% {
        transform: translateX(0); opacity:0.95;
    }
`


const Overlay = styled.div`
    display:${props=>props.active===false ? 'none':'flex'};
    flex-direction:column;
    position: fixed; /* Sit on top of the page content */ /* Hidden by default */
    width:18%; /* Full width (cover the whole page) */
    height:100%; /* Full height (cover the whole page) */
    top:14.8vh;
    left:82%;
    background-color: #003087; /* Black background with opacity */
    opacity:0.95;
    z-index: 2;
    animation-name:${swipeIn};
    animation-duration: 1s; 
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
    const [active, setActive] = useState(false);
    const [activeIcon, setActiveIcon] = useState(menu);
    const toggleIcon = () => {
        activeIcon === menu ? setActiveIcon(x) : setActiveIcon(menu);
        active === true ? setActive(false) : setActive(true);
    }
    return (
        <div>
            <Container>
                <LogoDiv>
                    <a href="/"><Logo src={walmartRooms} alt="Walmart Rooms Logo" /></a>
                </LogoDiv>
                <Icons>
                    <a style={{textDecoration:'none'}} href="/#innovate"><IconPar><Icon src={innovate} alt="Innovate Icon" /><IconType>Innovate</IconType></IconPar></a>
                    <a style={{textDecoration:'none'}} href="/#explore"><IconPar><Icon src={explore} alt="Explore Icon" /><IconType>Explore</IconType></IconPar></a>
                    <a style={{textDecoration:'none'}} href="/#future"><IconPar><Icon src={future} alt="Future Icon" /><IconType>Future</IconType></IconPar></a>
                    <a style={{textDecoration:'none'}} href="/#about"><IconPar><Icon src={about} alt="About Icon" /><IconType>About</IconType></IconPar></a>
                </Icons>
                <MenuDiv><Menu src={activeIcon} alt="Menu Icon" onClick={toggleIcon} /></MenuDiv>
            </Container>
            <Overlay active={active}>
                <a style={{textDecoration:'none'}} href="/#innovate"><IconParMob onClick={toggleIcon}><Icon src={innovate} alt="Innovate Icon" /><IconType>Innovate</IconType></IconParMob></a>
                <a style={{textDecoration:'none'}} href="/#explore"><IconParMob onClick={toggleIcon}><Icon src={explore} alt="Explore Icon" /><IconType>Explore</IconType></IconParMob></a>
                <a style={{textDecoration:'none'}} href="/#future"><IconParMob onClick={toggleIcon}><Icon src={future} alt="Future Icon" /><IconType>Future</IconType></IconParMob></a>
                <a style={{textDecoration:'none'}} href="/#about"><IconParMob onClick={toggleIcon}><Icon src={about} alt="About Icon" /><IconType>About</IconType></IconParMob></a>
            </Overlay>
        </div>
    )
}

export default WebNavBar
