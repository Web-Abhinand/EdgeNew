import React from 'react'
import styles from './Footer.module.css'
import logo from '../Assets/logo.png'
import phone_logo from '../Assets/phone.svg'
import mail_logo from '../Assets/mail.svg'
import location_logo from '../Assets/location.svg'
import Facebook from '../Assets/facebook.svg'
import Instagram from '../Assets/instagram.svg'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <>
      <section className={styles.mainFooter_div}>
        <div className={styles.mainFooter_div_Flex} style={{paddingBottom:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <div className={styles.mainFooter_div_Flex_1}>
              <div className={styles.Footer_logo_div} style={{ alignItems: 'center' }}>
                <img src={logo} alt="logo amrita edge" />
              </div>
              <p style={{ paddingBottom: '10px', textAlign: 'justify',width:'95%'}}>Our skill development and outreach programs to support school, college students are offered jointly by reputed national and international faculty and eminent bureaucrats, which will help students to equip and expose them to address real-life applications.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <div className={styles.mainFooter_div_Flex_2}>
              <div className={styles.location_flex_div} style={{ display: 'flex', alignItems: 'center',gap:'5px'}}>
                <div style={{ width: '10%' }}>
                  <img src={location_logo} style={{ height: '50px', width: '50px' }}></img>
                </div>
                <div style={{ width: '85%' }}>
                  <p style={{
                    overflowWrap: 'break-word', paddingLeft: '5px'
                  }}>Amrita Vishwa Vidyapeetham,Amritapuri, Clappana PO,Kollam - 690525, Kerala, India</p>
                </div>
              </div>
              <div className={styles.phone_flex_div} style={{ display: 'flex', marginTop: '1rem', alignItems: 'center',gap:'5px'}}>
                <div style={{ width: '10%' }}>
                  <img src={phone_logo} alt='location logo' style={{ height: '50px', width: '50px' }}></img>
                </div>
                <div style={{ width: '85%' }}>
                  <p style={{ paddingLeft: '5px', overflowWrap: 'break-word' }}>9747030712, 9567979111.</p>
                </div>
              </div>
              <div className={styles.phone_flex_div} style={{ display: 'flex', marginTop: '1rem', alignItems: 'center',gap:'5px'}}>
                <div style={{ width: '10%' }}>
                  <img src={mail_logo} alt='location logo' style={{ height: '45px', width: '45px' }}></img>
                </div>
                <div style={{ width: '85%' }}>
                  <p style={{ overflowWrap: 'break-word', paddingLeft: '5px' }}>contact@amritaedge.com</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <div className={styles.mainFooter_div_Flex_3}>
              <h3>Follow us on</h3>
              <p></p>
              <div className={styles.socialMedialogs} style={{ marginTop: '1rem' }}>
                <div><a href="https://www.facebook.com/profile.php?id=100069114991859 " target="_blank" rel="noreferrer"><img src={Facebook} style={{ height: '30px', width: '30px' }} alt="facebook" /></a></div>
                <div><a href="https://www.instagram.com/amrita.edge/" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" style={{ height: '30px', width: '30px' }} /></a></div>
                <div><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter" style={{ height: '30px', width: '30px' }} /></a></div>
                <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin" style={{ height: '30px', width: '30px' }} /></a></div>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
      </section>
    </>
  )
}

export default Footer    