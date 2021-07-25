import styled from 'styled-components'

const Divider= styled.div`
    border-top: solid #0072CE 5vh;
    width:100%;
    background-color: #f5f5f5;

`

const Title= styled.h2`
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
const Par= styled.p`
    font-family: 'PT Sans';
    color:black;
    font-size:3vh;
    padding:1vw 3vw 1vw 3vw;
    @media only screen and (max-width: 768px){
        font-size:2.5vh;
    }
`
const Pars= styled.div`
    width:80%;
    padding-right:1vw;
    padding-left:1vw;
    @media only screen and (max-width: 768px){
        width:87%;
        padding-top:2.5vh;
        padding-bottom:2.5vh;
    }
`

const Container= styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    @media only screen and (max-width: 1024px){
        flex-direction: column-reverse;
        align-items:center;
    }
`
const Image= styled.img`
    height:50vh;
    padding-top:4vh;
    @media only screen and (max-width: 768px){
        height:45vh;
    }
`
const ImgDiv= styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    background-color: ${props=> props.color};
    padding:5vw;
    @media only screen and (max-width: 768px){
        width:100%;
        padding:0;
        margin-top:2vh;
    }
`

const Caption=styled.h3`
    font-family: 'PT Sans';
    color:black;
    font-size:3vh;
    text-align: center;
`

const Innovate = ({image, id, name, color, caption, text, subText}) => {
    return (
        <Divider id={id}>
            <Title>{name}</Title>
            <Container>
                <Pars>
                    <Par>{text}</Par>
                    <Par>{subText}</Par>
                </Pars>
                <ImgDiv color={color}><Image src={image}/><Caption>{caption}</Caption></ImgDiv>
                
            </Container>
        </Divider>
    )
}

export default Innovate
