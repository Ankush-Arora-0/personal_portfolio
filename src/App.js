import './App.css';
import {Routes , Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
