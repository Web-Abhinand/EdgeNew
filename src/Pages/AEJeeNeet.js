import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import jee from '../Assets/undraw_product_iteration_kjok.svg'

import { useEffect } from 'react'
const AEJeeNeet = () => {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Extended Crash (JEE & NEET) Program</h1>
                        <p>&emsp;Amrita Edge is happy to announce an extended crash program for current plus two students of Amrita Vidyalayas. This course is divided into 2 phases where in phase one, all topics under plus two syllabus will be covered, and in phase two, all topics under plus one class will be covered. This course will be highly beneficial for students who are attempting JEE/KEAM or NEET in 2023. Classes will be held on Sundays, Second Saturdays, and public holidays. Students have the advantage of choosing between Maths and Biology, whereas Physics and Chemistry will be common. Each subject will be hosted for 90 minutes, from 9am to 3pm, in which Multiple Choice Questions targeting NEET, JEE/KEAM are discussed intensively from the customised study material provided to students. During the five months of the course, students will obtain all the basic concepts which will help them to crack any competitive examination.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={jee}></img>
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
        <Footer />
    </>
  )
}

export default AEJeeNeet