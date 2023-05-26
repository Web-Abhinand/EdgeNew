import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Pages/contact.modules.css'
import call from '../Assets/contact1.svg'
import { useEffect  } from 'react'

import axios from 'axios'
const Contact = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[going,setGoing]=useState('');
  const[grade,setGrade]=useState('');
  const[stream,setStream]=useState('');
  const[Institution,setInstitution]=useState('');
  const[native_state,setNative_state]=useState('');
  const[Town,setTown]=useState('');
  const[parent_name,setParent_name]=useState('');
  const[parent_phone_no,setParent_phone_no]=useState('');
  const[parent_email,setParent_email]=useState('');
  const[submitclicked,setSubmitclicked]=useState(false);
  
  //submit event handler
  const handleSubmit=(e)=>{
    e.preventDefault();
    //console.log(name,email,phone,going,grade,stream,Institution,native_state,Town,parent_phone_no,parent_email,parent_name);
  const data={
    Name:name,
    Email:email,
    Phone:phone,
    Going:going,
    Grade:grade,
    Stream:stream,
    Institution:Institution,
    Native_state:native_state,
    Town:Town,
    Parent_name:parent_name,
    Parent_phone_no:parent_phone_no,
    Parent_email:parent_email,

  }
  axios.post('https://sheet.best/api/sheets/06a2b209-0bb2-43c1-9ea9-1d2b73d77f9d',data).then((response)=>{
console.log(response);
//clearing form field
setName('');
setEmail('');
setPhone('');
setGoing('');
setGrade('');
setStream('');
setInstitution('');
setNative_state('');
setTown('');
setParent_name('');
setParent_phone_no('');
setParent_email('');
setSubmitclicked(true);
  })
  
  }

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
        <div form='true' className='contact__form' style={{marginTop :"10vh"}}>
          <div className='gif'>
            <img src={call} alt='gif' />
          </div>
          <form className='enquiry__form' autoComplete='off' onSubmit={handleSubmit} >
            <h3>Enquiry Form</h3>
            <div className='form__group col-lg-12 pt-2 p-1'>
            <label >Name:</label> &nbsp;&nbsp;
              <input type='text' name='name' id='name' placeholder='Enter your name'  required onChange={(e)=>setName(e.target.value)}value={name}/>
            </div>
            <div className='form__group col-lg-12 pt-2 p-1'>
              <label >Email:</label>  &nbsp; &nbsp;
              <input type='email' name='email' id='email' placeholder='Enter your email'  required 
              onChange={(e)=>setEmail(e.target.value)}value={email}/>
            </div>
            <div className='form__group col-lg-12 pt-2 p-1'>
              <label >Phone:</label> &nbsp;&nbsp;
              <input type='text' name='phone' id='phone' placeholder='Enter your phone number' required
              onChange={(e)=>setPhone(e.target.value)}value={phone}/>          

            </div>
            <div className='form__group_r col-lg-12 pt-2 p-1'>
               <label htmlFor="school-going" className="radioText">I am:</label>&nbsp;&nbsp;
               <input type="radio" id="school-going" name="going" onClick={handleClick} onChange={(e) => setGoing(e.target.value)} value={going} />&nbsp;&nbsp;School Going&nbsp;&nbsp;
               <input type="radio" id="college-going" name="going" onClick={handleClick2} onChange={(e) => setGoing(e.target.value)} value={going} />&nbsp;&nbsp;College Going
             </div>

              {show ?
              <>
              <div className='form__group col-lg-12 pt-2 p-1'>
                <select name='grade' id='grade' onChange={(e)=>setGrade(e.target.value)}value={grade} required>
                  <option value=''>Select Grade</option>
                  <option value='7'>Grade 7</option>
                  <option value='8'>Grade 8</option>
                  <option value='9'>Grade 9</option>
                  <option value='10'>Grade 10</option>
                  <option value='plus one'>Plus one</option>
                  <option value='plus two'>Plus two</option>
                  </select>

                </div>
                </>
            : null}
               
                <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="stream" type="text" className="form-control" id="" placeholder="Stream" required=""
                              onChange={(e)=>setStream(e.target.value)}value={stream}></input>
                           </div>
                           <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="name_of_institution" type="text" className="form-control" id="" placeholder="Name of Institution" required=""
                              onChange={(e)=>setInstitution(e.target.value)}value={Institution}></input>
                           </div>
                           <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="native_state" type="text" className="form-control" id="" placeholder="Native State" required=""
                              onChange={(e)=>setNative_state(e.target.value)}value={native_state}></input>
                           </div>
                           <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="home_town" type="text" className="form-control" id="" placeholder="Home Town" required=""
                              onChange={(e)=>setTown(e.target.value)}value={Town}></input>
                           </div>
                           {
                              show ? 
                           
                           <>
  
                            <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="parent_name" type="text" className="form-control" id="" placeholder="Parent Name" required=""
                              onChange={(e)=>setParent_name(e.target.value)}value={parent_name}></input>
                           </div>
                           <div className="form__group col-lg-12 pt-2 p-1">
                              <input type="tel" className="form-control" id="quantity" name="parent_phone_no" pattern="\d{10}" placeholder="Parent Phone" required=""
                              onChange={(e)=>setParent_phone_no(e.target.value)}value={parent_phone_no}></input>
                           </div>
                           <div className="form__group col-lg-12 pt-2 p-1">
                              <input name="parent_email" type="email" className="form-control" id="" placeholder="Parent Email Address" required=""
                              onChange={(e)=>setParent_email(e.target.value)}value={parent_email}></input>
                           </div> 
                           {/* <div class="form__group2 col-lg-12  pt-2 p-1">
                              <textarea  name="queries" id="" cols="35" rows="3" class="col-12 form-control"
                                 placeholder="Any Queries ???"></textarea>
                           </div>  */}
                          </>
                          : null}
                           <div className='form__group submit'>
                           <button className="btn col">Submit <i className="fa fa-thumbs-o-up"
                                       ></i>
                                    </button>
                                    {submitclicked && <span id='tick'>&#10004; </span>}
                            </div>
                             </form>
          </div>
            
            <div className='contact'>
              <div className='contact__info'>
                <h1>Contact us</h1>
                    <h5>Mail id : <a id="" href="contact@amritaedge.com">contact@amritaedge.com</a></h5>
                    <h5>Contact number : 9747030712, 9567979111</h5>
                  </div>     
         
        </div>

     
 


    
        <Footer />    
   </>
  )
}

export default Contact