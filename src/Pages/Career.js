import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Pages/Career.modules.css'
import career from '../Assets/career.gif'


import { useEffect  } from 'react'
const Career = () => {

  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbxQn8H26EEFi-Fdh94-V9nn6zzTxFfihyJTQsHpzq_smIutYhTEfmdEXCgrbm0aKP9g/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a) //See response
        }).catch(e => console.log(e)) // Or Error in console
    }
    setIsFileUploaded(true);
  }





    const [show, setShow] = useState(false);
    const [isApplyClicked, setIsApplyClicked] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const[showApply,setShowApply]=useState(true);
        const handleApplyClick=()=> {
      setIsApplyClicked(true);
      setShowApply(false);
    }

    
    const handleClick = () => {
      setShow(true);
      setShowApply(false);
      setIsApplyClicked(false);
      
      
    }
    const handleClick2 = () => {
      setShow(false);
      setShowApply(true);
      
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
                        <p style={{ marginTop :"2vh"}}>
                        Amrita Edge is an initiative of Amrita Vishwa Vidyapeetham to support and facilitate students with skill development programs.
                         Amrita Edge offers active outreach programs to support school students to identify and nurture their interests and skills.
                          We are currently looking for a friendly and competent teacher to join our team.
                           If you are a compassionate and self-motivated individual with a specific interest in education, we urge you to apply!.</p>
                           <p className='v__subhead_s' style={{color:'#C40B4D'}}>Faculties Recruited For:</p>
                            <ul className='v__ul'>
                                <li>Mathematics</li>
                                <li>Physics</li>
                                <li>Chemistry</li>
                                <li>Biology</li>
                            </ul>
{
                              show ? 
                           
                           <>
                           <div className='viewmore_para' style={{ textAlign:'left'}} >
                            <p className='v__head'>Job Description</p>
                            
                            <p className='v__subhead'> Job-Description</p>
                            <ul className='v__ul' >
                              <li>Responsible for supervising students , developing lession plans,
                                preparing lesson material’s and coaching students for competitive exams .</li>
                              <li>Work with students and be devoted to building a nurturing and safe learning environment .</li>
                              <li> Researching learning strategies .</li>
                              <li>Maintain a tidy and orderly classroom.</li>
                              <li>Observe and understand students behaviour and psyche and report suspicious of neglect , abuse etc.</li>
                              <li>Assess and record students progress and provide grades and feedback.</li>
                              <li>Provide individualised instructions to each students by promoting interactive learning .</li>
                            </ul>

                            <p className='v__subhead'> Job-Responsibilities</p>
                            <ul className='v__ul' >
                                <li>Handle entrance oriented classes from grade 7 to grade 1</li>
                                <li>Entrance oriented Study material development</li>
                                <li>Work with the senior teacher to monitor the class schedule.</li>
                                <li>Assist teachers with lesson preparation by getting materials ready and setting up equipment.</li>
                                <li>Revise lesson material with student.</li>
                                <li>Collaborate with senior teachers to recognize issues students are facing and recommend solutions.</li>
                                <li>Document student progress and communicate with parents to keep them informed.</li>
                                <li>Help senior teachers to create lesson plans.</li>
                                <li>Attend all training classes, parent conferences, and faculty meetings.</li>
                                
                                </ul>
                                <p className='v__subhead'>Skill Required</p>
                                <ul className='v__ul'>
                                <li>M.Sc. degree</li>
                                <li>0 to 2 years’ experience as a teacher or similar role.</li>
                                <li>Basic computer knowledge (MS office)</li>
                                <li>Solid understanding of classroom activities and teaching best practices.</li>
                                <li>Must have a compassionate and positive attitude.</li>
                                <li>Excellent written and verbal communication skills.</li>
                                <li>Outstanding interpersonal and presentation abilities.</li>
                                </ul>

                               <br></br><p style={{ textAlign:'center'}}  >Please Contact 9747030712 for any clarification.</p>
                               
                              
                               {/* <button variant="contained" className='view_button' onClick={handleApplyClick}>Apply</button>
                               {isApplyClicked && (
        <div>
          <input
            type="file"
            accept="application/pdf"
            id="customFile"
            onChange={(e) => guardarArchivo(e)}
          />
          {isFileUploaded && <span>&#10004; File uploaded</span>}
        </div>
      )} */}
                                
                                 
                                <div style={{ textAlign: 'center', marginTop: '1em' }}>

                        <button variant="contained" className='view_button1' onClick={handleClick2}>Show less</button>
                        
                    </div>
                                </div>
                           </>

: null}
<div className='view_apply_btn' >
<div style={{ textAlign: 'left', marginTop: '1em' }}>
                    {show ? null :   <button variant="contained" className='view_button' onClick={handleClick}>View More</button>}
                  </div>
                 <div className='apply_'> {showApply ?     <button variant="contained" className='view_button2' onClick={handleApplyClick}>Apply</button>: null}
                            {isApplyClicked && (
                              
        <div className='choose' >
         
         <label >Upload your Resume</label>
         <input
            type="file"
            accept="application/pdf"
            id="customFile" 
            onChange={(e) => guardarArchivo(e)}
          />
          
          {isFileUploaded && <span id='tick'>&#10004; File uploaded</span>}
        </div>
      )}
      </div>
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