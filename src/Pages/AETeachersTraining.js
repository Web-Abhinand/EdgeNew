import React from 'react'

import Header from '../Components/Header';
import styles from './intMent.module.css'
import teacher_training from '../Assets/training-courses-banner.jpg'
import Footer from '../Components/Footer';
import { useEffect } from 'react';
const AETeachersTraining = () => {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Teachers Training Program</h1>
                        <p>&emsp;Amrita Edge Teachers Training Programis a capacity-building programme for "Improving Quality of School Education through Integrated Teacher Training". It aims to build competencies among all the teachers and school principals at the elementary stage. The basic objective of this massive training programme is to motivate and equip teachers to encourage and foster critical thinking in students. </p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={teacher_training}></img>
                </div>
            </div>
        </div>
        <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li>Focus on competency and higher-order thinking skills-based teaching learning</li>
                    <li>Training of all heads and teachers as first-level counsellors</li>
                    <li>Promoting experiential and joyful learning</li>
                    <li>Awareness of centrally sponsored schemes/initiatives</li>
                    <li>Online monitoring and support system</li>
                    <li>Convergence of multi-departmental efforts</li>
                    <li>Activity based training modules.</li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default AETeachersTraining