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
import AEECP from './Pages/AEECP';
import Career from './Pages/Career';



import AESBCP from './Pages/AESBCP';
import AECFP from './Pages/AECFP';
import AENTSE from './Pages/AENTSE';
import EntranceCoaching from './Pages/EntranceCoaching';
import NdaCoaching from './Pages/ndaCoaching';
import AEJeeNeet from './Pages/AEJeeNeet';
import PCM from './Pages/PCM';
import NEETCrash from './Pages/NEETCrash';
import TrigunaSummerCamp from './Pages/TrigunaSummerCamp';
import AETeachersTraining from './Pages/AETeachersTraining';
function App() {
 
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
          <Route path='/our-programs/amrita_edge_commerce_foundation_program' element={<AECFP/>}/>
          <Route path='/our-programs/amrita_edge_ntse' element={<AENTSE/>}/>
          <Route path='/our-programs/entrance_coaching' element={<EntranceCoaching/>}/>
          <Route path='/our-programs/nda_coaching' element={<NdaCoaching/>}/>
          <Route path='/our-programs/int-ment' element={<IntMent/>}/>
          <Route path='/our-programs/amrita_edge_exam_catalyst_program' element={<AEECP/>}/>
          <Route path='/our-programs/amrita_edge_science_bridge_course_program' element={<AESBCP/>}/>
          <Route path='/our-programs/amrita_edge_jee_neet_coaching' element={<AEJeeNeet/>}/>
          <Route path='/our-programs/amrita_edge_pcm' element={<PCM/>}/>
          <Route path='/our-programs/amrita_edge_neet_crash' element={<NEETCrash/>}/>
          <Route path='/our-programs/amrita_edge_triguna_summer_camp' element={<TrigunaSummerCamp/>}/>
          <Route path='/our-programs/amrita_edge_teachers_training' element={<AETeachersTraining/>}/>
          <Route path='/career' element={<Career/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
