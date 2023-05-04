import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import test_prepr from '../Assets/07.jpg'
import sci_car_found from '../Assets/science-and-carrer-found.jpg'
import { useEffect } from 'react'
function AEECP() {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Exam Catalyst Program </h1>
                        <p style={{paddingBottom:'1rem'}}>&emsp;Exam Catalyst is our focused, structured, revision-based "Class 12 CBSE Board Booster Crash Programme”. The programme is mentored by the experienced and expert faculties of Amrita EDGE to foster the board exam preparation and to achieve 100% success by strengthening the concepts as well as getting exposed to different types of questions as per the new CBSE pattern without having to deviate too much from their own preparation.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={test_prepr}></img>
                </div>
            </div>
        </div>
        {/* <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li></li>
                    <li>Amrita EDGE Science Pre-Foundation & Career Foundation division for class 6th to 10th students imparts meticulously designed quality coaching and sets them for School and Boards together with several competitive and scholarship exams like NTSE and national or international Olympiads (NSEP/B/C/A, JSO, NMTC, RMO, IMO, NSO, ANCQ, NSTSE, etc.). Our courses are considered to enhance the aptitude, reasoning, logical thinking and problem-solving skills of the students from the beginning and gear them up for upcoming academic challenges. </li>
                    <li>Our aim is to nurture young brains with supreme care and dedication in this competitive era. This is the grounds; we begin building up the concepts and knowledge from the very basic level so that by the time the student of class 6th to 10th will get ready to appear and perform well in competitive entrance and scholarship examinations, andbe able to shine in this competitive world.</li>
                    <li>Cultivation of INDIC values in a child is also an 'Education of its own kind'. In Bharathiya culture, values are given utmost importance, which include speaking truth, right conduct,honesty, peace, nonviolence, respect for elders, helping others, spirituality and so on. Success with values makes it multifold, and such success always contributes to the betterment of society & the Nation. </li>
                </ul>
            </div>
        </div> */}
        <Footer />
    </>
  )
}
export default AEECP;