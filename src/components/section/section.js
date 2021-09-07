import React from 'react';
import styled from 'styled-components';
import Wave from '../wave';

const SectionGroup = styled.div`
background: url(${props=>props.image});
height: 650px;
background-size:cover;
display: grid;
grid-template-rows: 300px auto;
gap: 20px;
position: relative;

padding-bottom: 200px;
@media (max-width: 768px) {
    height: 450px;
}

@media (max-width: 475px) {
    height: 550px;
}
`
// const SectionLogophone = styled.img`
//     position: absolute;
//     top:2%;
//     left:28%;
//     width: 796px;
//     height: 713.44px;
    
// `

const SectionLogo = styled.img`
    // align-self: end;
    position: absolute;
    top:26%;
    left:23%;
    width: 128px;
    margin: 0 auto;

    @media (max-width: 1030px) {
        top:26%;
        left:34%;
    }

    @media (max-width: 768px) {
        top:26%;
        left:45%;
    }

    @media (max-width: 475px) {
        top:26%;
        left:32%;
    }

`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    gap: 20px;
    
    padding-bottom: 450px;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height:1.2;

    @media (max-width: 720px) {
        font-size: 40px;
        text-align: center;
    }
`

const SectionText = styled.p`
    color: white;
    // text-align:center;

    @media (max-width: 720px) {
        text-align: center;
    }
`
const SectionTextTwo = styled.p`
    width: 600px;
    // top: 3695px;
    font-family: SF Pro Display;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    color:rgba(245, 161, 36, 1);
    box-sizing: border-box;
    padding-top: 280px;
    margin-left: 22%;
  
    @media (max-width: 768px) {
        margin-left: 25%;
        width: 400px;
        font-size: 40px;

    }

    @media (max-width: 475px) {
        width: 300px;
        font-size: 30px;
        margin-left: 10%;
    }
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`


const Section = props => {
    return(
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom> <Wave /> </WaveBottom>
         <SectionTextTwo>{props.text2}</SectionTextTwo>
        <SectionLogo src={props.logo} />
        {/* <SectionLogophone src={props.Phone}></SectionLogophone> */}
        <SectionTitleGroup>
            
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
           
        </SectionTitleGroup>
    </SectionGroup>

)
}
export default Section;