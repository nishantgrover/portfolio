import React, {useState} from 'react';
import styled from 'styled-components';
import {
  Anchor,
  WindowContent,
  Fieldset,
  Tabs,
  Tab,
  TabBody
} from 'react95';

const Projects = () => {
    const [state, setState] = useState({
        activeTab: 0
    });
    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;
    return(
        <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Teddy</Tab>
            <Tab value={1}>2020</Tab>
            <Tab value={2}>FlavorDB2</Tab>
            <Tab value={3}>TimCoins</Tab>
            </Tabs>
            <TabBody style={{ height: 350 }}>
            {activeTab === 0 && (
                <Fieldset label='Teddy: 2D Sketch to 3D Model' style={{fontWeight:"bold"}}>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Guide: <span style={{fontWeight:"normal"}}>Dr. Ojaswa Sharma</span></div>
                    <div style={{textAlign:"justify",  padding: '0.5em 0 0.5em 0' }}>Developed a sketching interface which converts 2D freeform strokes created on the screen to a 3D model. This project is inspired by Teddy (Igarashi et al., 1999) and was recreated on C++ and OpenGL.</div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Duration: <span style={{fontWeight:"normal"}}>Nov '20 – Dec '20</span></div>
                    <div style={{ padding: '0.5em 0 0 0' }}>Team Size: <span style={{fontWeight:"normal"}}>2</span></div>
                </Fieldset>
            )}
            {/* {activeTab === 1 && (
                <Fieldset label='Detecting Anchors’ Opinions' style={{fontWeight:"bold"}}>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Guide: <span style={{fontWeight:"normal"}}>Dr. Tanmoy Chakraborty and Dr. Md. Shad Akhtar</span></div>
                    <div style={{textAlign:"justify",  padding: '0.5em 0 0.5em 0' }}>Developing an NLP-based solution to detect anchor opinions in news delivery for code-switch Indian languages.</div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Duration: <span style={{fontWeight:"normal"}}>Aug '20 – Present</span></div>
                    <div style={{ padding: '0.5em 0 1.5em 0' }}>Team Size: <span style={{fontWeight:"normal"}}>2</span></div>
                </Fieldset>
            )} */}
            {activeTab === 1 && (
                <Fieldset label='2020' style={{fontWeight:"bold"}}>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Guide: <span style={{fontWeight:"normal"}}>Dr. Aman Parnami</span></div>
                    <div style={{textAlign:"justify",  padding: '0.5em 0 0.5em 0' }}>Developed an interactive typography that visually describes the year 2020. The typography is made using HTML, CSS and js.</div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Link: <span style={{fontWeight:"normal"}}><Anchor href="https://nishantgrover.github.io/typography/" target='_blank'>2020</Anchor></span></div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Duration: <span style={{fontWeight:"normal"}}>March '21 – March '21</span></div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Team Size: <span style={{fontWeight:"normal"}}>1</span></div>
                </Fieldset>
            )}
            {activeTab === 2 && (
                <Fieldset label='FlavorDB2' style={{fontWeight:"bold"}}>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Guide: <span style={{fontWeight:"normal"}}>Dr. Ganesh Bagler</span></div>
                    <div style={{textAlign:"justify",  padding: '0.5em 0 0.5em 0' }}>Developed FlavorDB2, an updated and significantly expanded database of flavor molecules. It is an update over the currently deployed FlavorDB published in Nucleic Acids Research (NAR) Journal.</div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Duration: <span style={{fontWeight:"normal"}}>May '20 – July '20</span></div>
                    <div style={{ padding: '0.5em 0 0 0' }}>Team Size: <span style={{fontWeight:"normal"}}>1</span></div>
                </Fieldset>
            )}
            {activeTab === 3 && (
                <Fieldset label='TimCoins' style={{fontWeight:"bold"}}>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Guide: <span style={{fontWeight:"normal"}}>Dr. Grace Eden</span></div>
                    <div style={{textAlign:"justify",  padding: '0.5em 0 0.5em 0' }}>Developed a UI/UX solution which focussing in the domain of materialisation of time in order to make people realise the importance of time as part of the Human-Computer Interaction course.</div>
                    <div style={{ padding: '0.5em 0 0.5em 0' }}>Duration: <span style={{fontWeight:"normal"}}>Jan '20 – Apr '20</span></div>
                    <div style={{ padding: '0.5em 0 0 0' }}>Team Size: <span style={{fontWeight:"normal"}}>5</span></div>
                </Fieldset>
            )}
            </TabBody>
        </WindowContent>
    )
};

export default Projects;