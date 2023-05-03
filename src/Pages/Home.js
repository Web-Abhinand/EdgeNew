import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './Home.module.css'
import Avatar from '../Assets/Amish Santhosh        IAS 1 1.png'
import Avatar2 from '../Assets/Aavani Prasad      IAS 1.png'
import Avatar3 from '../Assets/Slice 1 1.png'
import HowHelp from '../Assets/amrita_college.jpg'

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
    return (
        <>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroSectionSvg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#fff" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                <div className={styles.heroText} data-aos="fade-up">
                    <h1 className='m-0 p-0 text-6xl font-medium leading-tight text-primary' style={{ opacity: '' }} data-aos="fade-up">Connecting Possibilites</h1>
                    {/* tailwind class for paragraph hero section*/}
                    <p style={{ fontSize: '1.1rem', width: '80%', opacity: '0.8' }} className='mt-4 mb-6' data-aos="fade-up"></p>
                    <div style={{ textAlign: 'left', marginTop: '1em' }}>
                        <button variant="contained" className={styles.heroButton1}>Learn More</button>
                        <button variant="contained" className={styles.heroButton2}>Register</button>
                    </div>
                </div>
            </div>
            <div className={styles.how_Amrita_edge_helps_you}>
                <div className={styles.how_Amrita_edge_helps_you_inner_div}>
                    <div className={styles.how_Amrita_edge_helps_you_left_div} style={{ paddingBottom: '1rem' }}>
                        <h1 className='mb-2 py-1 text-5xl font-medium leading-tight text-primary' style={{ color: '#C20B4D', fontFamily: 'Montserrat' }} data-aos="fade-up">Amrita Edge</h1>
                        <p>&emsp;Amrita Edge is an Initiative of Amrita VishwaVidyapeetham which focuses on an all-rounded individualised learning trajectory to enhance and diversify students' career growth pathways while integrating Amrita's philosophy of 'Education for Life and Education for Living'.</p>
                        <p>
                            &emsp;Our skill development and outreach programs to support school, college students are offered jointly by reputed national and international faculty and eminent bureaucrats, which will help students to equip and expose them to address real-life applications.
                        </p>
                        <p>
                            &emsp;Innovative and award-winning pedagogic practices provide experiential learning allowing students anytime access and flexibility with personalised mentorship and interactivity.
                        </p>
                    </div>
                    <div className={styles.how_Amrita_edge_helps_you_right_div}>
                        <div className={styles.how_img_div} data-aos="fade-left">
                            <img src={HowHelp} alt="how amrita edge helps you" className={styles.how_img} ></img>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.home_testimonials}>
                <div className={styles.section_testimonials_heading}>
                    <h1 className='pt-2 text-5xl font-medium leading-tight text-primary' style={{ color: '#C20B4D', margin: '0', paddingBottom: '1rem', fontFamily: 'Montserrat' }} data-aos="fade-up">Testimonials</h1>
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
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                    </div>
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Amish Santhosh</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem' }}>Foundation 2021-22 batch</p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7' }}>
                                        "Hi,
                                        I am Amish Santhosh son of Santhosh P.K and Resitha Santhosh I am currently in Qatar along with my
                                        parents. I am studying in MES Indian school in 9th std
                                        This Course is very informative and very helpful for an aspirant like me. The content is well organized
                                        and the Teachers are very well interactive. I thoroughly enjoyed this course and I am sure this course
                                        will help me in the Future to join the Indian Civil Service so I can serve my country.
                                        Thank you."
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.Swiper_Slide}>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar2} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                    </div>
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Aavani Prasad</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem' }}>Wisdom 360, 2022-23
                                        </p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7' }}>
                                        "Myself Aavani Prasad from Amrita Vidyalayam Perumbavoor.
                                        I am studying in Xth std. I have been attending this course since 2021.My aim in life is to become an IAS
                                        officer. That's why I joined in this course. I think it is the best platform to achieve my goal. I really
                                        enjoyed the online course. I am eager to watch each session. It is very helpful, informative and
                                        interesting. I am expecting so much from this course. The faculties are very friendly in interacting with
                                        us. Thank you so much for this wonderful and informative course. I am very thankful that I could be a
                                        part of this. "
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.Swiper_Slide}>
                                <div className="subtitle" data-swiper-parallax="-200">
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our leaner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar3} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Arundhathi Krishna V R</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem' }}>SF9 A V, Koyilandy
                                        </p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7' }}>
                                        "Being a student who has been through this journey from the very start, I can gladly tell that the
                                        initiative has aided in both my academic and overall performance. Faculties were always pleased to
                                        quench my thirst for deeper and vast understanding. Taking concepts beforehand, in a clear and
                                        comprehensible manner had always come handy. The initiative has always aided me to understand the
                                        concepts in the best possible way."
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