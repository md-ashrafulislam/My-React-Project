import React from 'react';
import Wave from './wave';

import logosketch from '../images/logo-sketch.png';
import logofigma from '../images/logo-figma.png';
import logoinvision from '../images/logo-invision.png';
import logoframer from '../images/logo-framer.png';
// import logoxcode from '../images/logo-xcode.png';
import logoreact from '../images/logo-react.png';
import logoswift from '../images/logo-swift.png';
// import camp from '../images/wallpaper3.jpg'
import campA from '../images/Comp 01.jpg'
import Card from './card/card';
import campB from '../images/Comp 01 (1).png';
import campC from '../images/Comp 01 (2).jpg';
import campD from '../images/Comp 01 (3).jpg';
import campE from '../images/Comp 01 (4).jpg';
import campF from '../images/Comp 01 (5).jpg';
import campG from '../images/Comp 01 (6).jpg';
import campH from '../images/Comp 01 (7).jpg';
import campI from '../images/Comp 01 (8).jpg';
// import campJ from '../images/Comp 01 (9).jpg';
import imageSection from '../images/Sinus.jpg';
import logoSection from '../images/image 2.png';
import imageSection2 from '../images/image.jpg';
import Section from './section/section';
import staticdata from '../staticdata.json';
import Cell from './cell';
import styled from 'styled-components';
import laptop from '../images/laptop.png';
import iphone from '../images/iPhone.png';
import image3 from '../images/image3.jpg';
import image4 from '../images/image 4.png';
import image5 from '../images/image5.png';
import Arkit from '../components/arkit/arkit';
import sinus2 from '../images/Sinus2.jpg';
import Motion from '../components/motion/motion';
import Footer from './footer/footer';


import './hero.css';
import ListItems from '../components/arkit/list';

const SectionCaption = styled.p`
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #94A4BA;
    text-align: center;
`

const SectionCellGroup = styled.div`
    max-width: 800px;
    margin: 0 auto 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding: 0 20px;

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
    }
`


const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-group">
                    <h1>Learn to <br />design and code React apps</h1>
                    <p>Complete coureses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
                    {/* <link to="/page-2">Watch the video</link> */}
                    <a href="">Watch the video</a>
                    
                    <div className="logos">
                        <img src={logosketch} width="50" alt=""/>
                        <img src={logofigma} width="50" alt=""/>
                        <img src={logoinvision} width="50" alt=""/>
                        <img src={logoframer} width="50" alt="" />
                        {/* <img src={logoxcode} width="50" alt=""/> */}
                        <img src={logoreact} width="50" alt=""/>
                        <img src={logoswift} width="50" alt=""/>
                    </div>
                    
                </div> 

                <Wave />            
            </div> 
 
            <div className="buttonMain">
                <button>Try for free</button>
                
                <h3>get 7 days free trial</h3>
                <p>Then, it’s $9 per month, billed annually.
                    Cancel anytime. No soul required.
                    Free upgrade from version 2.
                </p>
            </div>
            
            <div className="cards">

                <h2>11 courses, more coming</h2>

                <div className="cardgroup">
                    <Card
                        title="Design System with Figma"
                        text="10 sectilns"
                        image={campA} />

                    <Card
                        title="React for Designers"
                        text="12 sectilns"
                        image={campB} />

                    <Card
                        title="Video Editing with Screenflow"
                        text="8 sectilns"
                        image={campC} />

                    <Card
                        title="Sound Design with Cubase"
                        text="8 sectilns"
                        image={campD} />

                    <Card
                        title="Build an ARKit 2 app"
                        text="10 sectilns"
                        image={campE} />

                    <Card
                        title="Motion Design in After Effects"
                        text="8 sectilns"
                        image={campF} />

                    <Card
                        title="Swift Advanced"
                        text="22 sectilns"
                        image={campG} />

                    <Card
                        title="Learn Swift"
                        text="19 sectilns"
                        image={campH} />

                    <Card
                        title="Learn Sketch"
                        text="21 sectilns"
                        image={campI} />
                </div>
            </div>
            <div className="content">
                <div className="about">
                    <h1>60</h1>

                    <p>
                        hours of video content 
                        that’s downloadable and captioned
                    </p>
                </div>
                <div className="support">  
                    <h2>4</h2>
                    
                    <p>
                        languages supported. 
                        English, Chinese, French, 
                        Spanish.
                    </p>
                </div>
            </div>

            <Section
                image={imageSection2}
                
                text2="Design for everyone.
                      Coding for designers."
            />

            <div className="metarial">
                <img className="laptop" src={laptop} />
                <img className="iphone" src={iphone} />
            </div>

            <Section 
                image={imageSection}
                logo={logoSection}
                title="React for Designers"
                text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
            />
            
            <SectionCaption>12 section - 6 hours</SectionCaption>
            <SectionCellGroup>
                {staticdata.cells.map(cell => (
                    <Cell
                        image={cell.image}
                        title={cell.title}
                        background={cell.background ? cell.background : null}
                    />
                ))}
            </SectionCellGroup>
            
             <div className="buttonMain">
                <button style={{width:"308px"}}>About React course</button>
            </div>
            
            <div className="boxPhone">
                <img className="boxlogo" src={image5} alt=""/>
                <img className="phonelogo" src={image4} alt=""/>
            </div>
            <Section
                image={image3} 
            />
            <Arkit />
            <div className="buttonMain" style={{paddingTop:"40px"}}>
                <button style={{width:"300px"}}>About ARKit2 course</button>
            </div>

            <Motion
                image={sinus2} 
            />
            <Footer />
            
    </div>
    )
}

export default Hero;


