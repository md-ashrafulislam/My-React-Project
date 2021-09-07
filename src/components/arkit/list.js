import React from 'react';

import './list .css'
// import pa from '../../images/Rectangle.png';
// import pb from '../../images/Rectangle (1).png';
// import pc from '../../images/Rectangle (2).png';
// import pd from '../../images/Rectangle (3).png';
// import pe from '../../images/Rectangle (4).png';


// const lists = [
//     {
//         title: 'Create and import 3D Models',
//         image: pa
//     },
//     {
//         title: 'Detecting surfaces ',
//         image: pb
//     },
//     {
//         title: 'Image Detection',
//         image: pc
//     },{
//         title: 'Touch Gestures',
//         image: pd
//     }
//     ,
//     {
//         title: 'Object Detection',
//         image: pe
//     }
// ]

const ListItems = props => {
    return(
        <div className="listItemsGroup">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            
        </div>
    )
}
export default ListItems;