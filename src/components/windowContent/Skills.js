import React, {useState} from 'react';
import styled from 'styled-components';
import {
  Cutout,
  WindowContent,
  Fieldset,
  Progress,
  Tabs,
  Tab,
  TabBody
} from 'react95';

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0;
`

const Skills = () => {
    const [state, setState] = useState({
        activeTab: 0
    });
    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;
    return(
        <WindowContent>
        <Cutout style={{ padding: '1rem', background: 'white'}}>
            <Fieldset variant='flat' label='Tools and Languages'>
            <StyledSkill>
                <p style={{ flex: 1 }}>Python</p>
                <Progress style={{ flex: 1 }} value={95} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>Java</p>
                <Progress style={{ flex: 1 }} value={90} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>C++</p>
                <Progress style={{ flex: 1 }} value={85} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>React</p>
                <Progress style={{ flex: 1 }} value={45} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>Adobe Photoshop</p>
                <Progress style={{ flex: 1 }} value={85} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>Adobe Xd</p>
                <Progress style={{ flex: 1 }} value={80} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>Adobe Premiere Pro</p>
                <Progress style={{ flex: 1 }} value={80} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>pandas</p>
                <Progress style={{ flex: 1 }} value={90} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>scikit</p>
                <Progress style={{ flex: 1 }} value={85} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>Django</p>
                <Progress style={{ flex: 1 }} value={90} />
            </StyledSkill>
            <StyledSkill>
                <p style={{ flex: 1 }}>OpenGL</p>
                <Progress style={{ flex: 1 }} value={60} />
            </StyledSkill>
            </Fieldset>
        </Cutout>
        </WindowContent>
    )
};

export default Skills;