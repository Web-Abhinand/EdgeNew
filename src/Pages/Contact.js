import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Pages/contact.modules.css'
import call from '../Assets/call.gif'
import { useEffect } from 'react'
const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
        <Header />
        <div form className='contact__form' style={{marginTop :"10vh"}}>
          <div className='gif'>
            <img src={call} alt='gif' />
          </div>
          <form className='enquiry__form' >
            <h3>Enquiry Form</h3>
            <div className='form__group col-lg-12 pt-2 p-1'>
            <label htmlFor='email' >Name:</label> &nbsp;&nbsp;
              <input type='text' name='name' id='name' placeholder='Enter your name' />
            </div>
            <div className='form__group col-lg-12 pt-2 p-1'>
              <label htmlFor='email'>Email:</label>  &nbsp; &nbsp;
              <input type='email' name='email' id='email' placeholder='Enter your email' />
            </div>
            <div className='form__group col-lg-12 pt-2 p-1'>
              <label htmlFor='phone'>Phone:</label> &nbsp;&nbsp;
              <input type='text' name='phone' id='phone' placeholder='Enter your phone number' />          

            </div>
            <div className='form__group_r col-lg-12 pt-2 p-1'>
            <label for="" class="radioText">Iam:</label>&nbsp;&nbsp; 
            <input type="radio" value="School Going" checked  name="going"></input>&nbsp;&nbsp;School Going&nbsp;&nbsp;  
            <input type="radio" value="College Going"  name="going"></input> &nbsp;&nbsp;College Going           
              </div>
              <div className='form__group col-lg-12 pt-2 p-1'>
                <select name='grade' id='grade'>
                  <option value=''>Select Grade</option>
                  <option value='1'>Grade 7</option>
                  <option value='2'>Grade 8</option>
                  <option value='3'>Grade 9</option>
                  <option value='4'>Grade 10</option>
                  <option value='5'>Plus one</option>
                  <option value='6'>Plus two</option>
                  </select>

                </div>
                <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="stream" type="text" class="form-control" id="" placeholder="Stream" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="name_of_institution" type="text" class="form-control" id="" placeholder="Name of Institution" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="native_state" type="text" class="form-control" id="" placeholder="Native State" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="home_town" type="text" class="form-control" id="" placeholder="Home Town" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="parent_name" type="text" class="form-control" id="" placeholder="Parent Name" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input type="tel" class="form-control" id="quantity" name="parent_phone_no" pattern="\d{10}" placeholder="Parent Phone" required=""></input>
                           </div>
                           <div class="form__group col-lg-12 pt-2 p-1">
                              <input name="parent_email" type="email" class="form-control" id="" placeholder="Parent Email Address" required=""></input>
                           </div>
                           <div class="form__group2 col-lg-12  pt-2 p-1">
                              <textarea  name="queries" id="" cols="35" rows="3" class="col-12 form-control"
                                 placeholder="Any Queries ???"></textarea>
                           </div>

                           <div className='form__group submit'>
                           <button class="btn col">Submit <i class="fa fa-thumbs-o-up"
                                       ></i>
                                    </button>
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