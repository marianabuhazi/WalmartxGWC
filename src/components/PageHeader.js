import findItem from "../images/findItem.gif"
import styled from 'styled-components'

const Gif= styled.img`
    margin:2vh;
    height:25rem;
    margin-left:0;
    padding-top:2vh;
    @media only screen and (max-width: 768px){
        height:45vh;
    }
    @media only screen and (max-width: 600px){
        height:40vh;
    }
    @media only screen and (max-width: 400px){
        height:38vh;
    }
`
const Header= styled.div`
    display:flex;
    flex-direction:row-reverse;
    justify-content: space-evenly;
    background-color:#66a3dc;
    align-items: center;
    width: 100%;
    padding-bottom:6vh;
    padding-top:18vh;
    border-bottom: solid #FFB81C 5vh;
    
`
const Reinvent= styled.h1`
    font-family: 'PT Sans';
    color:white;
    font-size:5rem;
    text-align:left;
    @media only screen and (max-width: 768px){
        font-size:9vh;
    }
    @media only screen and (max-width: 600px){
        font-size:7.5vh;
    }
    @media only screen and (max-width: 425px){
        font-size:10vw;
        padding-left:6vw;
        padding-right:6vw;
    }
    
`
const ReinventNBtn= styled.div`
    width:50%;
    
`
const Btn= styled.button`
    display: block;
    margin:auto;
    font-family: 'Otomanopee One', sans-serif;
    font-size:2.3vh;
    color:white;
    border-radius: 10px;
    border: solid white 4px;
    padding:10px;
    margin-top:0;
    margin-bottom:0;
    background-color: #0072CE;
    &:hover{
        cursor: pointer;
        background-color: #003087;
    }
    
`
const PageHeader = () => {
    return (
        <div>
            <Header>
                <Gif src={findItem}/>
                <ReinventNBtn>
                    <Reinvent>Reinvent the way you furnish</Reinvent> 
                    <a style={{textDecoration:'none'}} href="/#demo"><Btn>View Demo</Btn></a>
                </ReinventNBtn>          
            </Header>
        </div>
    )
}

export default PageHeader
