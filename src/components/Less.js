import styled from 'styled-components';
import sofa from '../images/sofa.jpeg'
import measure from '../images/measure.jpeg'
import stress from '../images/stress.png'
import mess from '../images/mess.png'


const LessImg= styled.img`
    width:35vh;
    padding-bottom:5vh;
`
const Container= styled.div`
    display:flex;
    flex-direction:column;
    background-color: #f5f5f5;
    padding-right:5vw;
    padding-left:5vw;
    padding-bottom:3vh;

`
const LessContainer= styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    background-color: #f5f5f5;
    padding-top:10vh;

`
const Par=styled.h5`
    text-align: center;
    font-family: 'PT Sans';
    font-size:4vh;
    padding-top:0;
    margin-top:0;
`
const Section=styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
`
//
const Link= styled.a`
    color:#003087;
`

const Less = () => {
    return (
        <Section>
            
            <LessContainer>
                <Container>
                    <LessImg src={mess}/>
                    <LessImg src={sofa}/>
                </Container>
                <Container>
                    <LessImg src={stress}/>
                    <LessImg src={measure}/>
                </Container>
            </LessContainer>
            <Par>Only on the Walmart <Link href="https://www.walmart.com/cp/walmart-mobile-app/1087865sourceid=dsn_othr_eabf4283-c1f2-4a30-8fdf-237d0cd82b84&veh=dsn&wmlspartner=dsn_othr_eabf4283-c1f2-4a30-8fdf-237d0cd82b84&cn=FY21-Back-to-School_br_hw_dsn_dis_othr_snl_oth?&adid=22222222254421113918&wmlspartner=wmtlabs&wl0=b&wl1=g&wl2=c&wl3=311994872549&wl4=dsa-569222926777&wl5=9012403&wl6=&wl7=&wl8=&veh=sem&gclid=Cj0KCQjw9O6HBhCrARIsADx5qCS1ejPZC82i-ntmVhXl1YAovbN7Vhv8hTTMv7VAs-zfa58m_HJ6cR0aArPdEALw_wcB&gclsrc=aw.ds">App.</Link></Par>
            {/* <Background id="innovate">
                <Title>Innovate</Title>
                <Title> Innovate Innovate Innovate Innovate</Title>
            </Background> */}
        </Section>
    )
}

export default Less
