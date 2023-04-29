import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurPrograms from './Pages/OurPrograms';
import NeetRep from './Pages/NeetRep';
import IntMent from './Pages/IntMent';
import PreNuture from './Pages/PreNuture';
import AEdSciCarPro from './Pages/AEdSciCarPro';
import CivilServFound from './Pages/CivilServiceFound';
import Wisdom360 from './Pages/Wisdom360';
import SkillDevPro from './Pages/SkilDevPro.js';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/our-programs' element={<OurPrograms/>}/>
          <Route path='/our-programs/pre-nuture' element={<PreNuture/>}/>
          <Route path='/our-programs/neet-rep' element={<NeetRep/>}/>
          <Route path='/our-programs/sci-car-found' element={<AEdSciCarPro/>}/>
          <Route path='/our-programs/civil-ser' element={<CivilServFound/>}/>
          <Route path='/our-programs/wis-360' element={<Wisdom360/>}/>
          <Route path='/our-programs/skill-develop' element={<SkillDevPro/>}/>
          <Route path='/our-programs/int-ment' element={<IntMent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
