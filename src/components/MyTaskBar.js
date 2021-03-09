import React from 'react';
import {
  AppBar,
  Toolbar,
  Anchor,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';
import Clock from '@react95/core/cjs/TaskBar/Clock'
import windows_logo from '@react95/icons/src/png/shell32_40_32x32_4bit.png';
import github_icon from '../assets/GitHub-Mark-32px.png'
import linkedin_icon from '../assets/linkedin.png'
import mail_logo from '@react95/icons/src/png/mail_32x32_4bit.png'

const MyTaskBar = () => {
  const [open, setOpen] = React.useState(false);
  return(
    <nav>
        <AppBar style={{ zIndex: 3, display: "inline-block", bottom: 0, display:"flex", top:"initial"}} fixed={false}>
              <Toolbar style={{ justifyContent: 'space-between'}}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <Button
                    onClick={() => setOpen(!open)}
                    active={open}
                    style={{ fontWeight: 'bold' }}
                  >
                    <img
                      src={windows_logo}
                      alt='react95 logo'
                      style={{ height: '20px', marginRight: 4 }}
                    />
                    Contact Me
                  </Button>
                  {open && (
                    <List
                      style={{
                        position: 'absolute',
                        left: '0',
                        bottom: '100%'
                      }}
                      onClick={() => setOpen(false)}
                    >
                      <ListItem>
                        <a href = "https://github.com/nishantgrover" target="_blank" style={{textDecoration:"none"}}>
                          <span role='img' aria-label={github_icon}>
                            <img src={github_icon} width="17" style={{paddingTop:10, paddingRight:10}}/>
                          </span>
                          GitHub
                        </a>
                      </ListItem>
                      <ListItem>
                      <a href = "https://www.linkedin.com/in/nishant--grover/" target="_blank" style={{textDecoration:"none"}}>
                          <span role='img' aria-label={linkedin_icon}>
                            <img src={linkedin_icon} width="17" style={{paddingTop:10, paddingRight:10}}/>
                          </span>
                          LinkedIn
                        </a>
                      </ListItem>
                      <ListItem>
                        <a href = "mailto:nishantgrover74@gmail.com" target="_blank" style={{textDecoration:"none"}}>
                          <span role='img' aria-label={mail_logo}>
                            <img src={mail_logo} width="17" style={{paddingTop:10, paddingRight:10}}/>
                          </span>
                          Mail me
                        </a>
                      </ListItem>
                      <Divider />
                      <ListItem disabled>
                        <span role='img' aria-label='🔙'>
                          🔙
                        </span>
                        Logout
                      </ListItem>
                    </List>
                  )}
				  {/* <Button style={{"margin-left": "8px"}} active> TaskBar ON </Button> */}
                </div>
				<div>
                	<Clock/>
				</div>
              </Toolbar>
          </AppBar>
    </nav>
  );
};

export default MyTaskBar;