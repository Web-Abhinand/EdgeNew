import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import pre_nurture from '../Assets/pre-nurture.jpg'
import Bullet from '../Assets/bullet.png'
import { useEffect } from 'react'
function PreNuture() {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Pre-Nurture Foundation Program</h1>
                        <p style={{paddingBottom:'2rem'}}>&emsp;Amrita Edge Pre-Nurture course is a holistic program for Grades 6 & 7 that covers the science and math subjects taking various competitive examination perspectives.  Students have an opportunity to study in an environment beyond the confined four walls of a classroom, with features that create an interactive learning experience. As the focus of the course is on various competitive and talent search examinations, the base of the curriculum is CBSE. Students will be taught basic and advanced concepts, problem-solving strategies, time management etc</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={pre_nurture}></img>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </>
  )
}
export default PreNuture