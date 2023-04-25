import React from 'react'
import Header from '../Components/Header'
import styles from './OurPrograms.module.css'
import { Button, CardActionArea, CardActions } from '@mui/material';
import neet_crash from '../Assets/01.jpg'
import int_ment from '../Assets/02.jpg'
import sci_found from '../Assets/04.jpg'
import test_prepr from '../Assets/07.jpg'
import neet2023 from '../Assets/05.jpg'
import pre_nurture from '../Assets/pre-nurture.jpg'
import sci_car_found from '../Assets/science-and-carrer-found.jpg'
import person_wavin_flag from '../Assets/hands-waving-flags-india.jpg'
import ias from '../Assets/1.webp'
import skill_develop from '../Assets/skill_devlop.jpg'
import commerce_edge from '../Assets/Sandy_Tsp-04_Single-06.jpg'
import ntse_logo from '../Assets/NTSE-LOGO.jpg'
import scienc_bridge from '../Assets/science_bridge.jpg'
import entrance_coach from '../Assets/entrance_coach.jpg'
import nda from '../Assets/nda.jpg'
import jee from '../Assets/undraw_product_iteration_kjok.svg'
import pcm_exam from '../Assets/undraw_exams_re_4ios.svg'
import triguna from '../Assets/undraw_percentages_re_a1ao.svg'
import teacher_training from '../Assets/training-courses-banner.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
const OurPrograms = () => {
  return (
    <>
      <Header />
      <section className={styles.home_card_section}>
        <h1 className='mb-10 py-2 text-6xl font-medium leading-tight text-primary' style={{ color: '#BC631C', fontFamily: 'Source Sans Pro' ,marginTop:'3rem'}}>Our Programs</h1>
        <div className={styles.home_card_section_flex}>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={pre_nurture}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                  Amrita Edge Pre-Nurture Foundation Program
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita Edge Pre-Nurture course is a holistic program for Grades 6 & 7 that covers the science and math subjects taking various competitive examination perspectives.  Students have an opportunity to study in an environment beyond the confined four walls of a classroom, with features that create an interactive learning experience. As the focus of the course is on various competitive and talent search examinations, the base of the curriculum is CBSE. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/pre-nuture'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={sci_car_found}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                      Amrita Edge Science & Career Foundation Program
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Excellence in Academics is the demonstrated ability to perform, achieve, and/or excel in scholastic activities. Academic excellence has been identified with achieving high grades and superior performance. But academic excellence is more than just getting good grades. It is the maximum development of your intellectual capacities and skills in service to humanity.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/sci-car-found'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={person_wavin_flag}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Civil Service Foundation Programs for School Students
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  The objective of this course is to give the right direction of learning along with a good level of conceptual clarity about UPSC Civil Service Exams, Syllabus and Preparations. This program will not only help children to understand better what is taught in regular school classes but will also help them to develop the acumen which will give them a distinctive edge over the rest of their peers. There will be two levels for the civil service foundation program.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/civil-ser'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={ias}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Wisdom 360 - Civil Service Coaching- Level 2 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                    Through a thoughtfully planned and holistic approach, Wisdom360 aims to sustain the momentum generated by the IAS foundation course and continues the transformation journey, the students have embarked on. Covering a broad spectrum of subjects and contemporary topics, the programme seeks to widen the knowledge base of the students, simultaneously enhancing their aptitude and skills, so that they become well-rounded individuals adept at facing any challenge in life.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/wis-360'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={skill_develop}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Skill Development Program (AESDP) 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Skill Development is the process of identification of the skills gap in youth and providing skilling training & employment benefits to them. Skill development programs aim to acknowledge the ability of the youth and extend their support by serving them with the proper guidance, infrastructure, opportunities, and encouragement that help them achieve their ambitions. Education and skills are essential for everyone, and they both walk hand in hand in everyone's career journey. They are the roots behind the economic growth and community development of a country. Therefore, both central & state governments are continuously making efforts to provide skill development to the youth with their skilling partners around the country.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/skill-develop'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={commerce_edge}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Commerce Foundation Program 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita Edge commerce foundation is intended to train those students who are preparingfor 11th class and 12th commerce course, Entrance exam preparation like  CA, CS, CWA or any academic courses like B.com (P), B.com (Hons.) and BBA. In the competitive environment, a strong foundation of accounting knowledge along with analytical skills and intelligence quotient (IQ) is required. Students are guided by the best professional experts in the field of commerce.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/neet-rep'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={ias}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge NTSE Coaching Program 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita Edge NTSE coaching program has been developed with the fact keeping in mind that NTSE is not just a competition, but it's an honour&pride to be a part of our nation's asset as an individual. We have introduced a charismatic learning module, developed to ensure your rank in NTSE. The module is specially designed keeping your selection in mind, not the syllabus only.  NTSE coaching is where you will get the complete study materialsyou require for the National Talent Search Examination. It not only comprises online video lectures, practice video lectures, tests & All India Test Series but also includes exam files, subjective tests and NCERT solutions to prepare the students for their boards/school exams.Hence,this is the best platform for NTSE preparation online.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/neet-rep'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={test_prepr}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Exam Catalyst Program 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Exam Catalyst is our focused, structured, revision-based "Class 12 CBSE Board Booster Crash Programme”. The programme is mentored by the experienced and expert faculties of Amrita EDGE to foster the board exam preparation and to achieve 100% success by strengthening the concepts as well as getting exposed to different types of questions as per the new CBSE pattern without having to deviate too much from their own preparatio
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
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
                  style={{ height: '350px' }}
                  image={scienc_bridge}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Science Bridge Course Program
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  The Amrita EDGE Bridge Course 2023 is a unique program designed exclusively for the students who have finished their class 10 board exam studying at various Amrita Vidyalayams across Bharath to help them develop a solid basis and upskill in physics, chemistry, biology, and mathematics subjects. The course will help students with the fundamental academic information and abilities they will need to excel in their 11th and 12th grade subjects in the upcoming academic year 2023-24 by enhancing their talents and preparing them for the competitive phase ahead.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
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
                  style={{ height: '350px' }}
                  image={int_ment}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                  	Amrita Integrated Mentors (AIM) Program
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  We are extremely happy to announce our new venture of offline Integrated entrance coaching at Amrita Vidyalayams This program provides the opportunity for students entering Class 11 across all Amrita Vidyalayam in Kerala to pursue their higher secondary education in the science stream under the CBSE curriculum at Amrita VidyalayamEdappally, Ernakulam along with entrance coaching by Amrita EDGE for competitive examinations including JEE Main, JEE Advanced, NEET and other science-based competitive examinations
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/int-ment'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={entrance_coach}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Entrance Coaching 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                    Amrita EDGE Entrance-only program prepares students to face entrance examinations successfully by providing a healthy learning environment grounded well in the principles of value-based career education, imparting knowledge, infusing positivity, and boosting confidence. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/int-ment'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={nda}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    NDA Coaching  
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  To motivate and prepare the enterprising and aspiring youth of Kerala to join the Armed Forces as Officers, by identifying them at a young age, grooming and nourishing their Officer Like Qualities ( OLQs), being the maiden venture in this direction in Kerala, this program tends to bridge the gap between the presentstandard of the aspirant youth of Kerala and the expected high selection standards of young military leaders in the Armed Forces.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/int-ment'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={neet_crash}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge NEET Repeaters Program  
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  If you are not satisfied with your performance in NEET 2023, here is the perfect solution. The Year-long AMRITA EDGE NEET Repeaters course aims at equipping students with all the necessary skills to excel at NEET - UG 2024. The course is designed specifically forstudents who were unable to secure their dream seatin NEET 2023 or earlier. The course will consist of detailed lectures on all 97 chapters of 1st-year and 2nd-year Physics, Chemistry, and Biology (Botany and Zoology); with regular and comprehensive assessment using NEET Revision mock tests. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/neet-rep'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={jee}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Extended Crash (JEE & NEET) Program 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita Edge is happy to announce an extended crash program for current plus two students of Amrita Vidyalayas. This course is divided into 2 phases where in phase one, all topics under plus two syllabus will be covered, and in phase two, all topics under plus one class will be covered. This course will be highly beneficial for students who are attempting JEE/KEAM or NEET in 2023. Classes will be held on Sundays, Second Saturdays, and public holidays. Students have the advantage of choosing between Maths and Biology, whereas Physics and Chemistry will be common. Each subject will be hosted for 90 minutes, from 9am to 3pm, in which Multiple Choice Questions targeting NEET, JEE/KEAM are discussed intensively from the customised study material provided to students. During the five months of the course, students will obtain all the basic concepts which will help them to crack any competitive examination.
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/neet-rep'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={pcm_exam}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    PCM GS - Advanced Civil Service Coaching for Undergraduate Students 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  General Studies - Prelims cum Mains (PCM) Program is offered exclusively for Amrita University students, is designed for those who would like to undertake Civil Service Exam preparation along with their regular studies, allowing them to write the Exam as soon as they graduate. It will also equip students who take up full time job after graduation to pursue their Civil Service dreams. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
                  <Link to='/our-programs/neet-rep'>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{ height: '350px' }}
                  image={neet2023}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    NEET Crash Program
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita EDGE crash course enables you to cover the main concepts of the entire NEET syllabus quickly and helps you attempt the exam with more confidence. The crash course is extremely helpful for the students who feel revision is compulsory. It helps you to revise all the important topics in a short span of time. During the crash course, the students will be provided with summarised versions of the course syllabus, study materials, key concepts and marathon chapters covering the entire syllabus. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
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
                  style={{ height: '350px' }}
                  image={triguna}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Triguna Summer Camp
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Triguna is our skill development and outreach program to support Amrita Vidyalayam students offered jointly by reputed national and international faculty, and eminent bureaucrats, which will help students to equip and expose students to address real-life applications. Innovative and award-winning pedagogic practices provide experiential learning allowing students anytime access and flexibility with personalised mentorship and interactivity. In association with Amrita Vidyalayam Edappally,we are organising a Summer Vacation Camp for our Grade 6th to 9th Students to enhance their skills in STEM Subjects and to lay a foundation and interest in these subjects, which will help them to crack future competitive and Board exams. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
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
                  style={{ height: '350px' }}
                  image={teacher_training}
                  alt="green iguana"
                />
                <CardContent>
                  <p className='mb-2 font-semibold text-xl' style={{ color: '#BC631C' }}>
                    Amrita Edge Teachers Training Program 
                  </p>
                  <p style={{ textAlign: 'justify', fontFamily: 'Montserrat', fontSize: '15px',opacity:'0.9'}}>
                  Amrita Edge Teachers Training Programis a capacity-building programme for "Improving Quality of School Education through Integrated Teacher Training". It aims to build competencies among all the teachers and school principals at the elementary stage. The basic objective of this massive training programme is to motivate and equip teachers to encourage and foster critical thinking in students. 
                  </p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" style={{ color: '#BC631C' }}>
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

export default OurPrograms