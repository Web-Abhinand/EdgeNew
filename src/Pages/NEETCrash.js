import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import neet2023 from '../Assets/05.jpg'
import { useEffect } from 'react'
const NEETCrash = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <>
        <Header />
        <div className={styles.main_neet_rep}>
            <div className={styles.main_neet_rep_flex}>
                <div className={styles.main_neet_rep_left_div} style={{paddingTop:'2rem'}}>
                    <div className={styles.main_neet_rep_left_div_text}>
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>NEET Crash Program</h1>
                        <p>&emsp;Amrita EDGE crash course enables you to cover the main concepts of the entire NEET syllabus quickly and helps you attempt the exam with more confidence. The crash course is extremely helpful for the students who feel revision is compulsory. It helps you to revise all the important topics in a short span of time. During the crash course, the students will be provided with summarised versions of the course syllabus, study materials, key concepts and marathon chapters covering the entire syllabus. This course also give students tips, tricks  and excellent short cuts to solve questions quickly.</p>
                        <p style={{}}>&emsp;To sum it all up, the crash course programme offered by Amrita EDGE includes revision of all the topics of NEET syllabus, daily/weekly mock tests, review of the entire syllabus and doubt clearing sessions. On a whole, the crash course helps you learn all the topics included in the syllabus and helps you score good marks in NEET.</p>
                        <p style={{paddingBottom:"1rem"}}>&emsp;The course will be streamed live on the Zoom platform. Recorded sessions shall be provided to students in case one cannot attend a live session</p>

                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={neet2023}></img>
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

export default NEETCrash