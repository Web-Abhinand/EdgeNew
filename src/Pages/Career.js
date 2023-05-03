import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Pages/Career.modules.css'
import career from '../Assets/career.gif'

import { useEffect  } from 'react'
const Career = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
      setShow(true);
    }
    const handleClick2 = () => {
      setShow(false);
    }

    useEffect(() => {

        window.scroll(0, 0);
      }, []);
      return (
        <>
            <Header />
            <div className='career__heading' style={{ marginTop :"13vh"}} >
                <h1>CAREER</h1>
                </div>
            <div className='career__main'>
                <div className='career__1'>
                    <div className='heading'>
                        <h3>AMRITA EDGE JUNIOR FACULTY RECRUITMENT</h3>
                        <p style={{ marginTop :"2vh"}}>AUM NAMAHA SHIVAYA
Amrita Edge is an initiative of Amrita Vishwa Vidyapeetham to support and facilitate students with skill
development programs. Amrita Edge offers active outreach programs to support school students to
identify and nurture their interests and skills. We are currently looking for a friendly and competent teacher to join our team. If you are a
compassionate and self-motivated individual with a specific interest in education, we urge you to apply!
In this position, you will be responsible for supervising students, developing lesson plans, preparing
lesson material, and coaching students for competitive exams. The successful candidate must enjoy working with children and be devoted to building a nurturing and
safe learning environment. To excel in this role, you must demonstrate excellent written and verbal
communication skills, as well as in-depth knowledge of subject, classroom activities and teaching
methods (offline & online).</p>
{
                              show ? 
                           
                           <>
                           <div class='viewmore_para'>
                            <p>Job Description</p>
                            <p>Subjects:</p>
                            <ul>
                                <li>Mathematics</li>
                                <li>Physics</li>
                                <li>Chemistry</li>
                                <li>Biology</li>
                            </ul>
                            <p>Responsibilities:</p>
                            <ul >
                                <li>Handle entrance oriented classes from grade 7 to grade 1</li>
                                <li>Entrance oriented Study material development</li>
                                <li>Work with the senior teacher to monitor the class schedule</li>
                                <li>Assist teachers with lesson preparation by getting materials ready and </li>
                                <li>Revise lesson material with student</li>
                                <li>Collaborate with senior teachers to recognize issues students are facing and recommend solutions.</li>
                                <li>Document student progress and communicate with parents to keep them informed</li>
                                <li>Help senior teachers to create lesson plans.</li>
                                <li>Attend all training classes, parent conferences, and faculty meeting</li>
                                
                                </ul>
                                <p>Requirements:</p>
                                <ul>
                                <li>M.Sc. degree</li>
                                <li>0 to 2 years’ experience as a teacher or similar ro</li>
                                <li>Basic computer knowledge (MS office)</li>
                                <li>Solid understanding of classroom activities and teaching be</li>
                                <li>Must have a compassionate and positive</li>
                                <li>Excellent written and verbal communication skills</li>
                                <li>Outstanding interpersonal and presentation abilities</li>
                                </ul>
                                <div style={{ textAlign: 'left', marginTop: '1em' }}>
                        <button variant="contained" className='view_button' onClick={handleClick2}>Show less</button>
                        
                    </div>
                                </div>
                           </>

: null}
<div style={{ textAlign: 'left', marginTop: '1em' }}>
                        <button variant="contained" className='view_button' onClick={handleClick}>View More</button>
                        
                    </div>
                    </div>
                    </div>
                    <div className='career__2'>
                    <div className='gif'>
            <img src={career} alt='gif' />
          </div>
                        </div>
                </div>
            <Footer />   
       </>
      )
}    
export default Career