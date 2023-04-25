import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './Home.module.css'
import Avatar from '../Assets/avatar.svg'
import Avatar2 from '../Assets/avatar2.svg'
import Avatar3 from '../Assets/avatar3.svg'
import Avatar4 from '../Assets/avatar4.svg'
import HowHelp from '../Assets/How can we help you.jpg'

import './styles.css';

// import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from 'react'


// import required modules
import { Autoplay, Pagination, Parallax } from 'swiper';



const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    return (
        <>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroSectionSvg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#fff" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                <div className={styles.heroText} >
                    <h1 className='m-0 p-0 text-6xl font-medium leading-tight text-primary' style={{ opacity: '' }}>Connecting Possibilites</h1>
                    {/* tailwind class for paragraph hero section*/}
                    <p style={{ fontSize: '1.1rem', width: '80%', opacity: '0.8' }} className='mt-4 mb-6'>To live a life helping others is the most humane duty possible. And to become a doctor, with a mind that stops at nothing to save the life of a fellow soul is the most blessed of all professions.</p>
                    <div style={{ textAlign: 'left', marginTop: '1em' }}>
                        <button variant="contained" className={styles.heroButton1}>Learn More</button>
                        <button variant="contained" className={styles.heroButton2}>Register</button>
                    </div>
                </div>
            </div>
            <div className={styles.how_Amrita_edge_helps_you}>
                <div className={styles.how_Amrita_edge_helps_you_inner_div}>
                    <div className={styles.how_Amrita_edge_helps_you_left_div}style={{paddingBottom:'1rem'}}>
                        <h1 className='mb-5 py-2 text-5xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro'}}>Amrita Edge</h1>
                        <p>&emsp;Amrita Edge is an Initiative of Amrita VishwaVidyapeetham which focuses on an all-rounded individualised learning trajectory to enhance and diversify students' career growth pathways while integrating Amrita's philosophy of 'Education for Life and Education for Living'.</p>
                        <p>
                        &emsp;Our skill development and outreach programs to support school, college students are offered jointly by reputed national and international faculty and eminent bureaucrats, which will help students to equip and expose them to address real-life applications.
                        </p>
                        <p>
                        &emsp;Innovative and award-winning pedagogic practices provide experiential learning allowing students anytime access and flexibility with personalised mentorship and interactivity.
                        </p>
                    </div>
                    <div className={styles.how_Amrita_edge_helps_you_right_div}>
                        <div className={styles.how_img_div}>
                            <img src={HowHelp} alt="how amrita edge helps you" className={styles.how_img} style={{height:'100%'}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.home_testimonials}>
                <div className={styles.section_testimonials_heading}>
                    <h1 className='pt-2 text-5xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro',margin:'0',paddingBottom:'1rem'}}>Testimonials</h1>
                </div>
                <div className={styles.home_testimonials_innerDiv}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        speed={600}
                        parallax={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}


                        modules={[Autoplay, Parallax, Pagination]}
                        className="mySwiper"
                    >
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{

                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <SwiperSlide>
                            <div className={styles.Swiper_Slide}>
                                <div className="title" data-swiper-parallax="-300">
                                    <div>
                                        <h2 style={{fontFamily:'Source Sans Pro'}}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar} style={{ height: "100px", width: '100px',padding:'1rem'}} alt='avatar'></img>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{fontFamily:'Source Sans Pro',opacity:'0.7',textAlign:'justify'}}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.Swiper_Slide}>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    <div>
                                        <h2 style={{fontFamily:'Source Sans Pro'}}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar2} style={{ height: "100px", width: '100px',padding:'1rem'}} alt='avatar'></img>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{fontFamily:'Source Sans Pro',opacity:'0.7'}}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.Swiper_Slide}>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    <div>
                                        <h2 style={{fontFamily:'Source Sans Pro'}}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar3} style={{ height: "100px", width: '100px',padding:'1rem'}} alt='avatar'></img>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{fontFamily:'Source Sans Pro',opacity:'0.7'}}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home