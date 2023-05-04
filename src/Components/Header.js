import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../Assets/thumbnail_Asset 1.png'
const Header = () => {
  return (
    <div className={styles.mainHeaderdiv}>
      <div className={styles.mainHeaderdivflex}>
        <div className={styles.mainHeaderdivflexdiv1}>
          <div className={styles.mainHeaderdiv_logo}>
          <Link to="/"><img src={logo} alt="logo" style={{marginLeft:'1.5rem',maxHeight:'8vh',padding:'0.2rem'}}/></Link>
          </div>
        </div>
        <div className={styles.mainHeaderdivflexdiv2}>
          <div className={styles.mainHeaderdivmenu}>
            <Link to="/about">About</Link>
            <Link to="/our-programs">Our Programs</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header