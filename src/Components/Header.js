import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../Assets/logo.png'
const Header = () => {
  return (
    <div className={styles.mainHeaderdiv}>
      <div className={styles.mainHeaderdivflex}>
        <div className={styles.mainHeaderdivflexdiv1}>
          <div className={styles.mainHeaderdiv_logo}>
            <img src={logo} alt="logo" style={{marginLeft:'1.5rem'}}/>
          </div>
        </div>
        <div className={styles.mainHeaderdivflexdiv2}>
          <div className={styles.mainHeaderdivmenu}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/our-programs">Our Programs</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header