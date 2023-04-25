import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import sci_car_found from '../Assets/science-and-carrer-found.jpg'
import { useEffect } from 'react'
function AEdSciCarPro() {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Science & Career Foundation Program</h1>
                        <p>&emsp;Excellence in Academics is the demonstrated ability to perform, achieve, and/or excel in scholastic activities. Academic excellence has been identified with achieving high grades and superior performance. But academic excellence is more than just getting good grades. It is the maximum development of your intellectual capacities and skills in service to humanity. Achieving academic excellence is a process of both formal and informal education. Indeed, education is a limitless and unending process to be enjoyed for a lifetime. </p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={sci_car_found}></img>
                </div>
            </div>
        </div>
        <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li>Amrita EDGE Science Pre-Foundation & Career Foundation aims at building a strong foundation in Physics, Chemistry, Biology, Mathematics, and Indic Studies through continuous and comprehensive training, which leads to excellent performances in students at the school level studies.</li>
                    <li>Amrita EDGE Science Pre-Foundation & Career Foundation division for class 6th to 10th students imparts meticulously designed quality coaching and sets them for School and Boards together with several competitive and scholarship exams like NTSE and national or international Olympiads (NSEP/B/C/A, JSO, NMTC, RMO, IMO, NSO, ANCQ, NSTSE, etc.). Our courses are considered to enhance the aptitude, reasoning, logical thinking and problem-solving skills of the students from the beginning and gear them up for upcoming academic challenges. </li>
                    <li>Our aim is to nurture young brains with supreme care and dedication in this competitive era. This is the grounds; we begin building up the concepts and knowledge from the very basic level so that by the time the student of class 6th to 10th will get ready to appear and perform well in competitive entrance and scholarship examinations, andbe able to shine in this competitive world.</li>
                    <li>Cultivation of INDIC values in a child is also an 'Education of its own kind'. In Bharathiya culture, values are given utmost importance, which include speaking truth, right conduct,honesty, peace, nonviolence, respect for elders, helping others, spirituality and so on. Success with values makes it multifold, and such success always contributes to the betterment of society & the Nation. </li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  )
}
export default AEdSciCarPro;