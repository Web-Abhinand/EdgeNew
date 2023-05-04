import React from 'react'
import styles from './intMent.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import pcm_exam from '../Assets/undraw_exams_re_4ios.svg'
import { useEffect } from 'react'
const PCM = () => {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>PCM GS - Advanced Civil Service Coaching for Undergraduate Students</h1>
                        <p>&emsp;General Studies - Prelims cum Mains (PCM) Program is offered exclusively for Amrita University students, is designed for those who would like to undertake Civil Service Exam preparation along with their regular studies, allowing them to write the Exam as soon as they graduate. It will also equip students who take up full time job after graduation to pursue their Civil Service dreams. </p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={pcm_exam}></img>
                </div>
            </div>
        </div>
        <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li>Motto: Start Early, Crack Early</li>
                    <li>Program Duration: 2 Years</li>
                    <li>Key Program Highlights </li>
                    <li>500 + Hours Comprehensive Coverage of Prelims & Mains Syllabus</li>
                    <li>Pre-recorded High Quality Lectures</li>
                    <li>Live Doubt Clarification sessions with Faculty</li>
                    <li>NCERT Test Series</li>
                    <li>Mentorship</li>
                    <li>Current Affairs Sessions - Prelims & Mains</li>
                    <li>Strategy Sessions</li>
                    <li>Prelims & Mains Practice Sessions</li>
                    <li>Prelims & Mains Test Series</li>
                </ul>
            </div>
        </div> 
        <Footer />
    </>
  )
}

export default PCM