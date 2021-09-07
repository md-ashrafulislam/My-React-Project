import React from 'react';

import './motionItems.css'

const MotionItems = props => {
    return(
        <div className="motionItemsGroup">
            <img src={props.image} alt="" />
            <p className="para2">{props.title}</p>  
        </div>
    )
}
export default MotionItems;