import React from 'react'
import styles from './intMent.module.css'
import { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ias from '../Assets/1.webp'
const AENTSE = () => {
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
                            <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro', margin: '0', paddingBottom: '1rem', textAlign: 'left' }}>Amrita Edge NTSE Coaching Program </h1>
                            <p style={{paddingBottom:'1rem'}}>&emsp;Amrita Edge NTSE coaching program has been developed with the fact keeping in mind that NTSE is not just a competition, but it’s an honour&pride to be a part of our nation’s asset as an individual. We have introduced a charismatic learning module, developed to ensure your rank in NTSE. The module is specially designed keeping your selection in mind, not the syllabus only.  NTSE coaching is where you will get the complete study materialsyou require for the National Talent Search Examination. It not only comprises online video lectures, practice video lectures, tests & All India Test Series but also includes exam files, subjective tests and NCERT solutions to prepare the students for their boards/school exams.Hence,this is the best platform for NTSE preparation online.</p>
                        </div>
                    </div>
                    <div className={styles.main_neet_rep_right_div}>
                        <img src={ias}></img>
                    </div>
                </div>
            </div>
            {/* <div className={styles.details_neet_rep}>
                <div className={styles.details_neet_rep_inner}>
                    <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro', margin: '0', paddingBottom: '1rem', textAlign: 'left' }}>Details At a Glance</h1>
                    <ul>
                        <li>Amrita EDGE provides a systematic coaching and competitive environment to the aspirants with an outstanding preparation capability and infrastructure facilities. We have a team of highly qualified and competent faculty dedicated towards the student's performance and providing quality education to the students. </li>
                        <li>Amrita EDGE provides knowledge and assistance and thus creates an atmosphere that not only leads students to the path of success but also encourages them to discover their own potential. </li>
                        <li>The course structure has been designed by our faculty with supreme care and is easy to understand. The approach, determination and self-belief are very important factors in crackingany competitive examination. We focus on basics and problem-solving techniques, so our students get well equipped for national and international level examinations. </li>
                        <li>Added to that, individual attention is given to every student at any point in time, irrespective of their merit. Faculty members are on hand to the students to clear their doubts individually and even separately ifrequired. Our regular tests help students to pin their weaknesses and get rid of them, understand their strengths- make the most of them and thus perform remarkably well in the main exams. </li>
                    </ul>
                </div>
            </div> */}
            <Footer />
        </>
    )
}

export default AENTSE