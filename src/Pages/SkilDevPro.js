import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import Bullet from '../Assets/bullet.png'
import skill_develop from '../Assets/skill_devlop.jpg'
import { useEffect } from 'react'
function SkillDevPro() {
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
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Amrita Edge Skill Development Program (AESDP)</h1>
                        <p>&emsp;Skill Development is the process of identification of the skills gap in youth and providing skilling training & employment benefits to them. Skill development programs aim to acknowledge the ability of the youth and extend their support by serving them with the proper guidance, infrastructure, opportunities, and encouragement that help them achieve their ambitions. Education and skills are essential for everyone, and they both walk hand in hand in everyone's career journey. They are the roots behind the economic growth and community development of a country. Therefore, both central & state governments are continuously making efforts to provide skill development to the youth with their skilling partners around the country.</p>
                        <p style={{paddingBottom:'1rem'}}>&emsp;The benefits of Skill Development include improved performance, improved accuracy & quality, improved communication, compliance with rules & regulations, improved recruitment & career opportunities, and development of good customer relations.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={skill_develop}></img>
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
export default SkillDevPro