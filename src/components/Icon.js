import React, {useState} from 'react'
import styled from 'styled-components'

import WindowFile from './Window';

import {Button} from '@react95/core';

const IconDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 5%;
	padding: 10px 0;
    margin-top: 5px;
    margin-left: 7px;
`;

const IconName = styled.span`
	margin-top: 5px;
    color: #FFFFFF;
    // userSelect: 'none';
    padding: 2;
    // background: selected ? '#0000aa' : 'transparent';
`;

const Icon = ({sourceImg, name}) => {
    const [windowState, setWindowState] = useState(false);

    const clickIcon = () => {
        setWindowState(true);
    };

	return (
		<>
            <IconDiv>
                <img src ={sourceImg} style={{width:40}} onDoubleClick={clickIcon} />
                <IconName>{name}</IconName>
            </IconDiv>
            <WindowFile openState = {windowState} setOpenState = {setWindowState} windowName = {name} windowIcon ={sourceImg} />
        </>
	)
};

export default Icon;