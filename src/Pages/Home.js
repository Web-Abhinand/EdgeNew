import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './Home.module.css'
import Avatar from '../Assets/Amish Santhosh        IAS 1 1.png'
import Avatar2 from '../Assets/Aavani Prasad      IAS 1.png'
import Avatar3 from '../Assets/Slice 1 1.png'
import HowHelp from '../Assets/amrita_college.jpg'
import POP from '../Assets/popup.jpeg'
import chatbot from '../Assets/chat-typing.svg'
import './styles.css';
import { useState } from 'react'
// import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import required modules
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Autoplay, Pagination, Parallax } from 'swiper';
import Aos from 'aos'
import 'aos/dist/aos.css';
import ChatBot from 'react-simple-chatbot';
const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);
        Aos.init({ duration: 1500 });
        handleOpen();
    }, []);
    const [showChatbot, setShowChatbot] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        outline: 'none',
        minWidth: "200px"
    };
    const CloseButton = () => (
        <button onClick={handleCloseChatBox} >
            Close
        </button>
    );

    const ContactUsLink = () => (
        <Link to="/contact">Contact Us</Link>
    );

    const steps = [
        {
            id: '1',
            message: 'Welcome to Amrita Edge! \n',
            message:" What a wonderful day it is! Hope you're doing well too. May I know your name?",
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4'
        },
        {
            id: '4',
            message: ' Which of the following courses that we offer are you particularly interested in?',
            trigger: '5',
        },
        {
            id: '5',
            options: [
                { value: 1, label: '•	NEET Repeater Program.', trigger: '6' },
                { value: 2, label: '•	Science Foundation Program. ', trigger: '6' },
                { value: 3, label: '•	NEET / JEE coaching.', trigger: '6' },
                { value: 4, label: '•	Math’s Tuition. ', trigger: '6' },
                { value: 5, label: '•	Skill Development Programs', trigger: '6' }
            ],
        },
        {
            id: '6',
            message: 'excellent choice! \n',
            trigger: '7',
        },
        {
            id: '7',
            message: 'Please drop in your contact number / Mail id, in our contact us page, so that we can get back to you as soon as possible. \n',
            trigger: 'contactLink',
        },
        {
            id: 'contactLink',
            component: <ContactUsLink />,
            asMessage: false,
            replace: true,
          },
        {
            id: 'close',
            component: <CloseButton />,
            asMessage: false,
            end: true,
        }
    ]
    function handleChatbot() {
        setShowChatbot(!showChatbot);
    }
    function handleCloseChatBox() {
        setShowChatbot(false);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={POP} alt="popupprice" className={styles.popup}  />
                </Box>
            </Modal>
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
                        <button variant="contained" className={styles.heroButton2} data-aos="fade-up"><Link to='/contact'>CONNECT US</Link></button>
                    </div>
                </div>
            </div>
            <div className={styles.how_Amrita_edge_helps_you}>
                <div className={styles.how_Amrita_edge_helps_you_inner_div}>
                    <div className={styles.how_Amrita_edge_helps_you_left_div} style={{ paddingBottom: '1rem',opacity:'0.8'}}>
                        <h1 className='mb-2 py-1 text-5xl font-medium leading-tight text-primary' style={{ color: '#C20B4D', fontFamily: 'Montserrat',opacity:'1'}} data-aos="fade-up">Amrita Edge</h1>
                        <p data-aos="fade-up">&emsp;Amrita Edge is an Initiative of Amrita VishwaVidyapeetham which focuses on an all-rounded individualised learning trajectory to enhance and diversify students' career growth pathways while integrating Amrita's philosophy of 'Education for Life and Education for Living'.</p>
                        <p data-aos="fade-up">
                            &emsp;Our skill development and outreach programs to support school, college students are offered jointly by reputed national and international faculty and eminent bureaucrats, which will help students to equip and expose them to address real-life applications.
                        </p>
                        <p data-aos="fade-up">
                            &emsp;Innovative and award-winning pedagogic practices provide experiential learning allowing students anytime access and flexibility with personalised mentorship and interactivity.
                        </p>
                    </div>
                    <div className={styles.how_Amrita_edge_helps_you_right_div} data-aos="fade-up">
                        <div className={styles.how_img_div} data-aos="fade-up">
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
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our learner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                    </div>
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Amish Santhosh</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem', textAlign: 'center' }}>Foundation 2021-22 batch</p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7', textAlign: 'center' }}>
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
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our learner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar2} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                    </div>
                                    <div>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Aavani Prasad</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem', textAlign: 'center' }}>Wisdom 360, 2022-23
                                        </p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7', textAlign: 'center' }}>
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
                                        <h2 style={{ fontFamily: 'Montserrat' }}>What do our learner's have to say</h2>
                                    </div>
                                    <div className={styles.slide_image_div}>
                                        <img src={Avatar3} style={{ height: "100px", width: '100px', padding: '1rem' }} alt='avatar'></img>
                                        <h2 style={{ fontFamily: 'Montserrat' }}>Arundhathi Krishna V R</h2>
                                        <p style={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: '400', marginBottom: '1rem', textAlign: 'center' }}>SF9 A V, Koyilandy
                                        </p>
                                    </div>
                                </div>
                                <div className="text" data-swiper-parallax="-100">
                                    <p style={{ fontFamily: 'Montserrat', opacity: '0.7', textAlign: 'center' }}>
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
            <div className={styles.chatbot}>
                {showChatbot ? (
                    <ChatBot steps={steps} />
                ) : (
                    <div className={styles.chatbot_icon} >
                        <button onClick={handleChatbot} style={{ width: '50px', height: '50px' }}>
                            <img src={chatbot}></img>
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Home