import React from 'react'
import styles from './Footer.module.css'
import logo from '../Assets/logo.png'
import phone_logo from '../Assets/phone.png'
import mail_logo from '../Assets/mail.png'
import location_logo from '../Assets/location.svg'
import Facebook from '../Assets/facebook.svg'
import Instagram from '../Assets/instagram.svg'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'
const Footer = () => {
  return (
    <>
      <div className={styles.mainFooter_div}>
        <div className={styles.mainFooter_div_Flex}>
          <div className={styles.mainFooter_div_Flex_1}>
            <div className={styles.Footer_logo_div} style={{alignItems:'center'}}>
              <img src={logo} alt="logo amrita edge" />
            </div>
            <p style={{paddingBottom:'10px'}}>Our skill development and outreach programs to support school, college students are offered jointly by reputed national and international faculty and eminent bureaucrats, which will help students to equip and expose them to address real-life applications.</p>
          </div>
          <div className={styles.mainFooter_div_Flex_2}>
            <div className={styles.location_flex_div} style={{display:'flex',alignItems:'center'}}>
              <div style={{}}>
                <img src={location_logo} style={{height:'70px',width:'70px'}}></img>
              </div>
              <p style={{overflowWrap:'break-word',marginLeft:'1rem'
            }}>Amrita Vishwa Vidyapeetham,Amritapuri, Clappana PO,Kollam - 690525, Kerala, India</p>
            </div>
            <div className={styles.phone_flex_div} style={{display:'flex',marginTop:'1rem',alignItems:'center'}}>
              <div style={{marginRight:'1rem'}}>
                <img src={phone_logo} alt='location logo' style={{width:'100%',objectFit:'contain'}}></img>
              </div>
              <p style={{alignItems:'center'}}>9747030712, 9567979111.</p>
            </div>
            <div className={styles.phone_flex_div} style={{display:'flex',marginTop:'1rem',alignItems:'center'}}>
              <div style={{}}>
                <img src={mail_logo} alt='location logo' style={{width:'100%',objectFit:'contain'}}></img>
              </div>
              <p style={{marginLeft:'1rem'}}>contact@amritaedge.com</p>
            </div>
          </div>
          <div className={styles.mainFooter_div_Flex_3}>
            <h3>Follow us on</h3>
            <p>Don't hesitate to give us a call or send us a message in our social media</p>
            <div className={styles.socialMedialogs} style={{marginTop:'1rem'}}>
              <div><a href="https://www.facebook.com/profile.php?id=100069114991859 " target="_blank" rel="noreferrer"><img src={Facebook} style={{height:'30px',width:'30px'}} alt="facebook" /></a></div>
              <div><a href="https://www.instagram.com/amrita.edge/" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" style={{height:'30px',width:'30px'}}/></a></div>
              <div><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter" style={{height:'30px',width:'30px'}}/></a></div>
              <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin" style={{height:'30px',width:'30px'}}/></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer    