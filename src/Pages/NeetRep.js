import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/01.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './NeetRep.module.css'
import { useEffect } from 'react'
function NeetRep() {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <>
        <Header />
        <div className={styles.main_neet_rep}>
            <div className={styles.main_neet_rep_flex} style={{paddingTop:'2rem'}}>
                <div className={styles.main_neet_rep_left_div}>
                    <div className={styles.main_neet_rep_left_div_text}>
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>NEET Repeaters Program</h1>
                        <p>&emsp;If you are not satisfied with your performance in NEET 2023, here is the perfect solution. The Year-long AMRITA EDGE NEET Repeaters course aims at equipping students with all the necessary skills to excel at NEET - UG 2024. The course is designed specifically forstudents who were unable to secure their dream seatin NEET 2023 or earlier. The course will consist of detailed lectures on all 97 chapters of 1st-year and 2nd-year Physics, Chemistry, and Biology (Botany and Zoology); with regular and comprehensive assessment using NEET Revision mock tests. The NEET Repeaters course from AMRITA EDGE aims at placing students at prestigious government medical colleges with exemplary NEET scores.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={NeetRepImg}></img>
                </div>
            </div>
        </div>
        <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li>Classes from Monday to Friday-offline session.</li>
                    <li>Separate hostel facility for boys and girls</li>
                    <li>Scheduled study time in hostels under the scrutiny of a mentor.</li>
                    <li>Separate NEET-based Study Materials for Biology, Physics & Chemistry</li>
                    <li>Separate NEET-based Study Materials for Biology, Physics & Chemistry</li>
                    <li>Cumulative Tests in Biology, Physics & Chemistry.</li>
                    <li>NEET Revision Test Papers in Biology, Physics & Chemistry in two sets</li>
                    <li>Solution booklets for problems in Study Material Books.</li>
                    <li>Progress Report Booklet to keep record of the student's performance in order to keep the parents updated on a continuous basis.</li>
                    <li>Intensive Final orientation for NEET, with quick (third level) revision of syllabus.</li>
                </ul>
            </div>
        </div>
        <div >
            <Footer />
        </div>
    </>
  )
}
export default NeetRep