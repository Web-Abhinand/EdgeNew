import React from 'react'
import styles from './intMent.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import pcm_exam from '../Assets/undraw_exams_re_4ios.svg'
import { useEffect } from 'react'
const PCM = () => {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>PCM GS - Advanced Civil Service Coaching for Undergraduate Students</h1>
                        <p>&emsp;General Studies - Prelims cum Mains (PCM) Program is offered exclusively for Amrita University students, is designed for those who would like to undertake Civil Service Exam preparation along with their regular studies, allowing them to write the Exam as soon as they graduate. It will also equip students who take up full time job after graduation to pursue their Civil Service dreams. </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Motto: Start Early, Crack Early</p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Program Duration: 2 Years</p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Key Program Highlights </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>500 + Hours Comprehensive Coverage of Prelims & Mains Syllabus </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Pre-recorded High Quality Lectures</p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Live Doubt Clarification sessions with Faculty </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>NCERT Test Series</p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Mentorship </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Current Affairs Sessions - Prelims & Mains </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Strategy Sessions </p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Prelims & Mains Practice Sessions</p>
                    <p style={{fontFamily:'Montserrat',textAlign:"left"}}>Prelims & Mains Test Series  </p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={pcm_exam}></img>
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

export default PCM