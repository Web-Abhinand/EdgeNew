import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './Home.module.css'
import neet_crash from '../Assets/01.jpg'
import int_ment from '../Assets/02.jpg'
import sci_found from '../Assets/04.jpg'
import test_prepr from '../Assets/07.jpg'
import neet2023 from '../Assets/05.jpg' 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.heroSection}>
                <div className={styles.heroSectionSvg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path fill="#fff" fill-opacity="1" d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>
                <div className={styles.heroText} >
                    <h1 className='m-0 p-0 text-6xl font-medium leading-tight text-primary' style={{ opacity: '' }}>CONNECTING POSSIBILITIES</h1>
                    {/* tailwind class for paragraph hero section*/}
                    <p style={{ fontSize: '1.1rem', width: '80%', opacity: '0.8' }} className='mt-4 mb-6'>To live a life helping others is the most humane duty possible. And to become a doctor, with a mind that stops at nothing to save the life of a fellow soul is the most blessed of all professions.</p>
                    <div style={{ textAlign: 'left', marginTop: '1em' }}>
                        <button variant="contained" className={styles.heroButton1}>Learn More</button>
                        <button variant="contained" className={styles.heroButton2}>Register</button>
                    </div>
                </div>
            </div>
            <section className={styles.home_card_section}>
                <h1 className='mb-10 py-2 text-4xl font-medium leading-tight text-primary' style={{color:'#BC631C',fontFamily:'Source Sans Pro'}}>Our Programs</h1>
                <div className={styles.home_card_section_flex}>
                    <div>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '350px'}}
                                    image={neet_crash}
                                    alt="green iguana"
                                />
                                <CardContent>
                                        <p className='mb-2 font-semibold text-xl' style={{color:'#BC631C'}}>
                                            NEET 2021 CRASH PROGRAM
                                        </p>
                                        <p style={{textAlign:'justify',fontFamily:'Montserrat',fontSize:'15px'}}>
                                        The NEET 2021 Crash Program set up by Amrita will provide the students with proper classes by experienced faculty, regular monitoring of the student's performance and specialized study materials. With the 31-days Crash Program, Amrita will help equip the students with the proper guidance to appear for the 2021 NEET.
                                        </p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:'#BC631C'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '350px'}}
                                    image={int_ment}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <p className='mb-2 font-semibold text-xl' style={{color:'#BC631C'}}>
                                        INTEGRATED MENTORS
                                    </p>
                                    <p style={{textAlign:'justify',fontFamily:'Montserrat',fontSize:'15px'}}>
                                    The main focus of this integrated program - (JEE MAINS+KEAM+NEET) is to develop solid foundation of concepts & fundamentals, and to sharpen analytical thinking, reasoning and problem-solving skills of a student, which are essential ingredients for success in competitive examinations
                                    </p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:'#BC631C'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '350px'}}
                                    image={sci_found}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <p className='mb-2 font-semibold text-xl' style={{color:'#BC631C'}}>
                                        SCIENCE FOUNDATION PROGRAM
                                    </p>
                                    <p style={{textAlign:'justify',fontFamily:'Montserrat',fontSize:'15px'}}>
                                    Physics, Chemistry, Biology, and Mathematics, the fundamental subjects required for any student who wishes to pursue their career in the field of science. Be it medicine, engineering, or any field related to science, these subjects are the four pillars that hold the whole structure of scientific study.
                                    </p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:'#BC631C'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '350px'}}
                                    image={test_prepr}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <p className='mb-2 font-semibold text-xl' style={{color:'#BC631C'}}>
                                        TEST PREPARATORY DIVISION
                                    </p>
                                    <p style={{textAlign:'justify',fontFamily:'Montserrat',fontSize:'15px'}}>
                                    Our Test Preparatory Division will not only help a child perform better in their board examinations by way of better understanding of concepts, but will also help them develop the acumen which will give them a distinctive edge over the rest of their peers. 
                                    </p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:'#BC631C'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '350px'}}
                                    image={neet2023}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <p className='mb-2 font-semibold text-xl' style={{color:'#BC631C'}}>
                                        NEET 2023
                                    </p>
                                    <p style={{textAlign:'justify',fontFamily:'Montserrat',fontSize:'15px'}}>
                                        To live a life helping others is the most humane duty possible. And to become a doctor, with a mind that stops at nothing to save the life of a fellow soul is the most blessed of all professions. To live a life performing perpetual random acts of kindness, one must devote themselves to the dedicated discipline of the medical profession
                                    </p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" style={{color:'#BC631C'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home