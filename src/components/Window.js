import React, {useState} from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel
} from 'react95';

import AboutMe from './windowContent/AboutMe';
import Projects from './windowContent/Projects';
import Skills from './windowContent/Skills';

const Wrapper = styled.div`
  padding: 1rem;
  z-index: 1;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      position: absolute;
      background: ___CSS_0___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      content: '+';
      font-weight: bold;
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;

const contentSelector = (nameId) => {
    switch (nameId){
        case 'About Me': return (<AboutMe/>);
        case 'Projects': return (<Projects/>);
        case 'Skills': return (<Skills/>);
        default:
            return(
            <div> </div>
            );
    }
};

const WindowFile = ({openState, setOpenState, windowName, windowIcon}) => {
    
    // const [closeState, setCloseState] = useState(false);
    const closeClick = () => {
        setOpenState(false);
    };

    return(
        <Wrapper style={{display:openState?'initial':'none', float:"right", position:"relative"}}>
            <Window className='window' style={{width:windowName==='Skills'?"450px":"400px"}}>
            <WindowHeader className='window-header'>
                <span><img src = {windowIcon} style={{width:18, paddingTop:"5px", paddingRight:"10px", paddingLeft:"5px"}}/>{windowName}.exe</span>
                <Button onClick={closeClick}>
                <span className='close-icon' />
                </Button>
            </WindowHeader>
            <Toolbar>
                <Button variant='menu' size='sm' disabled>
                File
                </Button>
                <Button variant='menu' size='sm' onClick={closeClick}> 
                Exit
                </Button>
            </Toolbar>

            {contentSelector(windowName)}
            
            {/* <Panel variant='well' className='footer'>
                Put some useful informations here
            </Panel> */}
            </Window>

        </Wrapper>
        
    );
};

export default WindowFile;
