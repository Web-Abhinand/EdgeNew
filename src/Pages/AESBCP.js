import React from 'react'
import scienc_bridge from '../Assets/science_bridge.jpg'
import styles from './intMent.module.css'
import Header from '../Components/Header'
import { useEffect } from 'react'
import Footer from '../Components/Footer'
const AESBCP = () => {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Science Bridge Course Program</h1>
                        <p>&emsp;The Amrita EDGE Bridge Course 2023 is a unique program designed exclusively for the students who have finished their class 10 board exam studying at various Amrita Vidyalayams across Bharath to help them develop a solid basis and upskill in physics, chemistry, biology, and mathematics subjects. The course will help students with the fundamental academic information and abilities they will need to excel in their 11th and 12th grade subjects in the upcoming academic year 2023–24 by enhancing their talents and preparing them for the competitive phase ahead.</p>
                        <p style={{paddingBottom:'1rem'}}>&emsp;The course covers key learning concepts and learner skills for an entire academic year. Concepts have been carefully picked based on important student learning outcomes without burdening them with the content of an entire year, which will be covered through 50+ sessions. It helps students build on their existing knowledge, develop a sound understanding of concepts, and fill any learning gaps that they experience.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={scienc_bridge}></img>
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

export default AESBCP