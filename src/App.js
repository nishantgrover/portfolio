
import React, {useState, useEffect} from 'react';
import './App.css';
import '@react95/icons/icons.css';

import {Howl, Howler} from 'howler';

import bootSound from "./assets/windows_95_startup.mp3";

import painting from '@react95/icons/src/png/progman_24_32x32_4bit.png';
import windows_logo from '@react95/icons/src/png/shell32_40_32x32_4bit.png';
import about_icon from '@react95/icons/src/png/awfxex32_info_32x32_4bit.png'
import skills_icon from '@react95/icons/src/png/mspaint_32x32_4bit.png';

import {Button, TextArea, Modal, Frame} from '@react95/core';

import MyTaskBar from './components/MyTaskBar';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider, Hourglass, Desktop, AppBar, Toolbar, TextField, Progress, Window, Panel} from 'react95';
import styled from 'styled-components';


import original from "react95/dist/themes/original";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import Icon from './components/Icon';

import WindowFile from './components/Window';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: #5aa;
  }
	.jvIHdo {
		padding-right: 20px;
	}
  ${styleReset}
`;

const audioclips = [{sound:bootSound, label:"bootSound"}]

const StyledSpan = styled.span`
	margin-top: 5px;
`;


function App(){

  let SoundPlay = (src) =>{
    const sound = new Howl({
      src
    })
    sound.play();
  }
  Howler.volume(0.1);

  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  },[]);

  return (
    <div>
      {SoundPlay(bootSound)}
      <GlobalStyles />
      {
        loading?<Hourglass/>
        :
        <ThemeProvider theme={original}>
          <MyTaskBar />
					
					<Icon sourceImg = {about_icon} name = "About Me" />

					<Icon sourceImg = {skills_icon} name = "Skills" />
					
					<Icon sourceImg = {painting} name = "Projects" />

        </ThemeProvider>
      }
    </div>
  );
}

export default App;
