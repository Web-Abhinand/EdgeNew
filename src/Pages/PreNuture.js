import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import pre_nurture from '../Assets/pre-nurture.jpg'
import Bullet from '../Assets/bullet.png'
function PreNuture() {
  return (
    <>
        <Header />
        <div className={styles.main_neet_rep}>
            <div className={styles.main_neet_rep_flex}>
                <div className={styles.main_neet_rep_left_div}>
                    <div className={styles.main_neet_rep_left_div_text}>
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Pre-Nurture Foundation Program</h1>
                        <p>&emsp;Amrita Edge Pre-Nurture course is a holistic program for Grades 6 & 7 that covers the science and math subjects taking various competitive examination perspectives.  Students have an opportunity to study in an environment beyond the confined four walls of a classroom, with features that create an interactive learning experience. As the focus of the course is on various competitive and talent search examinations, the base of the curriculum is CBSE. Students will be taught basic and advanced concepts, problem-solving strategies, time management etc</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={pre_nurture}></img>
                </div>
            </div>
        </div>
        {/* <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Details At a Glance</h1>
                <ul>
                    <li>Amrita EDGE provides a systematic coaching and competitive environment to the aspirants with an outstanding preparation capability and infrastructure facilities. We have a team of highly qualified and competent faculty dedicated towards the student's performance and providing quality education to the students. </li>
                    <li>Amrita EDGE provides knowledge and assistance and thus creates an atmosphere that not only leads students to the path of success but also encourages them to discover their own potential. </li>
                    <li>The course structure has been designed by our faculty with supreme care and is easy to understand. The approach, determination and self-belief are very important factors in crackingany competitive examination. We focus on basics and problem-solving techniques, so our students get well equipped for national and international level examinations. </li>
                    <li>Added to that, individual attention is given to every student at any point in time, irrespective of their merit. Faculty members are on hand to the students to clear their doubts individually and even separately ifrequired. Our regular tests help students to pin their weaknesses and get rid of them, understand their strengths- make the most of them and thus perform remarkably well in the main exams. </li>
                </ul>
            </div>
        </div> */}
        <div style={{position:'fixed',bottom:'0',left:'0'}}>
            <Footer />
        </div>
    </>
  )
}
export default PreNuture