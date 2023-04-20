import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurPrograms from './Pages/OurPrograms';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/our-programs' element={<OurPrograms/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
