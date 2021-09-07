import React from 'react';
import Wave from '../wave';
import MotionItems from './motionItems';
import pf from '../../images/Rectangle9.png';
import pg from '../../images/Rectangle5.png';
import ph from '../../images/Rectangle6.png';
import pi from '../../images/Rectangle7.png';
import pj from '../../images/Rectangle8.png';
import pk from '../../images/image6.png';


import './motion.css'


const Motion = props => {
    return (
        <div className="motionGroup" image={props.image}>

            <div className="waveTop"><Wave /></div>
            <div className="waveBottom"><Wave /></div>

            <div className="motionlogo"><img src={pk} alt=""/></div>

            <div className="motionlist">
                <h1>Motion Design in After Effects</h1>
                <div className="motionsectionGroup">
                    <p className="para">Learn ARKit 2’s new image tracking and object detection to create an immersive experience. Import your own 3D models and get familiar with the basics of augmented reality.</p>
                    <h3>8 Sections - 4 hours</h3>
                        <MotionItems 
                            image={pf}
                            title= 'Character Animation'
                        />
                        <MotionItems 
                            image={pg}
                            title= 'Title Animation'
                        />
                        <MotionItems 
                            image={ph}
                            title= 'Space Intro'
                        />
                        <MotionItems 
                            image={pi}
                            title= 'Creating Animations for Lottie'
                        />
                        <MotionItems 
                            image={pj}
                            title= 'App Design Prototype'
                        />
                 
                </div>
                <div className="buttonMain">
                    <button style={{width:"308px", position:'absolute', top:'100%'}}>About React course</button>
                </div>
            </div>
        </div>

    )
}

export default Motion;