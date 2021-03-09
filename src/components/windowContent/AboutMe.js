import React, {useState} from 'react';
import styled from 'styled-components';
import me from "../../assets/me.png";
import {
  Cutout,
  WindowContent,
  Fieldset,
  Button,
  Toolbar,
  Panel
} from 'react95';

const AboutMe = () => {
    return(
        <WindowContent>
                <Panel style={{width:"50%", left:"25%", padding:10, paddingBottom:4, marginBottom:5}}>
                    <img src={me} style={{width:"100%", height:"100%"}}/>
                </Panel>
            <h1 style={{fontWeight:"bold", textAlign:"center", marginBottom:5}}>Nishant Grover</h1>
            <p style={{textAlign:"justify"}}>
            Hi, I am a Junior student currently pursuing Computer Sciene and Design at IIIT-Delhi. Currently, I am an Undergraduate Researcher at Laboratory for Computational Social Systems (LCS2) led by Dr. Tanmoy Chakraborty and Dr. Md. Shad Akhtar. My interests and skillset lie in Data Science, Design and Software Development. I am a keen learner and am always lookiing for opportunities to learn new things.  
            </p>
            <p style={{textAlign:"justify", paddingTop:"8px"}}>I am a certified Junior Black belt in Taekwondo recognized by the World Taekwondo Federation.</p>
            <p style={{textAlign:"justify", paddingTop:"8px"}}>
                When I am not in front of the computer, I usually Dance or watch YouTube videos. 
            </p>
        </WindowContent>
    )
};

export default AboutMe;