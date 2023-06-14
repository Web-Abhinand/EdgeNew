import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import entrance_coach from '../Assets/entrance_coach.jpg'
import { useEffect } from 'react'
const EntranceCoaching = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <>
        <Header />
            <div className={styles.main_neet_rep}>
                <div className={styles.main_neet_rep_flex} style={{marginTop:'2rem'}}>
                    <div className={styles.main_neet_rep_left_div}>
                        <div className={styles.main_neet_rep_left_div_text}>
                            <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Entrance Coaching </h1>
                            <p>&emsp;Amrita EDGE Entrance-only program prepares students to face entrance examinations successfully by providing a healthy learning environment grounded well in the principles of value-based career education, imparting knowledge, infusing positivity, and boosting confidence.</p>
                        </div>
                    </div>
                    <div className={styles.main_neet_rep_right_div}>
                        <img src={entrance_coach}></img>
                    </div>
                </div>
            </div>
            <div className={styles.details_neet_rep}>
                <div className={styles.details_neet_rep_inner}>
                    <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                    <ul>
                        <li>We offer methodical coaching and a healthy competitive atmosphere to the Pre-Medical and JEE aspirants through our excellent curriculum and adequate infrastructural facilities. Our team of highly qualified and competent faculties gives quality education to the aspirants, lending them a leading edge in preparation. The motivation that we extend to the aspirants helps them determine their own abilities and shows them the path to success.</li>
                        <li>In order to get through NEET-UG / IIT-JEE , the right approach, determination, and self-belief are very important. Our faculties provide personal guidance to all students equally.The study material, which has been prepared by our well-versed faculties after extensive research, is comprehensive yet simple to understand. This specially tailored curriculum takes care of board examinations simultaneously. Our comprehensive reports of periodic tests guide Medical/JEE aspirants to know their weaknesses so that they try to overcome them; understand their strengths, and enhance them.</li>
                    </ul>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default EntranceCoaching