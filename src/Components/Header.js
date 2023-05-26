import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../Assets/thumbnail_Asset 1.png'
import { Button } from '@mui/material'
import ham_icon from '../Assets/hamburger-menu.svg'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={styles.mobileheaderimagediv}>
        <Link to="/"><img src={logo}></img></Link>
      </div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/about">ABOUT</Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/our-programs">OUR PROGRAMS</Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/Career">CAREER</Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/contact">CONTACT</Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const headerStyle = {
    textAlign: 'center',
    transition: 'transform 1s ease-in-out',
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  };
  return (
    <>
      <div className={styles.mainHeaderdiv} style={headerStyle}>
        <div className={styles.mainHeaderdivflex}>
          <div className={styles.mainHeaderdivflexdiv1}>
            <div className={styles.mainHeaderdiv_logo}>
              <Link to="/"><img src={logo} alt="logo" style={{ marginLeft: '1.5rem', maxHeight: '12vh', padding: '0.5rem',objectFit:'contain'}} /></Link>
            </div>
          </div>
          <div className={styles.mainHeaderdivflexdiv2}>
            <div className={styles.mainHeaderdivmenu}>
              <Link to="/about">ABOUT</Link>
              <Link to="/our-programs">OUR PROGRAMS</Link>
              <Link to="/Career">CAREER</Link>
              <Link to="/contact">CONTACT</Link>
              <div className={styles.hamdiv}>
                {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button variant="outlined" onClick={toggleDrawer(anchor, true)}><img src={ham_icon}></img></Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header