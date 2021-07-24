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
`
const Pars= styled.div`
    width:80%;
    @media only screen and (max-width: 768px){
        width:100%;
    }
`

const Container= styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    @media only screen and (max-width: 768px){
        flex-direction: column-reverse;
        align-items:center;
    }
`
const Image= styled.img`
    height:50vh;
    padding-top:4vh;
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

const Innovate = ({image, id, name, color, caption}) => {
    return (
        <Divider id={id}>
            <Title>{name}</Title>
            <Container>
                <Pars>
                    <Par>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Accumsan sit amet nulla facilisi. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Facilisis sed odio morbi quis commodo. Nec ultrices dui sapien eget mi proin. Integer quis auctor elit sed vulputate mi. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vitae aliquet nec ullamcorper sit. Ante in nibh mauris cursus mattis molestie a. Quis auctor elit sed vulputate. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Nam at lectus urna duis convallis convallis tellus id. Nunc vel risus commodo viverra maecenas. Ac turpis egestas integer eget aliquet nibh praesent.</Par>

                    <Par>Consectetur adipiscing elit ut aliquam purus. Ac odio tempor orci dapibus ultrices. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel turpis nunc eget lorem dolor sed viverra. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Mi sit amet mauris commodo. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Et magnis dis parturient montes nascetur ridiculus mus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Augue mauris augue neque gravida in. Turpis nunc eget lorem dolor. Egestas integer eget aliquet nibh. Nulla pharetra diam sit amet. Tempor orci dapibus ultrices in iaculis nunc. Donec massa sapien faucibus et molestie ac feugiat.</Par>
                </Pars>
                <ImgDiv color={color}><Image src={image}/><Caption>{caption}</Caption></ImgDiv>
                
            </Container>
        </Divider>
    )
}

export default Innovate
