import React from 'react'
import styles from './intMent.module.css'
import Header from '../Components/Header'
import nda from '../Assets/nda.jpg'
import { useEffect } from 'react'
import Footer from '../Components/Footer'
const NdaCoaching = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <>
        <Header />
            <div className={styles.main_neet_rep}>
                <div className={styles.main_neet_rep_flex}>
                    <div className={styles.main_neet_rep_left_div}>
                        <div className={styles.main_neet_rep_left_div_text}>
                            <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>NDA Coaching </h1>
                            <p>&emsp;To motivate and prepare the enterprising and aspiring youth of Kerala to join the Armed Forces as Officers, by identifying them at a young age, grooming and nourishing their Officer Like Qualities ( OLQs), being the maiden venture in this direction in Kerala, this program tends to bridge the gap between the presentstandard of the aspirant youth of Kerala and the expected high selection standards of young military leaders in the Armed Forces.</p>
                        </div>
                    </div>
                    <div className={styles.main_neet_rep_right_div}>
                        <img src={nda}></img>
                    </div>
                </div>
            </div>
            <div className={styles.details_neet_rep}>
                <div className={styles.details_neet_rep_inner}>
                    <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>MODUS OPERANDI</h1>
                    <p style={{fontFamily:'Montserrat',textAlign:'left',marginBottom:'1rem'}}>Grooming the youngsters is divided into the following stages:-</p>
                    <ul>
                        <li>Identifying and selecting the potential youth at 10th standard level by gauging their motivation level through an entrance examination to determine their foundation level and logical mind. </li>
                        <li>The target group of candidates will be subjected to  2 years of 'Personality grooming and Leadership Development programme.</li>
                        <li>The target group of candidates will be subjected to  2 years of 'Personality grooming and Leadership Development programme.</li>
                        <li>The target group of candidates will be subjected to  2 years of 'Personality grooming and Leadership Development programme.</li>
                        <li>During these courses, emphasis will be given to English Communication Skills, General Awareness, and Physical Fitness, which are considered the foundation pillars of Military Leadership. </li>
                        <li>Before the last semester of  12th standards( PCM is compulsory), two months of preparatory coaching will be imparted to this batch to clear the NDA written examination.( Every year, two NDA exams in April and September).</li>
                        <li>The selected Candidates will be nominated and sent for advanced leadership training.</li>
                        <li>The final selection of these trained candidates will be done by Armed Forces Service Selection Boards(SSB) in various centres in India. Once recommended by the SSB, the candidates will report to the National Defence Academy, for their 3 years military training and graduation. </li>
                    </ul>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default NdaCoaching