import { ClassNames } from '@emotion/react'
import React from 'react'
import NeetRepImg from '../Assets/02.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styles from './intMent.module.css'
import person_wavin_flag from '../Assets/hands-waving-flags-india.jpg'
import Bullet from '../Assets/bullet.png'
function CivilServFound() {
  return (
    <>
        <Header />
        <div className={styles.main_neet_rep}>
            <div className={styles.main_neet_rep_flex}>
                <div className={styles.main_neet_rep_left_div}>
                    <div className={styles.main_neet_rep_left_div_text}>
                        <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>Civil Service Foundation Programs for School Students</h1>
                        <p>&emsp;The objective of this course is to give the right direction of learning along with a good level of conceptual clarity about UPSC Civil Service Exams, Syllabus and Preparations. This program will not only help children to understand better what is taught in regular school classes but will also help them to develop the acumen which will give them a distinctive edge over the rest of their peers. There will be two levels for the civil service foundation program.</p>
                    </div>
                </div>
                <div className={styles.main_neet_rep_right_div}>
                    <img src={person_wavin_flag}></img>
                </div>
            </div>
        </div>
        <div className={styles.details_neet_rep}>
            <div className={styles.details_neet_rep_inner}>
                <h1 className='pt-2 text-4xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem',textAlign:'left'}}>The course is designed to:</h1>
                <ul>
                    <li>Create Passion and improve understanding of Civil Service preparations.</li>
                    <li>Coach the students with the Exam preparation strategies</li>
                    <li>To give a better understanding of all UPSC related subjects.</li>
                    <li>To give a better understanding of all UPSC related subjects.</li>
                    <li>The program helps children prepare for various competitive exams</li>
                    <li>The program also grooms children by providing inputs on Reasoning, Logical thinking, and Communication Skills. The focus will be on encouraging students to apply the concepts learnt to real-life situations. The program will encourage schoolgoers to look beyond textbooks for learning.</li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  )
}
export default CivilServFound