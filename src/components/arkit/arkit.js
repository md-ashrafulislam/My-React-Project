import React from 'react';
import ListItems from './list';
import pa from '../../images/Rectangle.png';
import pb from '../../images/Rectangle (1).png';
import pc from '../../images/Rectangle (2).png';
import pd from '../../images/Rectangle (3).png';
import pe from '../../images/Rectangle (4).png';

import './arkit.css';

const Arkit = (props) => {
    
   
    return(
        <div>
            <div className="arkitGroup">
                <h1>Build an ARKit 2 app</h1>
                <div className="arkitsectionGroup">
                    <p>Learn ARKit 2’s new image tracking and object detection to create an immersive experience. Import your own 3D models and get familiar with the basics of augmented reality.</p>
                    <h3>10 sections - 5 hours</h3>
                    <div className="listItems">
                        <ListItems 
                            image={pa}
                            title= 'Create and import 3D Models'
                        />
                        <ListItems 
                            image={pb}
                            title= 'Detecting surfaces'
                        />
                        <ListItems 
                            image={pc}
                            title= 'Image Detection'
                        />
                        <ListItems 
                            image={pd}
                            title= 'Touch Gestures'
                        />
                        <ListItems 
                            image={pe}
                            title= 'Object Detection'
                        />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Arkit;