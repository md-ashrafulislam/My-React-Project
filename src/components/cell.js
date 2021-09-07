import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    gap: 25px;
    align-items: center;
`

const CellImage = styled.div`
    
    width: 60px;
    height: 60px;
    
    background: url(${props => props.image}),${props => props.background} ;
    // background: ;
    
    border-radius: 10px;
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

`
 

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 0;
`

const Cell = props => {
    return (
        <CellGroup >
            <CellImage image={props.image} background={props.background} ></CellImage>
            <CellTitle>{props.title}</CellTitle>
        </CellGroup>
    )
}

export default Cell;