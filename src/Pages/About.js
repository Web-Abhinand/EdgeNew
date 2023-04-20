import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './About.module.css'
import AboutImg from '../Assets/diverse-businesspeople-having-meeting.jpg'
import Amma from '../Assets/Mata-Amritanandamayi.png'
import College from '../Assets/maxresdefault.jpg'
import { useState } from 'react'
const About = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Header></Header>
      <div className={styles.about_main_div}>
        <div className={styles.aboutHeroText} >
          <h1 className='m-0 p-0 text-6xl font-medium leading-tight' style={{color:'#fff'}}>About Us</h1>
          {/* tailwind class for paragraph hero section*/}
          <p style={{ fontSize: '1.1rem', width: '80%', opacity: '0.8' }} className='mt-4 mb-6'>Amrita Edge is an Initiative of Amrita VishwaVidyapeetham which focuses on an all-rounded individualised learning trajectory to enhance and diversify students' career growth pathways while integrating Amrita's philosophy of 'Education for Life and Education for Living'. </p>
          <button variant="contained" className={styles.AboutButton1}>Learn More</button>
        </div>
      </div>
      <section className={styles.aboutOurInspiration}>
        <div className={styles.aboutOurInspirationHeading}>
          <h1 className='text-4xl font-medium' style={{color:'#BC631C',fontFamily:'Source Sans Pro'}}>Our Inspiration</h1>
        </div>
        <div className={styles.aboutOurInspiration_flex}>
          <div className={styles.aboutOurInspiration_flex_left}>
            <img src={Amma}></img>
          </div>
          <div className={styles.aboutOurInspiration_flex_right}>
            <h1 className='text-3xl font-medium' style={{color:'#BC631C',fontFamily:'Source Sans Pro'}}>Sri Mata Amritanandamayi</h1>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; A renowned humanitarian leader and spiritual teacher, Sri Mata Amritanandamayi is the guiding light of Amrita VishwaVidyapeetham. Amma's concept of education, stress on research, and commitment to instilling universal values have come together to shape Amrita VishwaVidyapeetham into an institution where the latest advancements and discoveries combine with compassion and service-mindedness. As Mata Amritanandamayi said in 2010 when the State University of New York honoured her with an honorary Doctorate in Humane Letters: “It is Amma's prayer that we develop the expansive-mindedness to embrace both scientific knowledge and spiritual wisdom. We can no longer afford to see these two streams of knowledge as flowing in opposite directions. In truth, they complement one another. If we merge these streams, we will find that we are able to create a mighty river—a river whose waters can remove suffering and spread life to all of humanity.” <a onClick={() => setShow(!show)} style={{ color: '#E80100' }}>
              {show === true ? '' : 'Learn More'}
              </a>
              </p>
              {show?
              <>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; Aside from serving as the Chancellor of Amrita VishwaVidyapeetham, Mata Amritanandamayi also runs the vast humanitarian mission known as the Mata Amritanandamayi Math, the headquarters of which is home to one of Amrita VishwaVidyapeetham's five campuses. A world-renowned institution, the Mata Amritanandamayi Math has built more than 45,000 homes for the homeless poor throughout India, currently provides scholarships for more than 46,000 impoverished children, and has helped more than one lakh poverty-stricken women form self-help groups, and much more.
              </p>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; Mata Amritanandamayi is also a spiritual guide and teacher to millions throughout the world, giving people, through her teachings and emotional support, the strength to face the &nbsp; 
              <a onClick={() => setShow(!show)} style={{ color: '#E80100' }}>
              {show === true ? 'show less' : ''}
              </a>
              </p>
              </>
              :null}
          </div>
        </div>
      </section>
      <section className={styles.about_Amrita_VishwaVidyapeetham}>
      <div className={styles.aboutOurInspirationHeading}>
        </div>
        <div className={styles.aboutOurInspiration_flex}>
          <div className={styles.aboutOurInspiration_flex_right}>
            <h1 className='text-3xl font-medium' style={{color:'#BC631C',fontFamily:'Source Sans Pro'}}>Amrita VishwaVidyapeetham</h1>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; Amrita VishwaVidyapeetham is a multi-campus, multi-disciplinary research academia that is accredited 'A++' by NAAC and is ranked as one of the best research institutions in India.
              </p>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; Founded by the world-renowned humanitarian, Sri Mata Amritanandamayi Devi, the multi-campus University was established to provide rigorous academic instruction in an ambience rooted in Indian cultural heritage.
              </p>
              <p style={{ fontSize: '1.1rem', width: '100%', opacity: '0.8',textAlign:'justify'}}>
              &emsp; Amrita has established international collaborative initiatives with over 75 world-leading institutions in the U.S., Europe, Australia, and Japan, with extensive faculty and student exchanges and cross-continental research projects.
              </p>
          </div>
          <div className={styles.aboutOurInspiration_flex_left}>
            <img src={College}></img>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About